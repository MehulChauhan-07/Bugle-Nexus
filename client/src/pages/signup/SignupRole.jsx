import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const roleCards = [
  {
    key: 'learner',
    icon: 'school',
    iconFill: true,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    badgeBg: 'bg-amber-100 text-amber-700',
    badge: 'INDIVIDUAL',
    borderActive: 'border-amber-400',
    title: 'Learner',
    subtitle: 'Individual',
    description:
      'Ideal for independent professionals. Explore a vast marketplace of premium courses, build a unique skillset at your own pace, and earn globally recognized certifications.',
    features: [
      'Self-paced course catalogue',
      'Personal skill-building path',
      'Certificates & achievements',
      'Community learning network',
    ],
    featureColor: 'text-amber-600',
    btnClass: 'bg-amber-500 hover:bg-amber-600 text-white',
    btnText: 'Join as Learner',
    href: '/signup/learner/basic',
  },
  {
    key: 'org',
    icon: 'corporate_fare',
    iconFill: true,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badgeBg: 'bg-blue-100 text-blue-700',
    badge: 'ORGANIZATION',
    borderActive: 'border-blue-500',
    title: 'Organization',
    subtitle: 'HR / Company',
    description:
      'Designed for HR teams and companies. Manage company-wide training programs, assign courses by department and role, and get deep analytics on team progress.',
    features: [
      'Company-wide course assignments',
      'Department & role management',
      'Progress & analytics dashboard',
      'Custom training goals & paths',
    ],
    featureColor: 'text-blue-600',
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    btnText: 'Set Up Organization',
    href: '/signup/org/company',
  },
];

const SignupRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="text-xl font-black text-blue-600 hover:opacity-80 transition-opacity">
            Bugle.in
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Explore</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Help</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/auth" className="text-sm text-gray-600 font-medium hover:text-blue-600 transition-colors">
              Back
            </Link>
            <Link
              to="/login"
              className="text-sm bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Step indicator */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-blue-100">
            <span className="material-symbols-outlined text-base">person_search</span>
            Step 1 of 1 — Role Selection
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            How will you use Bugle.in?
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Your selection determines your entire experience — choose the path that best describes you.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {roleCards.map((card) => (
            <button
              key={card.key}
              onClick={() => navigate(card.href)}
              className={`text-left bg-white rounded-2xl border-2 border-gray-100 hover:${card.borderActive} hover:shadow-lg transition-all duration-300 p-8 flex flex-col group active:scale-[0.99]`}
            >
              {/* Badge */}
              <div className={`self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 ${card.badgeBg}`}>
                {card.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <span
                  className={`material-symbols-outlined text-3xl ${card.iconColor}`}
                  style={card.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {card.icon}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{card.title}</h2>
              <p className="text-sm text-gray-400 font-medium mb-4">{card.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {card.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className={`material-symbols-outlined text-base ${card.featureColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 ${card.btnClass} transition-all`}>
                {card.btnText}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </button>
          ))}
        </div>

        {/* Info banner */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4">
          <span className="material-symbols-outlined text-blue-500 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
            info
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">Role-Based Access Control</p>
            <p className="text-sm text-gray-500">
              Your role determines the features and content you see. If you're joining as part of a company, please use your corporate email so we can map you to the right organization.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© 2024 Bugle.in Enterprise Learning</span>
          <div className="flex gap-6">
            {['Terms of Service', 'Privacy Policy', 'Help Center'].map((link) => (
              <a key={link} href="#" className="hover:text-blue-600 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignupRole;
