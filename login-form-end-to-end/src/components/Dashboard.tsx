import { useState } from "react";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Users", value: "2,847", change: "+12%" },
    { title: "Monthly Revenue", value: "$18,420", change: "+8.4%" },
    { title: "New Orders", value: "356", change: "+5.1%" },
    { title: "Conversion Rate", value: "4.3%", change: "+1.2%" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <h2 className="text-xl font-bold mb-8">SaaS Admin</h2>

          <nav className="space-y-3">
            {["overview", "analytics", "users", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2 rounded-lg capitalize transition ${
                  activeTab === tab ? "bg-blue-600" : "hover:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section (User + Logout) */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-400">admin@email.com</p>
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-sm py-2 rounded-lg transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-900 border-b border-gray-800 px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold capitalize">{activeTab}</h1>
          <div className="text-sm text-gray-400">Welcome back, Admin 👋</div>
        </header>

        {/* Page Content */}
        <main className="p-8 space-y-8">
          {activeTab === "overview" && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow hover:border-blue-600 transition"
                  >
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <div className="flex justify-between items-end mt-2">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <span className="text-green-400 text-sm">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue & Subscriptions */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h2 className="font-semibold mb-4">Revenue Overview</h2>
                  <p className="text-gray-400 text-sm">
                    This month revenue increased by 8.4% compared to last month.
                  </p>
                  <div className="mt-6 text-3xl font-bold">$18,420</div>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                  <h2 className="font-semibold mb-4">Active Subscriptions</h2>
                  <div className="text-3xl font-bold">1,204</div>
                  <p className="text-gray-400 text-sm mt-2">
                    76% of total users are subscribed to premium plans.
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h2 className="font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>John upgraded to Pro Plan</span>
                    <span className="text-gray-400">2 hours ago</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>New user registered</span>
                    <span className="text-gray-400">5 hours ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Server performance updated</span>
                    <span className="text-gray-400">Yesterday</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "analytics" && (
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h2 className="font-semibold mb-4">Traffic Analytics</h2>
              <p className="text-gray-400">24,389 visits this month</p>
              <p className="text-gray-400 mt-2">
                Average session duration: 3m 42s
              </p>
              <p className="text-gray-400 mt-2">Bounce rate: 41%</p>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h2 className="font-semibold mb-4">User List</h2>
              <table className="w-full text-sm">
                <thead className="text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Plan</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">John Doe</td>
                    <td>john@email.com</td>
                    <td>Pro</td>
                    <td className="text-green-400">Active</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Jane Smith</td>
                    <td>jane@email.com</td>
                    <td>Basic</td>
                    <td className="text-yellow-400">Pending</td>
                  </tr>
                  <tr>
                    <td className="py-2">Alex Brown</td>
                    <td>alex@email.com</td>
                    <td>Enterprise</td>
                    <td className="text-green-400">Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h2 className="font-semibold mb-4">Account Settings</h2>
              <p className="text-gray-400">App Version: 1.0.0</p>
              <p className="text-gray-400 mt-2">Notifications: Enabled</p>
              <button className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
                Logout
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
