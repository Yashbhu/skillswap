import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, CreditCard, Home, MessageCircle, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">SkillBook</h1>
        <nav className="flex flex-col gap-4 text-gray-700">
          <a href="#" className="flex items-center gap-2 hover:text-blue-600"><Home size={18}/> Dashboard</a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600"><Calendar size={18}/> My Bookings</a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600"><CreditCard size={18}/> Payments</a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600"><MessageCircle size={18}/> Support</a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600"><Settings size={18}/> Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center bg-white shadow p-4">
          <h2 className="text-xl font-semibold">Welcome back 👋</h2>
          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img src="https://via.placeholder.com/40" alt="avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          {/* Upcoming Booking */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Upcoming Booking</h3>
                <p className="text-gray-600">Haircut with John Doe</p>
                <p className="text-sm text-gray-500">📅 28 Aug, 3:00 PM</p>
                <Button className="mt-3 w-full">Reschedule</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Book */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-md rounded-2xl bg-blue-50">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold mb-2">Quick Book</h3>
                <p className="text-gray-600 mb-4">Rebook your last service in one tap</p>
                <Button>Book Again</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wallet / Earnings */}
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

          {/* Booking History */}
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2">
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-3">Recent Bookings</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex justify-between border-b pb-2"><span>Plumbing Service</span> <span className="text-sm text-green-600">Completed</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Salon - Hair Spa</span> <span className="text-sm text-yellow-600">Pending</span></li>
                  <li className="flex justify-between"><span>Yoga Class</span> <span className="text-sm text-red-600">Cancelled</span></li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
