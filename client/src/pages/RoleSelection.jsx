import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
      {/* TopAppBar */}
      <nav className="bg-white dark:bg-gray-900 flex justify-between items-center h-16 px-8 w-full sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-500">Bugle.in</div>
        <div className="hidden md:flex items-center gap-8 font-['Inter'] antialiased text-sm font-medium">
          <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" to="#">Explore</Link>
          <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" to="#">Pricing</Link>
          <Link className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" to="#">Help</Link>
        </div>
        <div className="flex gap-4">
          <button className="font-['Inter'] antialiased text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 duration-150 px-4 py-2 rounded-lg">Contact Sales</button>
          <Link to="/login">
            <button className="font-['Inter'] antialiased text-sm font-medium bg-primary text-white hover:bg-primary-container transition-all active:scale-95 duration-150 px-6 py-2 rounded-lg">Sign In</button>
          </Link>
        </div>
      </nav>

      <div className="flex min-h-screen">
        {/* SideNavBar (Onboarding) */}
        <aside className="bg-gray-50 dark:bg-gray-950 fixed left-0 top-16 h-[calc(100vh-64px)] w-[280px] border-r border-gray-200 dark:border-gray-800 flex flex-col py-6 gap-2 font-['Inter'] text-sm leading-relaxed">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIyIpZWi6_-3uLuoBh4EFHvn3BjdTTmp0gXLXJuTlPVdCLaBq84kOsJLfMYQZgvfKA0--Ym96Bzqcjthe_KzfFR4283eW-X7VCptCyqqcaNcw6p9h2DX6e80tGr22XURIzsWWfIen_JikdF1oqbYR3mV3o3UO-ksKFlGpXRJjfJHdOd5N2zLrjeINDt8SdDQtYDuJCLO4mBhQFf1ecZ8g48IfYuvEnelOHZTdioi7cmmcz_QYO5rMetNcSTMm4MJgcTI5fPSwlwhS" />
              </div>
              <div>
                <h3 className="text-on-surface font-semibold">Onboarding</h3>
                <p className="text-xs text-on-surface-variant">Complete your setup</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold rounded-lg mx-2 px-4 py-3 border-l-4 border-blue-600 flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-outlined" data-icon="person_search">person_search</span>
              <span>Role Selection</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 px-4 py-3 mx-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg flex items-center gap-3 cursor-pointer transition-transform duration-200 active:scale-[0.98]">
              <span className="material-symbols-outlined" data-icon="badge">badge</span>
              <span>Profile Setup</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 px-4 py-3 mx-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg flex items-center gap-3 cursor-pointer transition-transform duration-200 active:scale-[0.98]">
              <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
              <span>Training Path</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 px-4 py-3 mx-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg flex items-center gap-3 cursor-pointer transition-transform duration-200 active:scale-[0.98]">
              <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
              <span>Verification</span>
            </div>
          </nav>
          <div className="mt-auto px-4 space-y-1">
            <button className="w-full text-blue-600 dark:text-blue-400 text-sm font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors mb-4 border border-blue-200 dark:border-blue-800">
              Get Help
            </button>
            <div className="text-gray-500 dark:text-gray-400 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg flex items-center gap-3 cursor-pointer text-xs">
              <span className="material-symbols-outlined text-base" data-icon="policy">policy</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-[280px] p-container-padding max-w-[1600px]">
          <header className="mb-section-gap">
            <h1 className="font-h1 text-h1 text-on-surface mb-2">Get Started with Bugle.in</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Choose how you want to use the platform</p>
          </header>

          {/* Role Selection Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-section-gap">
            {/* Internal: Employee Card */}
            <div className="bg-white group relative overflow-hidden rounded-xl border border-outline-variant shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 p-8 flex flex-col">
              <div className="w-16 h-16 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined !text-3xl" data-icon="corporate_fare" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
              </div>
              <h2 className="font-h2 text-h2 text-on-surface mb-4">Join as Employee</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                Designed for corporate teams. Access company-assigned training modules, track your professional development milestones, and earn internal certifications validated by your organization.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                  <span className="font-body-md">Assigned training pathways</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                  <span className="font-body-md">View and download certificates</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                  <span className="font-body-md">Performance tracking & analytics</span>
                </li>
              </ul>
              <button onClick={() => navigate('/sign-up/employee')} className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-container transition-all active:scale-[0.98]">
                Select Employee Role
              </button>
              <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-mono-label">
                INTERNAL
              </div>
            </div>

            {/* External: Learner Card */}
            <div className="bg-white group relative overflow-hidden rounded-xl border border-outline-variant shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 p-8 flex flex-col">
              <div className="w-16 h-16 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined !text-3xl" data-icon="school" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <h2 className="font-h2 text-h2 text-on-surface mb-4">Join as Learner</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                Ideal for independent professionals. Explore a vast marketplace of premium courses, purchase individual licenses, and build a unique skillset at your own pace with globally recognized materials.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-xl" data-icon="check_circle">check_circle</span>
                  <span className="font-body-md">Purchase individual courses</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-xl" data-icon="check_circle">check_circle</span>
                  <span className="font-body-md">Independent skill-building</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-xl" data-icon="check_circle">check_circle</span>
                  <span className="font-body-md">Global learning community access</span>
                </li>
              </ul>
              <button onClick={() => navigate('/sign-up/learner')} className="w-full bg-white border-2 border-tertiary text-tertiary py-4 rounded-lg font-semibold hover:bg-tertiary-fixed transition-all active:scale-[0.98]">
                Select Learner Role
              </button>
              <div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-mono-label">
                EXTERNAL
              </div>
            </div>
          </div>

          {/* RBAC Info Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex items-start gap-4">
            <span className="material-symbols-outlined text-blue-600 mt-0.5" data-icon="info">info</span>
            <div>
              <h4 className="font-h3 text-sm font-semibold text-blue-900 mb-1">Role-Based Access Control</h4>
              <p className="text-blue-700 text-sm">
                Permissions and visible content are determined by your selected role. If you are part of an organization, please use your corporate email to ensure correct employee mapping.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-12 flex justify-between items-center bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto font-['Inter'] text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span className="font-medium">© 2024 Bugle.in Enterprise Learning</span>
        </div>
        <div className="flex gap-8">
          <Link className="text-gray-400 hover:text-blue-600 transition-colors duration-200" to="#">Terms of Service</Link>
          <Link className="text-gray-400 hover:text-blue-600 transition-colors duration-200" to="#">Privacy Policy</Link>
          <Link className="text-gray-400 hover:text-blue-600 transition-colors duration-200" to="#">Help Center</Link>
          <Link className="text-gray-400 hover:text-blue-600 transition-colors duration-200" to="#">Security</Link>
        </div>
      </footer>
    </div>
  );
};

export default RoleSelection;
