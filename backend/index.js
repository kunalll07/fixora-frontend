const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');
require('dotenv').config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() }); // RAM mein image rakhne ke liye S3 upload se pehle

// Middlewares
app.use(cors());
app.use(express.json());

// ==========================================
// AWS Config (IAM role ya env keys use karega)
// ==========================================
const s3Client = new S3Client({ region: process.env.AWS_REGION || 'ap-south-1' });
const dynamoClient = new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-south-1' });

// ==========================================
// Database Connection (RDS MySQL)
// ==========================================
let pool;

const initDB = async () => {
  try {
    // 1. Pehle bina database name ke connect karo taaki naya DB bana sakein
    const tempConnection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });
    
    await tempConnection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    await tempConnection.end();

    // 2. Ab asli Pool banao database ke saath
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    const connection = await pool.getConnection();
    
    // Create Bookings Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        booking_id VARCHAR(50) NOT NULL,
        customer VARCHAR(100),
        service VARCHAR(100),
        date VARCHAR(50),
        phone VARCHAR(20),
        status VARCHAR(50) DEFAULT 'Pending',
        photo_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ AWS RDS MySQL Connection Successful! Tables Ready.');
    connection.release();
  } catch (error) {
    console.error('❌ RDS Error:', error.message);
  }
};
initDB();

// ==========================================
// ROUTES
// ==========================================

// 1. Base Route
app.get('/', (req, res) => {
  res.send('Fixora AWS Backend is Live! 🚀');
});

// 2. Bookings Route (Save to RDS + Upload to S3)
app.post('/api/bookings', upload.single('photo'), async (req, res) => {
  try {
    let photoUrl = null;
    
    // Agar customer ne photo daali hai toh S3 pe upload karo
    if (req.file) {
      const fileName = `bookings/${Date.now()}_${req.file.originalname}`;
      const bucketName = process.env.S3_BUCKET_NAME;
      
      const s3Params = {
        Bucket: bucketName,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };
      
      await s3Client.send(new PutObjectCommand(s3Params));
      photoUrl = `https://${bucketName}.s3.${process.env.AWS_REGION || 'ap-south-1'}.amazonaws.com/${fileName}`;
    }

    // RDS mein save karo
    const { customer, service, date, phone } = req.body;
    const booking_id = 'FX' + Math.floor(Math.random() * 10000);
    
    const [result] = await pool.query(
      `INSERT INTO bookings (booking_id, customer, service, date, phone, photo_url) VALUES (?, ?, ?, ?, ?, ?)`,
      [booking_id, customer, service, date, phone, photoUrl]
    );

    res.status(201).json({ success: true, booking_id, photo_url: photoUrl });
  } catch (error) {
    console.error('Error in Booking:', error);
    res.status(500).json({ success: false, message: 'Booking failed!' });
  }
});

// 3. Get All Bookings (Admin Panel ke liye)
app.get('/api/bookings', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
});

// 4. Contact Enquiries (Save to DynamoDB)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const enquiryId = 'ENQ-' + Date.now();

    const dynamoParams = {
      TableName: process.env.DYNAMODB_TABLE_NAME || 'FixoraContactEnquiries',
      Item: {
        'enquiryId': { S: enquiryId },
        'name': { S: name },
        'email': { S: email },
        'message': { S: message },
        'createdAt': { S: new Date().toISOString() }
      }
    };

    await dynamoClient.send(new PutItemCommand(dynamoParams));
    res.status(201).json({ success: true, message: 'Enquiry sent successfully!' });
  } catch (error) {
    console.error('Error saving to DynamoDB:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// ==========================================
// Start Server
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server port ${PORT} par daud raha hai!`);
});
