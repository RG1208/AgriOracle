import React from 'react';
import { BarChart2, Users, Activity, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Total Users</h3>
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">705</p>
          <p className="text-sm text-gray-500">↑ 12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Active Users</h3>
            <Activity className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">357</p>
          <p className="text-sm text-gray-500">↑ 8% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Disease Predictions</h3>
            <BarChart2 className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">1,248</p>
          <p className="text-sm text-gray-500">↑ 23% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Support Tickets</h3>
            <MessageSquare className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-3xl font-bold">25</p>
          <p className="text-sm text-gray-500">↓ 5% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">User Activity</h3>
          <div className="h-64 bg-gray-100 rounded-lg"></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Disease Predictions by Crop</h3>
          <div className="h-64 bg-gray-100 rounded-lg"></div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-4">Recent User Reviews</h3>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3].map((review) => (
                <tr key={review}>
                  <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap">5 ⭐</td>
                  <td className="px-6 py-4">Great service! Very accurate predictions.</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;