import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const STATS = [
  { label: 'Courses Enrolled', value: '4', icon: 'auto_stories', color: 'bg-blue-50 text-blue-600', delta: '+2 this week' },
  { label: 'Hours Learned', value: '12.5h', icon: 'schedule', color: 'bg-green-50 text-green-600', delta: '+3h today' },
  { label: 'Certificates', value: '1', icon: 'verified', color: 'bg-amber-50 text-amber-600', delta: 'New!' },
  { label: 'Streak', value: '7 days', icon: 'local_fire_department', color: 'bg-red-50 text-red-500', delta: 'Personal best 🎉' },
];

const COURSES = [
  { title: 'React & Next.js Mastery', category: 'Web Development', progress: 68, thumb: '💻', instructor: 'Priya Shah', level: 'Intermediate' },
  { title: 'Python for Data Science', category: 'Data Science', progress: 30, thumb: '📊', instructor: 'Arjun Mehta', level: 'Beginner' },
  { title: 'UI/UX Foundations in Figma', category: 'Design', progress: 15, thumb: '🎨', instructor: 'Neha Joshi', level: 'Beginner' },
];

const RECOMMENDED = [
  { title: 'Node.js API Development', category: 'Backend', thumb: '🔌', rating: 4.8, students: '12.4k' },
  { title: 'AWS Cloud Practitioner', category: 'Cloud', thumb: '☁️', rating: 4.9, students: '8.2k' },
  { title: 'Docker & Kubernetes', category: 'DevOps', thumb: '🐳', rating: 4.7, students: '5.1k' },
];

const LearnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-xl font-black text-blue-600">Bugle.in</button>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5 cursor-default">Dashboard</span>
              <Link to="/categories" className="text-gray-500 hover:text-blue-600 transition-colors">Browse Courses</Link>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">My Learning</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Certificates</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-blue-600">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">3</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">A</div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-800 leading-none">Arjun Sharma</p>
                <p className="text-xs text-gray-400">Learner</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <span className="material-symbols-outlined text-base">waving_hand</span>
              Welcome to Bugle.in!
            </div>
            <h1 className="text-2xl font-extrabold mb-1">Good morning, Arjun! 👋</h1>
            <p className="text-white/80 text-sm mb-5">You're on a 7-day streak. Keep up the momentum!</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate('/categories')} className="bg-white text-blue-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-md transition-all active:scale-[0.98]">
                Browse Courses
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/20">
                Continue Learning
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
          {/* Left: Courses in Progress */}
          <div className="col-span-12 lg:col-span-8 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Continue Learning</h2>
              <Link to="/categories" className="text-sm text-blue-600 font-semibold hover:underline">View all →</Link>
            </div>

            {COURSES.map((course) => (
              <div key={course.title} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex gap-4">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-3xl shrink-0 border border-gray-100">
                  {course.thumb}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{course.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full shrink-0">{course.level}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {course.category} · {course.instructor}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 shrink-0">{course.progress}%</span>
                  </div>
                </div>
                <button className="self-center p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                </button>
              </div>
            ))}
          </div>

          {/* Right: Recommended + Activity */}
          <div className="col-span-12 lg:col-span-4 space-y-5">
            {/* Recommended */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-4">Recommended for You</h3>
              <div className="space-y-4">
                {RECOMMENDED.map((course) => (
                  <div key={course.title} className="flex gap-3 cursor-pointer group">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl shrink-0 border border-gray-100">
                      {course.thumb}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">{course.title}</p>
                      <p className="text-xs text-gray-400">{course.category}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-amber-500">★ {course.rating}</span>
                        <span className="text-xs text-gray-400">{course.students} students</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/categories')} className="w-full mt-5 border border-blue-200 text-blue-600 text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                Explore All Courses →
              </button>
            </div>

            {/* Achievement card */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <p className="font-bold text-sm">Achievement Unlocked!</p>
                  <p className="text-white/80 text-xs">React Fundamentals Certificate</p>
                </div>
              </div>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white text-sm font-semibold py-2 rounded-xl transition-all border border-white/20">
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
