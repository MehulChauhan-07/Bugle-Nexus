import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSidebar from '../../../components/signup/OnboardingSidebar';

const ORG_STEPS = [
  { key: 'company', label: 'Company Info', sublabel: 'Name, Industry, Size' },
  { key: 'admin', label: 'Admin Info', sublabel: 'Name, Email, Password' },
  { key: 'setup', label: 'Setup Preferences', sublabel: 'Goals & Departments' },
  { key: 'done', label: 'All Set!', sublabel: 'Access admin dashboard' },
];

const OrgAdmin = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    adminName: '',
    jobTitle: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup/org/setup');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OnboardingSidebar steps={ORG_STEPS} currentStep={2} flowType="org" />

      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/signup/org/company')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back
            </button>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm text-gray-400">Admin Account Setup</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">Step 2 of 4</span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-2/4 rounded-full" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-8 py-10 max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-blue-100">
              <span className="material-symbols-outlined text-base">manage_accounts</span>
              Organization Signup — Step 2
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Create your admin account</h1>
            <p className="text-gray-500 text-sm">This will be the primary administrator account for your organization.</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Form */}
            <div className="col-span-12 lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-5">
                {/* Name & Title */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="adminName">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">person</span>
                      <input
                        id="adminName"
                        name="adminName"
                        type="text"
                        required
                        placeholder="Ravi Kamdar"
                        value={form.adminName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="jobTitle">
                      Job Title <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">badge</span>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        placeholder="e.g. HR Manager"
                        value={form.jobTitle}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">mail</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ravi@techcorp.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Use your company email for correct organization mapping.</p>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                    Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">phone</span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="password">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">lock</span>
                    <input
                      id="password"
                      name="password"
                      type={showPass ? 'text' : 'password'}
                      required
                      placeholder="Minimum 8 characters"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <span className="material-symbols-outlined text-xl">{showPass ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="confirmPassword">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">lock_reset</span>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirm ? 'text' : 'password'}
                      required
                      placeholder="Repeat your password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <span className="material-symbols-outlined text-xl">{showConfirm ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => navigate('/signup/org/company')}
                    className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md active:scale-[0.98]"
                  >
                    Continue to Preferences
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Info */}
            <div className="col-span-12 lg:col-span-5 space-y-4">
              {/* Admin role card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-blue-600 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Admin Privileges</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  As the organization admin, you'll have full control over the LMS configuration for your company.
                </p>
                <ul className="space-y-2">
                  {[
                    'Invite & manage employees',
                    'Assign courses & training paths',
                    'View team-wide analytics',
                    'Manage roles & permissions',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="material-symbols-outlined text-blue-500 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security note */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-green-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <p className="text-sm font-bold text-green-800">Enterprise-Grade Security</p>
                </div>
                <p className="text-xs text-green-700 leading-relaxed">
                  Your credentials are encrypted with 256-bit SSL. We never share your data with third parties.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrgAdmin;
