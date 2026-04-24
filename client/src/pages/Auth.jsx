import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Panel: Brand & Features */}
      <section
        className="hidden lg:flex w-1/2 flex-col justify-between p-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1E3A8A 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-indigo-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <span
              className="material-symbols-outlined text-blue-600 text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              campaign
            </span>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Bugle.in</span>
        </div>

        {/* Hero text */}
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Upskill Your Team.<br />Track Their Growth.
          </h1>
          <p className="text-white/70 text-base mb-10 max-w-md leading-relaxed">
            The most comprehensive Learning Management System for modern enterprise teams. Streamline training workflows and drive measurable outcomes.
          </p>

          <div className="space-y-5">
            {[
              { icon: 'send', title: 'Assign courses instantly', desc: 'Automated enrollments based on roles and skill gaps.' },
              { icon: 'query_stats', title: 'Track progress & attendance', desc: 'Real-time dashboards for individual and team engagement.' },
              { icon: 'verified', title: 'Generate certification reports', desc: 'Audit-ready documentation and automated certificate issuance.' },
            ].map((feat) => (
              <div key={feat.icon} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-xl">{feat.icon}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{feat.title}</p>
                  <p className="text-white/60 text-sm">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 flex items-center gap-8">
          {[
            { value: '50k+', label: 'Learners' },
            { value: '1,200+', label: 'Courses' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-white text-2xl font-extrabold">{stat.value}</p>
              <p className="text-white/50 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Panel: Auth Options */}
      <section className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-16">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                campaign
              </span>
            </div>
            <span className="text-xl font-bold text-blue-600">Bugle.in</span>
          </div>

          {/* Welcome text */}
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Get Started</h2>
            <p className="text-gray-500 text-base">
              Choose an option to access your Bugle.in account.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="space-y-4 mb-8">
            <button
              onClick={() => navigate('/signup/role')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-xl">person_add</span>
              Create an Account
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-white border-2 border-gray-200 text-gray-800 py-4 rounded-xl font-semibold text-base hover:border-blue-300 hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-xl">login</span>
              Log in to Dashboard
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* SSO Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-sm font-medium text-gray-700">
              <img
                alt="Google"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD83uutNzLhSx2CNJ3bdg-8mS-nMQ6dWwcY5cRM-bl-EOIv51EUkMMF_pLz5YCyTZGipsD9LsIK2oPpry_72dP5QSWiuDidCiQ6Z1ASTds386RjJcbmIUUzGeqRatAtLqpergwnO0TwvpDPCtxYuMRX4kjKFopU7pt8WKNfq0FUK1jDg6ScNl3hSGolbeYkHBBZ7Pi3GorZzoKW7luuwkLqkrTOCaSNmOFMaD47sTb9g4JhylNwD487--8QInwQlMyj0cE_umpCCwN-"
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-sm font-medium text-gray-700">
              <img
                alt="Microsoft"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlmEP2sHiqskoJJdgIwM61gaJGiJWpSbUJcmcpjDsg9Kf1lvIZw8JaqpSDu8hL85Kbs_eMx98_gT6r91myPROYe63h-NDAaQPLwYppNhbYLwWv94-NDe_Ja-B2iLB5KbStZiLbBaC12OWbPVITejY2kvUbZ51gZknWxprjFos9u3mezhlF9BZU3zwScAoGGOuWaRVLvgZ0hZwTJcQ9Z880cf-n9mmcX0ebgt_S0LquOO_PwaPq6hp0y47gwe1XlqTuW4JJcRcM_sYQ"
              />
              Microsoft
            </button>
          </div>

          {/* Info note */}
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-8">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 text-lg mt-0.5">info</span>
              <div className="text-sm text-blue-700">
                <p className="font-semibold mb-1">Two ways to use Bugle.in</p>
                <ul className="space-y-1 text-blue-600/80 text-xs">
                  <li>🎓 <strong>Learner</strong> — Self-paced individual learning</li>
                  <li>🏢 <strong>Organization</strong> — Company-wide training management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">
              Already part of an org?{' '}
              <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
            <div className="flex justify-center gap-5 text-xs text-gray-400">
              <Link to="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
