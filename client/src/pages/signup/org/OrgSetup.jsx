import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSidebar from '../../../components/signup/OnboardingSidebar';

const ORG_STEPS = [
  { key: 'company', label: 'Company Info', sublabel: 'Name, Industry, Size' },
  { key: 'admin', label: 'Admin Info', sublabel: 'Name, Email, Password' },
  { key: 'setup', label: 'Setup Preferences', sublabel: 'Goals & Departments' },
  { key: 'done', label: 'All Set!', sublabel: 'Access admin dashboard' },
];

const TRAINING_GOALS = [
  { key: 'compliance', icon: 'gavel', label: 'Compliance Training', sub: 'Mandatory regulatory programs' },
  { key: 'onboarding', icon: 'waving_hand', label: 'Employee Onboarding', sub: 'New hire orientation' },
  { key: 'leadership', icon: 'leaderboard', label: 'Leadership Development', sub: 'Manager & exec training' },
  { key: 'technical', icon: 'code', label: 'Technical Upskilling', sub: 'Dev, data, cloud skills' },
  { key: 'soft', icon: 'psychology', label: 'Soft Skills', sub: 'Communication, teamwork' },
  { key: 'sales', icon: 'bar_chart', label: 'Sales Enablement', sub: 'Product & customer training' },
];

const DEPARTMENTS = [
  'Engineering', 'Product', 'Design', 'Sales', 'Marketing',
  'HR & People', 'Finance', 'Operations', 'Customer Success', 'Legal',
];

const ROLES = [
  { key: 'admin', label: 'Admin', desc: 'Full platform access', icon: 'admin_panel_settings' },
  { key: 'hr', label: 'HR Manager', desc: 'Manage employees & reports', icon: 'supervisor_account' },
  { key: 'manager', label: 'Team Manager', desc: 'View team progress', icon: 'manage_accounts' },
  { key: 'employee', label: 'Employee', desc: 'Complete assigned courses', icon: 'person' },
];

const OrgSetup = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState(['onboarding', 'technical']);
  const [selectedDepts, setSelectedDepts] = useState(['Engineering', 'HR & People']);
  const [selectedRoles, setSelectedRoles] = useState(['admin', 'hr', 'employee']);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (list, setList, key) => {
    setList((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Replace with actual API call to create organization and admin account
    await new Promise((r) => setTimeout(r, 1200));
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OnboardingSidebar steps={ORG_STEPS} currentStep={3} flowType="org" />

      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/signup/org/admin')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back
            </button>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm text-gray-400">Training Preferences</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">Step 3 of 4</span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-3/4 rounded-full" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-8 py-10 max-w-5xl mx-auto w-full">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-blue-100">
              <span className="material-symbols-outlined text-base">settings</span>
              Organization Signup — Step 3
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Configure your training setup</h1>
            <p className="text-gray-500 text-sm">Customize Bugle.in for your organization's unique needs.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Training Goals */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Training Goals</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Select all that apply to your organization</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-medium">
                  {selectedGoals.length} selected
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {TRAINING_GOALS.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.key);
                  return (
                    <button
                      key={goal.key}
                      type="button"
                      onClick={() => toggle(selectedGoals, setSelectedGoals, goal.key)}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        <span className={`material-symbols-outlined text-xl ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                          {goal.icon}
                        </span>
                      </div>
                      <p className={`text-sm font-semibold ${isSelected ? 'text-blue-700' : 'text-gray-800'}`}>{goal.label}</p>
                      <p className="text-xs text-gray-400">{goal.sub}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Departments</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Select departments in your organization</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-medium">
                  {selectedDepts.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {DEPARTMENTS.map((dept) => {
                  const isSelected = selectedDepts.includes(dept);
                  return (
                    <button
                      key={dept}
                      type="button"
                      onClick={() => toggle(selectedDepts, setSelectedDepts, dept)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300'
                      }`}
                    >
                      {dept}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Roles */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-5">
                <h2 className="text-lg font-bold text-gray-900">User Roles to Enable</h2>
                <p className="text-xs text-gray-400 mt-0.5">Configure which roles will be active in your organization</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {ROLES.map((role) => {
                  const isSelected = selectedRoles.includes(role.key);
                  const isRequired = role.key === 'admin';
                  return (
                    <button
                      key={role.key}
                      type="button"
                      disabled={isRequired}
                      onClick={() => !isRequired && toggle(selectedRoles, setSelectedRoles, role.key)}
                      className={`text-center py-5 px-3 rounded-xl border-2 transition-all ${
                        isRequired
                          ? 'border-blue-300 bg-blue-50 cursor-default'
                          : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl mb-2 block ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} style={isSelected ? { fontVariationSettings: "'FILL' 1" } : {}}>
                        {role.icon}
                      </span>
                      <p className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>{role.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{role.desc}</p>
                      {isRequired && (
                        <span className="inline-block mt-2 text-[9px] font-bold bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">REQUIRED</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2 pb-8">
              <button
                type="button"
                onClick={() => navigate('/signup/org/admin')}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span>
                    Setting up…
                  </>
                ) : (
                  <>
                    Launch Admin Dashboard
                    <span className="material-symbols-outlined text-xl">rocket_launch</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default OrgSetup;
