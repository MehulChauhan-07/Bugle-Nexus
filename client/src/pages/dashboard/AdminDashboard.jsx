import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const STATS = [
  { label: 'Total Employees', value: '124', icon: 'group', color: 'bg-blue-50 text-blue-600', delta: '+8 this month' },
  { label: 'Active Courses', value: '18', icon: 'auto_stories', color: 'bg-green-50 text-green-600', delta: '3 new this week' },
  { label: 'Completion Rate', value: '74%', icon: 'pie_chart', color: 'bg-amber-50 text-amber-600', delta: '↑ 6% vs last month' },
  { label: 'Pending Reviews', value: '7', icon: 'pending_actions', color: 'bg-red-50 text-red-500', delta: 'Action needed' },
];

const TOP_LEARNERS = [
  { name: 'Kunjal Patel', dept: 'HR', score: 98, badge: '🥇' },
  { name: 'Jeel Mungra', dept: 'Engineering', score: 94, badge: '🥈' },
  { name: 'Priya Shah', dept: 'Product', score: 91, badge: '🥉' },
  { name: 'Arjun Mehta', dept: 'Design', score: 88, badge: '' },
  { name: 'Rohan Gupta', dept: 'Sales', score: 85, badge: '' },
];

const DEPT_PROGRESS = [
  { name: 'Engineering', progress: 82, count: 34, color: 'bg-blue-500' },
  { name: 'HR & People', progress: 91, count: 12, color: 'bg-green-500' },
  { name: 'Product', progress: 68, count: 18, color: 'bg-amber-500' },
  { name: 'Sales', progress: 55, count: 28, color: 'bg-red-400' },
  { name: 'Operations', progress: 74, count: 22, color: 'bg-indigo-500' },
];

const RECENT_ACTIVITY = [
  { user: 'Kunjal Patel', action: 'Completed', course: 'Leadership Essentials', time: '2m ago', icon: 'verified' },
  { user: 'Jeel Mungra', action: 'Enrolled in', course: 'React Advanced Patterns', time: '18m ago', icon: 'add_circle' },
  { user: 'Rohan Gupta', action: 'Earned certificate', course: 'Sales Fundamentals', time: '1h ago', icon: 'workspace_premium' },
  { user: 'Priya Shah', action: 'Started', course: 'UI/UX Design Systems', time: '3h ago', icon: 'play_circle' },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-xl font-black text-white tracking-tight">Bugle.in</button>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <span className="text-blue-400 font-semibold">Admin Dashboard</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Employees</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Reports</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Settings</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-400 hover:text-white">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">7</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">R</div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-white leading-none">Ravi Kamdar</p>
                <p className="text-xs text-gray-400">Admin · TechCorp India</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Organization Setup Complete!
              </div>
              <h1 className="text-2xl font-extrabold mb-1">Welcome, Admin Ravi! 🎉</h1>
              <p className="text-white/70 text-sm max-w-md">
                Your TechCorp India LMS is live. You have <strong className="text-white">124 employees</strong> enrolled and <strong className="text-white">18 active courses</strong> running.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-gray-900 px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-md transition-all active:scale-[0.98]">
                + Invite Employees
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/20 transition-all">
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
              </div>
              <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              <p className="text-xs text-green-600 font-medium mt-1">{stat.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Department Progress */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-gray-900">Department Progress</h2>
                <button className="text-xs text-blue-600 font-semibold hover:underline">View All</button>
              </div>
              <div className="space-y-5">
                {DEPT_PROGRESS.map((dept) => (
                  <div key={dept.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-800">{dept.name}</span>
                        <span className="text-xs text-gray-400">{dept.count} people</span>
                      </div>
                      <span className="text-sm font-bold text-gray-700">{dept.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${dept.color}`}
                        style={{ width: `${dept.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Learners */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full">
              <h2 className="text-base font-bold text-gray-900 mb-5">🏆 Top Learners</h2>
              <div className="space-y-4">
                {TOP_LEARNERS.map((learner, i) => (
                  <div key={learner.name} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600 shrink-0">
                      {learner.badge || i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{learner.name}</p>
                      <p className="text-xs text-gray-400">{learner.dept}</p>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{learner.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full">
              <h2 className="text-base font-bold text-gray-900 mb-5">Recent Activity</h2>
              <div className="space-y-4">
                {RECENT_ACTIVITY.map((act, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-blue-600 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{act.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-800 leading-tight">
                        <strong>{act.user}</strong> {act.action}{' '}
                        <span className="text-blue-600 font-medium">"{act.course}"</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-5 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                View All Activity →
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Assign Course', icon: 'add_circle', color: 'bg-blue-600', href: '#' },
            { label: 'Invite Employee', icon: 'person_add', color: 'bg-green-600', href: '#' },
            { label: 'View Reports', icon: 'bar_chart', color: 'bg-indigo-600', href: '#' },
            { label: 'Manage Roles', icon: 'manage_accounts', color: 'bg-amber-600', href: '#' },
          ].map((action) => (
            <button
              key={action.label}
              className={`${action.color} text-white rounded-2xl p-5 flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98] shadow-md`}
            >
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{action.icon}</span>
              <span className="text-sm font-bold">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
