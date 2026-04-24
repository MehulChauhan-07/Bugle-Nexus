import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CERTIFICATES = [
  { title: 'Digital Marketing Fundamentals', icon: 'school', iconColor: 'text-amber-500', iconBg: 'bg-amber-500/10', date: '15 Feb 2025', score: '91%' },
  { title: 'Consumer Behavior Insights', icon: 'analytics', iconColor: 'text-amber-500', iconBg: 'bg-amber-500/10', date: '10 Jan 2025', score: '85%' },
  { title: 'Content Strategy Specialist', icon: 'edit_note', iconColor: 'text-amber-500', iconBg: 'bg-amber-500/10', date: '22 Dec 2024', score: '94%' },
];

const BADGES = [
  { label: 'Fast Learner', icon: 'bolt', locked: false },
  { label: 'Quiz Master', icon: 'emoji_events', locked: false },
  { label: 'Consistent Learner', icon: 'trending_up', locked: false },
  { label: 'Team Player', icon: 'groups', locked: false },
  { label: 'Elite Architect', icon: 'lock', locked: true },
  { label: 'Global Mentor', icon: 'lock', locked: true },
];

const TABS = ['Certificates', 'Badges', 'Training History', 'Leaderboard'];

const EmployeeCertification = () => {
  const [activeTab, setActiveTab] = useState('Certificates');

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="flex items-center justify-between px-6 py-3 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 font-headline">Bugle.in</Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/employee/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Dashboard</Link>
              <Link to="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Courses</Link>
              <Link to="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Library</Link>
              <Link to="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Community</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-slate-50 transition-all text-slate-600">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-50 transition-all text-slate-600">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">P</div>
          </div>
        </nav>
      </header>

      <div className="flex min-h-screen pt-16">
        {/* Side Navigation */}
        <aside className="h-screen w-64 bg-slate-50 fixed left-0 top-16 flex flex-col p-4 gap-2">
          <div className="px-4 py-6 mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">P</div>
              <div>
                <p className="font-headline font-bold text-sm text-slate-900">Priya Sharma</p>
                <p className="text-xs text-slate-500">Marketing Executive</p>
              </div>
            </div>
          </div>
          <Link to="/employee/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
            <span className="material-symbols-outlined">person</span>
            <span className="text-sm">Overview</span>
          </Link>
          <Link to="/employee/certifications" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow-sm">
            <span className="material-symbols-outlined">verified</span>
            <span className="text-sm">Certificates</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
            <span className="material-symbols-outlined">military_tech</span>
            <span className="text-sm">Badges</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
            <span className="material-symbols-outlined">query_stats</span>
            <span className="text-sm">Training Stats</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
            <span className="material-symbols-outlined">tune</span>
            <span className="text-sm">Settings</span>
          </Link>
          <div className="mt-auto px-4 pb-8">
            <button className="w-full py-3 px-4 bg-secondary text-white rounded-lg text-sm font-semibold shadow-sm hover:opacity-90 transition-all">
              View Transcripts
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8 bg-surface">
          {/* Employee Summary Card */}
          <section className="mb-10">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-wrap lg:flex-nowrap gap-8 items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center text-white text-4xl font-bold border-4 border-surface-container-low p-1">
                    P
                  </div>
                  <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                </div>
                <div className="space-y-1">
                  <h1 className="font-headline text-3xl font-extrabold text-on-surface">Priya Sharma</h1>
                  <p className="text-on-surface-variant font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">work</span>
                    Marketing Executive • Marketing Team
                  </p>
                  <p className="text-on-surface-variant text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    Member since June 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 pr-4">
                <div className="text-right hidden sm:block">
                  <p className="text-on-surface-variant text-sm font-medium mb-1">Overall Training Score</p>
                  <p className="font-headline text-2xl font-bold text-secondary">87/100</p>
                </div>
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-high" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8" />
                    <circle className="text-secondary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="32.65" strokeWidth="8" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-headline text-lg font-bold">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <nav className="mb-8">
            <div className="flex gap-10 border-b border-outline-variant/20">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 border-b-2 text-sm tracking-wide font-headline transition-all ${
                    activeTab === tab
                      ? 'border-secondary text-secondary font-bold'
                      : 'border-transparent text-on-surface-variant hover:text-on-surface font-medium'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          {/* Certificates Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {CERTIFICATES.map((cert) => (
                <div key={cert.title} className="bg-surface-container-lowest p-6 rounded-xl border border-amber-500/20 hover:shadow-lg transition-all duration-300 group">
                  <div className={`${cert.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined ${cert.iconColor} text-3xl`}>{cert.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-4">Issued by Bugle.in Learning Hub</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span>Date:</span>
                      <span className="font-medium text-on-surface">{cert.date}</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span>Score:</span>
                      <span className="font-bold text-secondary">{cert.score}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 bg-surface-container-low hover:bg-surface-container text-secondary text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">download</span>
                      Download PDF
                    </button>
                    <button className="flex items-center justify-center w-12 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] py-2.5 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Badges Section */}
          <section className="mb-12">
            <h2 className="font-headline text-xl font-bold mb-6 text-on-surface">Earned Badges</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {BADGES.map((badge) => (
                <div key={badge.label} className={`flex flex-col items-center gap-3 ${badge.locked ? 'opacity-40' : ''}`}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${badge.locked ? 'bg-slate-200 border-slate-300' : 'bg-green-600/10 border-green-600/20'}`}>
                    <span className={`material-symbols-outlined text-4xl ${badge.locked ? 'text-slate-500' : 'text-green-600'}`} style={{ fontVariationSettings: badge.locked ? undefined : "'FILL' 1" }}>
                      {badge.icon}
                    </span>
                  </div>
                  <span className={`text-xs font-bold ${badge.locked ? 'text-slate-500' : 'text-on-surface'}`}>{badge.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Metric Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-outline-variant/20 flex items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm font-medium">Total Training Hours</p>
                <p className="font-headline text-2xl font-extrabold">48 hrs</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant/20 flex items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm font-medium">Courses Completed</p>
                <p className="font-headline text-2xl font-extrabold">6/8</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant/20 flex items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">grade</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm font-medium">Average Quiz Score</p>
                <p className="font-headline text-2xl font-extrabold">87%</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EmployeeCertification;
