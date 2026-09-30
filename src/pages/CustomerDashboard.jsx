import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, Truck, Wrench, User, CalendarDays } from 'lucide-react';

const CustomerDashboard = () => {
  const [user, setUser] = useState(null);
  const [myBookings, setMyBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('fixora_user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    // Fetch user's bookings (mock filter by name for demo)
    const allBookings = JSON.parse(localStorage.getItem('fixora_bookings') || '[]');
    // In a real app we'd filter by user ID, for now we filter by customer name if it matches
    // Or just show all if none match just so the demo works
    const filtered = allBookings.filter(b => b.customer.toLowerCase() === parsedUser.name.toLowerCase());
    
    // If no bookings match exactly, we'll just show the latest few bookings from local storage to demo
    if (filtered.length === 0 && allBookings.length > 0) {
      setMyBookings(allBookings.slice(0, 3));
    } else {
      setMyBookings(filtered);
    }
  }, [navigate]);

  const getTrackingSteps = (status) => {
    const stages = ['Pending', 'Confirmed', 'Assigned', 'On the way', 'Completed'];
    let currentIndex = stages.indexOf(status);
    // Map "Cancelled" to stop tracking
    if (status === 'Cancelled') currentIndex = -1;
    // Map some admin statuses back to this flow
    if (currentIndex === -1 && status !== 'Cancelled') currentIndex = 0;

    return stages.map((stage, index) => ({
      name: stage,
      completed: index <= currentIndex,
      current: index === currentIndex,
      icon: getIconForStage(stage)
    }));
  };

  const getIconForStage = (stage) => {
    switch (stage) {
      case 'Pending': return Clock;
      case 'Confirmed': return CheckCircle2;
      case 'Assigned': return User;
      case 'On the way': return Truck;
      case 'Completed': return Wrench;
      default: return Clock;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('fixora_user');
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-dark">Welcome, {user.name}</h1>
            <p className="text-gray-600 mt-1">Manage your service requests and track their status.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/book" className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
              New Booking
            </Link>
            <button onClick={handleLogout} className="bg-red-50 text-red-600 px-5 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors border border-red-100">
              Logout
            </button>
          </div>
        </div>

        {/* Active Trackers */}
        <h2 className="text-xl font-bold text-dark mb-6">Your Bookings</h2>
        
        {myBookings.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">No active bookings</h3>
            <p className="text-gray-500 mb-6">You haven't requested any services yet.</p>
            <Link to="/book" className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">
              Book a Service
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {myBookings.map(booking => {
              const steps = getTrackingSteps(booking.status);
              
              return (
                <div key={booking.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                  
                  {booking.status === 'Cancelled' && (
                    <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-xs font-bold px-4 py-1 rounded-bl-xl border-b border-l border-red-200">
                      CANCELLED
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-1">{booking.service}</h3>
                      <p className="text-gray-500 font-medium">Booking ID: <span className="text-dark">{booking.id}</span></p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                      <p className="text-sm text-gray-500 mb-1">Scheduled for</p>
                      <p className="text-dark font-semibold bg-gray-50 px-4 py-2 rounded-lg inline-block border border-gray-100">
                        <CalendarDays className="inline w-4 h-4 mr-2 text-primary" />
                        {booking.date || 'To be updated'}
                      </p>
                    </div>
                  </div>

                  {/* Tracking UI */}
                  {booking.status !== 'Cancelled' && (
                    <div className="mt-10 mb-4">
                      <div className="relative">
                        {/* Progress Bar Background */}
                        <div className="absolute top-6 left-6 right-6 h-1 bg-gray-200 rounded-full -z-10 hidden sm:block"></div>
                        
                        {/* Active Progress Bar */}
                        <div 
                          className="absolute top-6 left-6 h-1 bg-primary rounded-full transition-all duration-500 -z-10 hidden sm:block" 
                          style={{ width: `${(steps.filter(s => s.completed).length - 1) / (steps.length - 1) * 100}%` }}
                        ></div>

                        <div className="flex flex-col sm:flex-row justify-between relative z-0 gap-6 sm:gap-0">
                          {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                              <div key={step.name} className="flex sm:flex-col items-center sm:text-center group relative">
                                {/* Connector for mobile */}
                                {idx !== steps.length - 1 && (
                                  <div className={`absolute top-10 left-6 w-0.5 h-10 -z-10 sm:hidden ${step.completed ? 'bg-primary' : 'bg-gray-200'}`}></div>
                                )}
                                
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-0 sm:mb-3 flex-shrink-0 transition-colors ${
                                  step.current ? 'bg-primary text-white ring-4 ring-orange-100' :
                                  step.completed ? 'bg-orange-50 text-primary border-orange-100' : 
                                  'bg-gray-100 text-gray-400'
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                
                                <div className="ml-4 sm:ml-0">
                                  <p className={`font-semibold text-sm ${
                                    step.current ? 'text-primary' :
                                    step.completed ? 'text-dark' : 
                                    'text-gray-400'
                                  }`}>{step.name}</p>
                                  
                                  {step.current && step.name === 'On the way' && (
                                    <p className="text-xs text-green-600 font-medium mt-1 animate-pulse">
                                      Professional is arriving shortly!
                                    </p>
                                  )}
                                  
                                  {step.current && step.name === 'Assigned' && (
                                    <p className="text-xs text-gray-500 mt-1">
                                      Ramesh Kumar (Electrician)
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
