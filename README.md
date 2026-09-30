# Fixora - Home Service Booking Platform

Fixora is a complete, modern, and professional home-service booking website. It connects customers with trusted service professionals for everyday repairs and maintenance tasks such as plumbing, electrical, AC repair, cleaning, and more.

## Project Overview
This project is built using React and Vite, featuring a premium UI designed for maximum user engagement and trust. It includes a complete responsive frontend with local mock data for the services and booking functionality.

## Features
- **Modern UI**: Clean, professional design with a light background and vibrant orange accents.
- **Responsive Layout**: Mobile-first design that looks great on all devices.
- **Service Categories**: Dedicated pages for various home services with detailed descriptions and pricing.
- **Booking System**: A complete booking flow capturing user details, service selection, and problem description.
- **Admin Dashboard**: A localized admin interface to manage and track service requests.
- **Reusable Components**: Well-structured React components for maintainability.

## Tech Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Folder Structure
```text
fixora/
├── src/
│   ├── assets/           # Static assets (images, icons)
│   ├── components/       # Reusable UI components (Navbar, Footer, ServiceCard)
│   ├── data/             # Mock data (servicesData.js)
│   ├── pages/            # Page components (Home, Services, Booking, AdminDashboard)
│   ├── App.jsx           # Main application component with routing
│   ├── index.css         # Global styles and Tailwind directives
│   └── main.jsx          # Application entry point
├── public/               # Public assets
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
└── README.md             # Project documentation
```

## Installation Steps
1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd fixora
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## How to Run Locally
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

## Future AWS Architecture
While the current version uses local/mock data, the application is designed to be easily integrated with AWS services for a production-ready deployment:

- **Amazon EC2**: For scalable application hosting and backend server deployment.
- **Amazon RDS**: To manage the relational database for customer data, service professionals, and booking records.
- **Amazon DynamoDB**: For handling high-speed read/write operations such as user activity logs and temporary enquiry data.
- **Amazon S3**: For secure and durable storage of user uploads (e.g., problem photos) and static assets.
- **Amazon IAM**: To ensure secure and granular access control for all AWS resources.
- **Amazon EBS**: To provide persistent block storage for EC2 instances.
- **Amazon Route 53**: For highly available and scalable domain name system (DNS) web routing.
