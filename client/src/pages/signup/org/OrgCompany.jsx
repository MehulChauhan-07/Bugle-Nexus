import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSidebar from '../../../components/signup/OnboardingSidebar';

const ORG_STEPS = [
  { key: 'company', label: 'Company Info', sublabel: 'Name, Industry, Size' },
  { key: 'admin', label: 'Admin Info', sublabel: 'Name, Email, Password' },
  { key: 'setup', label: 'Setup Preferences', sublabel: 'Goals & Departments' },
  { key: 'done', label: 'All Set!', sublabel: 'Access admin dashboard' },
];

const INDUSTRIES = [
  'Technology', 'Healthcare', 'Finance & Banking', 'Manufacturing',
  'Retail & E-commerce', 'Education', 'Government', 'Media & Entertainment', 'Other',
];

const TEAM_SIZES = [
  { key: '1-10', label: '1–10', sub: 'Startup' },
  { key: '11-50', label: '11–50', sub: 'Small' },
  { key: '51-200', label: '51–200', sub: 'Mid-size' },
  { key: '201-500', label: '201–500', sub: 'Large' },
  { key: '500+', label: '500+', sub: 'Enterprise' },
];

const OrgCompany = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    companyName: '',
    industry: '',
    teamSize: '',
    website: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup/org/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OnboardingSidebar steps={ORG_STEPS} currentStep={1} flowType="org" />

      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/signup/role')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back
            </button>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm text-gray-400">Organization Setup</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">Step 1 of 4</span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-1/4 rounded-full" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-8 py-10 max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-blue-100">
              <span className="material-symbols-outlined text-base">corporate_fare</span>
              Organization Signup — Step 1
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Tell us about your company</h1>
            <p className="text-gray-500 text-sm">This helps us configure the right training structure for your team.</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Form */}
            <div className="col-span-12 lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="companyName">
                    Company / Organization Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">business</span>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder="e.g. TechCorp India Pvt. Ltd."
                      value={form.companyName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="website">
                    Company Website <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">language</span>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                      value={form.website}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="industry">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">category</span>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm appearance-none"
                    >
                      <option value="" disabled>Select your industry</option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl pointer-events-none">expand_more</span>
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Team Size <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {TEAM_SIZES.map((size) => (
                      <button
                        key={size.key}
                        type="button"
                        onClick={() => setForm({ ...form, teamSize: size.key })}
                        className={`py-3 rounded-xl border-2 text-center transition-all ${
                          form.teamSize === size.key
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-100 hover:border-gray-200 bg-white'
                        }`}
                      >
                        <p className={`text-sm font-bold ${form.teamSize === size.key ? 'text-blue-700' : 'text-gray-700'}`}>{size.label}</p>
                        <p className="text-xs text-gray-400">{size.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md mt-2 active:scale-[0.98]"
                >
                  Continue to Admin Info
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </form>
            </div>

            {/* Right: Info panel */}
            <div className="col-span-12 lg:col-span-5 space-y-4">
              {/* Steps overview */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-500 text-xl">checklist</span>
                  Setup Steps
                </h3>
                <ol className="space-y-3">
                  {[
                    { step: 1, label: 'Company Info', sub: 'Name, industry, size', active: true },
                    { step: 2, label: 'Admin Info', sub: 'Admin credentials' },
                    { step: 3, label: 'Setup Preferences', sub: 'Goals & departments' },
                    { step: 4, label: 'Go Live', sub: 'Admin dashboard ready' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${item.active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {item.step}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${item.active ? 'text-gray-900' : 'text-gray-400'}`}>{item.label}</p>
                        <p className="text-xs text-gray-400">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Why Bugle card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400 text-xl">workspace_premium</span>
                  Why Organizations Choose Bugle.in
                </h4>
                <ul className="space-y-2">
                  {[
                    'Assign courses by department & role',
                    'Real-time progress analytics',
                    'Custom training paths',
                    'Automated certification tracking',
                  ].map((item) => (
                    <li key={item} className="text-xs text-gray-300 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrgCompany;
