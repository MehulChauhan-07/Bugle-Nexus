import React from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { label: 'Assigned', value: '06', icon: 'assignment_ind', color: 'text-on-surface-variant', border: '' },
  { label: 'Completed', value: '03', icon: 'check_circle', color: 'text-emerald-600', border: '' },
  { label: 'In Progress', value: '02', icon: 'pending', color: 'text-secondary', border: '' },
  { label: 'Overdue', value: '01', icon: 'event_busy', color: 'text-error', border: 'border-b-4 border-error' },
];

const TRAININGS = [
  { name: 'Business Communication Skills', assignedBy: 'HR Department', due: 'Nov 12, 2024', status: 'In Progress', statusClass: 'bg-secondary/10 text-secondary', action: 'Resume', actionClass: 'text-secondary' },
  { name: 'Cybersecurity Essentials', assignedBy: 'IT Security', due: 'Oct 20, 2024', status: 'Overdue', statusClass: 'bg-error/10 text-error', action: 'Start Now', actionClass: 'text-error' },
  { name: 'Leadership 101', assignedBy: 'Siddharth V. (VP)', due: 'Dec 05, 2024', status: 'Not Started', statusClass: 'bg-slate-100 text-slate-500', action: 'Details', actionClass: 'text-on-surface-variant' },
  { name: 'Project Management Agile', assignedBy: 'Team Lead', due: 'Oct 15, 2024', status: 'Completed', statusClass: 'bg-emerald-100 text-emerald-700', action: 'Review', actionClass: 'text-emerald-700' },
];

const EmployeeDashboard = () => {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 flex flex-col py-6 px-4 z-50 border-r border-slate-200">
        <div className="mb-10 px-4">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 font-headline">Bugle.in</h1>
          <p className="text-xs text-slate-500 font-medium">Marketing Team</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/employee/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-700 font-semibold border-r-4 border-blue-700 bg-slate-200/50 transition-colors duration-200">
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">My Training</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors duration-200">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-medium">Assigned Courses</span>
          </Link>
          <Link to="/employee/certifications" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors duration-200">
            <span className="material-symbols-outlined">workspace_premium</span>
            <span className="text-sm font-medium">Certificates</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors duration-200">
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="text-sm font-medium">Leaderboard</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors duration-200">
            <span className="material-symbols-outlined">help</span>
            <span className="text-sm font-medium">Help</span>
          </Link>
        </nav>
        <div className="mt-auto px-4 py-4 flex items-center gap-3 border-t border-slate-200 pt-6">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">P</div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">Priya Sharma</p>
            <p className="text-xs text-slate-500 truncate">Marketing Lead</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen bg-surface-container-low pb-12">
        {/* Top Navigation */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 z-40 shadow-sm">
          <h2 className="font-headline text-xl font-extrabold tracking-tight text-primary">Good morning, Priya</h2>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                className="pl-10 pr-4 py-2 w-64 bg-surface-container-lowest border-none rounded-full text-sm focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                placeholder="Search courses..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-on-surface-variant hover:bg-slate-100 rounded-full transition-all relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">P</div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="pt-24 px-8 max-w-7xl mx-auto space-y-8">
          {/* Alert Banner */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3 text-amber-900">
              <span className="material-symbols-outlined text-amber-600">warning</span>
              <p className="font-medium text-sm">You have 2 overdue trainings. Complete by Friday.</p>
            </div>
            <button className="text-amber-700 text-xs font-bold hover:underline">Take Action</button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${stat.border}`}>
                <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className={`text-3xl font-headline font-extrabold ${stat.color}`}>{stat.value}</h3>
                  <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Interactive Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Continue Learning Card */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-headline text-lg font-bold">Continue Where You Left Off</h3>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group transition-all hover:-translate-y-0.5">
                <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                  <img
                    alt="Digital Marketing course thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd4kww7830excuo7_OzIq7jbZPdmEaD-sb3a_oO_pT9VknPrM_3rnJlpruBgAAf5kcKZztybacMHl4M_vAl-C9C3Rjy5vZoHJH0KXMgoMeoYIb4WIPycQKt0jPsCfk3gP3uKujx8a9HGVaa_RRqwyJpFhMbYQYAU1-NkuHMk_CtSA4a-j3MVa8Z9yUaEsySwfV8F98C-HGVXqBKp6Eg3HSu39fiKbGtwfuQn8_7nQZj_u2bfUOdQ6xby-jIRcI0QODUAq0pTOypXIO"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="bg-secondary/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">MODULE 4/7</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">Digital Marketing Fundamentals</h4>
                    <p className="text-on-surface-variant text-sm mb-6">
                      Current Module: <span className="text-on-surface font-medium italic">SEO &amp; Content Strategy</span>
                    </p>
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-secondary uppercase tracking-tight">Progress</span>
                        <span className="text-xs font-bold text-secondary">58%</span>
                      </div>
                      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-secondary-container rounded-full" style={{ width: '58%' }}></div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/course/video"
                    className="w-full md:w-fit px-8 py-3 bg-gradient-to-r from-secondary to-secondary-container text-white font-bold rounded-lg text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Resume Training
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Live Sessions Sidebar */}
            <div className="space-y-4">
              <h3 className="font-headline text-lg font-bold">Upcoming Live Session</h3>
              <div className="bg-primary-container text-white p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-secondary-fixed">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Oct 24, 2024</span>
                  </div>
                  <h4 className="text-lg font-headline font-bold mb-1 leading-tight">Advanced Analytics Workshop</h4>
                  <p className="text-primary-fixed-dim text-xs mb-6">10:00 AM - 11:30 AM (90 mins)</p>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 border-2 border-primary-container flex items-center justify-center text-xs font-bold">S1</div>
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed/50 border-2 border-primary-container flex items-center justify-center text-xs font-bold">S2</div>
                    </div>
                    <span className="text-[10px] text-on-primary-container font-medium">+14 others joined</span>
                  </div>
                  <button className="w-full py-3 bg-secondary text-white font-bold rounded-lg text-sm hover:bg-secondary-container transition-colors">
                    Join Session
                  </button>
                </div>
              </div>

              {/* Mandatory Compliance */}
              <div className="bg-error-container/20 border-2 border-error/10 p-5 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-error">
                  <span className="material-symbols-outlined text-sm">gavel</span>
                  <h4 className="text-xs font-bold uppercase tracking-widest">Mandatory Compliance</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg flex items-center gap-3 shadow-sm border-l-4 border-error">
                    <span className="material-symbols-outlined text-error">lock_person</span>
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold truncate">Data Privacy Policy 2024</p>
                      <p className="text-[10px] text-on-surface-variant">Due in 2 days</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex items-center gap-3 shadow-sm border-l-4 border-error">
                    <span className="material-symbols-outlined text-error">health_and_safety</span>
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold truncate">Workplace Safety Guidelines</p>
                      <p className="text-[10px] text-on-surface-variant">Due in 5 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assigned Trainings Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-lg font-bold">Assigned Training List</h3>
              <button className="text-secondary text-xs font-bold flex items-center gap-1 hover:underline">
                View All History
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high/30 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                    <th className="px-8 py-4">Course Name</th>
                    <th className="px-8 py-4">Assigned By</th>
                    <th className="px-8 py-4">Due Date</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-surface-container">
                  {TRAININGS.map((t) => (
                    <tr key={t.name} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-8 py-5 font-bold">{t.name}</td>
                      <td className="px-8 py-5 text-on-surface-variant">{t.assignedBy}</td>
                      <td className={`px-8 py-5 ${t.status === 'Overdue' ? 'text-error font-medium' : 'text-on-surface-variant'}`}>{t.due}</td>
                      <td className="px-8 py-5">
                        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter ${t.statusClass}`}>
                          {t.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className={`font-bold hover:underline ${t.actionClass}`}>{t.action}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
