import { useState, useEffect } from 'react';
import { LayoutDashboard, Users, CalendarDays, CheckCircle, Clock } from 'lucide-react';

const initialMockBookings = [
  { id: 'FX001', customer: 'Rahul', service: 'AC Repair', date: '05 Oct', phone: '987xxxxxxx', status: 'Pending' },
  { id: 'FX002', customer: 'Amit', service: 'Plumbing', date: '06 Oct', phone: '987xxxxxxx', status: 'Confirmed' },
  { id: 'FX003', customer: 'Priya', service: 'Home Cleaning', date: '07 Oct', phone: '987xxxxxxx', status: 'Completed' },
  { id: 'FX004', customer: 'Sneha', service: 'Electrical', date: '08 Oct', phone: '987xxxxxxx', status: 'Pending' },
];

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if admin is already authenticated in this session
    const adminAuth = sessionStorage.getItem('fixora_admin_auth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }

    const saved = localStorage.getItem('fixora_bookings');
    if (saved) {
      // Merge initial with saved (localStorage items come first)
      const parsed = JSON.parse(saved);
      const combined = [...parsed, ...initialMockBookings.filter(mb => !parsed.find(p => p.id === mb.id))];
      setBookings(combined);
    } else {
      setBookings(initialMockBookings);
    }
  }, []);

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    setBookings(updated);
    
    // Save to localStorage
    const savedOnly = updated.filter(b => !initialMockBookings.find(ib => ib.id === b.id && ib.status === b.status));
    if (savedOnly.length > 0) {
      localStorage.setItem('fixora_bookings', JSON.stringify(updated.filter(b => b.id.startsWith('FX') && !initialMockBookings.find(ib => ib.id === b.id))));
    } else {
      // just save all for simplicity
       localStorage.setItem('fixora_bookings', JSON.stringify(updated));
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200">Pending</span>;
      case 'Confirmed':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">Confirmed</span>;
      case 'Assigned':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200">Assigned</span>;
      case 'On the way':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">On the way</span>;
      case 'Completed':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">Completed</span>;
      case 'Cancelled':
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">Cancelled</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'Pending').length,
    confirmed: bookings.filter(b => b.status === 'Confirmed' || b.status === 'Assigned').length,
    completed: bookings.filter(b => b.status === 'Completed').length,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded admin password for demo purposes
    if (passwordInput === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('fixora_admin_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-dark">Admin Access</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter the master password to access the dashboard.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Admin Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                placeholder="Hint: admin123"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-bold text-lg transition-all shadow-md"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-dark flex items-center">
            <LayoutDashboard className="w-8 h-8 mr-3 text-primary" />
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
              Mock Mode
            </div>
            <button 
              onClick={() => {
                sessionStorage.removeItem('fixora_admin_auth');
                setIsAuthenticated(false);
              }}
              className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Lock
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Total Bookings</p>
              <h3 className="text-3xl font-bold text-dark">{stats.total}</h3>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
              <CalendarDays className="w-6 h-6" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Pending</p>
              <h3 className="text-3xl font-bold text-dark">{stats.pending}</h3>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Confirmed</p>
              <h3 className="text-3xl font-bold text-dark">{stats.confirmed}</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
              <Users className="w-6 h-6" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-dark">{stats.completed}</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 bg-white">
            <h3 className="text-lg font-bold text-dark">Recent Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Booking ID</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Photo</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Phone</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-dark">{booking.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{booking.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{booking.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {booking.photo ? (
                        <div className="w-10 h-10 rounded overflow-hidden border border-gray-200 cursor-pointer hover:scale-150 transition-transform origin-left relative z-10 hover:shadow-lg">
                          <img src={booking.photo} alt="Problem" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">No image</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(booking.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <select 
                        className="bg-white border border-gray-200 text-gray-700 text-xs rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none ml-auto"
                        value={booking.status}
                        onChange={(e) => updateStatus(booking.id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Assigned">Assigned</option>
                        <option value="On the way">On the way</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
