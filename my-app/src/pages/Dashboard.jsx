import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, Home, MessageCircle, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { ChartPieSimple } from "@/components/chart-pie-simple";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { answer, dropdownValue } = location.state || {};


  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-50">

     
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <nav className="flex flex-col gap-4 text-gray-700">
          <NavLink to="/onboarding/admin/dashboard" className="flex items-center gap-2 hover:text-blue-600">
            <Home size={18}/> Dashboard
          </NavLink>
          <NavLink to="/onboarding/admin/bookings" className="flex items-center gap-2 hover:text-blue-600">
            <Calendar size={18}/> My Bookings
          </NavLink>
          <NavLink to="/onboarding/admin/payments" className="flex items-center gap-2 hover:text-blue-600">
            <CreditCard size={18}/> Payments
          </NavLink>
          <NavLink to="/onboarding/admin/support" className="flex items-center gap-2 hover:text-blue-600">
            <MessageCircle size={18}/> Support
          </NavLink>
          <NavLink to="/onboarding/admin/settings" className="flex items-center gap-2 hover:text-blue-600">
            <Settings size={18}/> Settings
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-y-auto p-6">

     
        {answer && (
          <div className="mb-6 p-4 bg-yellow-100 rounded-lg text-center font-semibold text-lg">
            Calendar Integration Selected: {answer} {answer === "yes" && `(${dropdownValue})`}
          </div>
        )}

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Booking Stats</h3>
                <ChartPieSimple />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-md rounded-2xl bg-blue-50">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                <p className="text-gray-600 mb-4">Add a new service provider or send notifications</p>
                <Button>Add User</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
                <p className="text-2xl font-bold text-green-600">₹1,250</p>
                <p className="text-gray-500 text-sm">Last transaction: ₹250 (Aug 24)</p>
                <Button className="mt-3 w-full">Add Funds</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

   
        <h2 className="text-2xl font-bold mt-8 mb-4">Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map(user => (
            <motion.div key={user.id} whileHover={{ scale: 1.02 }}>
              <Card className="shadow-md rounded-2xl p-4 bg-indigo-50">
                <CardContent>
                  <h3 className="font-semibold text-lg mb-1">{user.username}</h3>
                  <p className="text-gray-600 text-sm mb-1">{user.email}</p>
                  <p className={`mb-1 font-medium ${user.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                    Status: {user.status || "Unknown"}
                  </p>
                  <p className="text-gray-600 text-sm">Total Bookings: {user.total_bookings || 0}</p>
                  <p className="text-gray-600 text-sm">Pending: {user.pending || 0}</p>
                  <p className="text-gray-600 text-sm">Completed: {user.completed || 0}</p>
                  <Button className="mt-3 w-full">View Profile</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

       
        <h2 className="text-2xl font-bold mt-8 mb-4">Recent Bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-4">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex justify-between border-b pb-2">
                    <span>Plumbing Service</span>
                    <span className="text-sm text-green-600">Completed</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Salon - Hair Spa</span>
                    <span className="text-sm text-yellow-600">Pending</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Yoga Class</span>
                    <span className="text-sm text-red-600">Cancelled</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
