import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const navigate = useNavigate();

  return (
    <div className="font-body-md text-on-surface bg-[#f8f9fa] min-h-screen">
      {/* Shell Layout */}
      <div className="flex min-h-screen">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-0 h-full w-[280px] bg-gray-50 border-r border-gray-200 flex flex-col py-6 gap-2">
          <div className="px-8 mb-8">
            <span className="text-lg font-black text-blue-600">Bugle.in</span>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">person</span>
              </div>
              <div>
                <p className="font-h3 text-label-sm">Onboarding</p>
                <p className="text-on-surface-variant text-label-sm">Complete your setup</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1">
            <div onClick={() => navigate('/role-selection')} className="text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform duration-200 active:scale-[0.98] flex items-center gap-3">
              <span className="material-symbols-outlined">person_search</span>
              <span className="font-['Inter'] text-sm leading-relaxed">Role Selection</span>
            </div>
            
            <div className="bg-blue-50 text-blue-700 font-semibold rounded-lg mx-2 px-4 py-3 border-l-4 border-blue-600 cursor-pointer transition-transform duration-200 active:scale-[0.98] flex items-center gap-3">
              <span className="material-symbols-outlined">badge</span>
              <span className="font-['Inter'] text-sm leading-relaxed">Profile Setup</span>
            </div>
            
            <div className="text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform duration-200 active:scale-[0.98] flex items-center gap-3">
              <span className="material-symbols-outlined">auto_stories</span>
              <span className="font-['Inter'] text-sm leading-relaxed">Training Path</span>
            </div>
            
            <div className="text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform duration-200 active:scale-[0.98] flex items-center gap-3">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="font-['Inter'] text-sm leading-relaxed">Verification</span>
            </div>
          </nav>

          <div className="mt-auto px-2">
            <div className="text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform duration-200 active:scale-[0.98] flex items-center gap-3">
              <span className="material-symbols-outlined">policy</span>
              <span className="font-['Inter'] text-sm leading-relaxed">Privacy Policy</span>
            </div>
            <div className="px-4 py-4">
              <button className="w-full py-3 bg-white border border-outline rounded-lg font-medium text-sm hover:bg-gray-50 transition-all">Get Help</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-[280px] p-container-padding flex flex-col">
          <header className="flex justify-between items-center h-16 w-full mb-section-gap">
            <h1 className="font-h1 text-h1 text-on-surface">Employee Registration</h1>
            <div className="flex items-center gap-4">
              <span className="text-label-sm text-on-surface-variant">Step 1 of 3</span>
              <div className="w-48 h-2 bg-secondary-container rounded-full overflow-hidden">
                <div className="bg-primary h-full w-1/3"></div>
              </div>
            </div>
          </header>

          <div className="max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-gutter">
            {/* Left Column: Form Sections */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-stack-lg">
              
              {/* Section 1: Employee Details */}
              <section className="bg-white p-container-padding rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] border border-outline-variant">
                <div className="flex items-center gap-stack-md mb-stack-lg">
                  <div className="p-2 bg-primary-fixed rounded-lg">
                    <span className="material-symbols-outlined text-primary" data-icon="badge">badge</span>
                  </div>
                  <h2 className="font-h2 text-h2 text-on-surface">Step 1: Employee Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                  <div className="flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="Enter your full name" type="text" defaultValue="Jeel Mungra" />
                  </div>
                  <div className="flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Work Email</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="name@company.com" type="email" defaultValue="jeel.mungra@organization.com" />
                  </div>
                  <div className="flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Employee ID</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="EMP-XXXX" type="text" />
                  </div>
                  <div className="flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Department</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md appearance-none bg-white">
                      <option>Engineering</option>
                      <option>Product Management</option>
                      <option>Design</option>
                      <option>Operations</option>
                      <option>Human Resources</option>
                    </select>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Account Password</label>
                    <div className="relative">
                      <input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" type="password" defaultValue="••••••••••••" />
                      <span className="material-symbols-outlined absolute right-4 top-3 text-on-surface-variant cursor-pointer">visibility</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Organization Link */}
              <section className="bg-white p-container-padding rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] border border-outline-variant">
                <div className="flex items-center gap-stack-md mb-stack-lg">
                  <div className="p-2 bg-secondary-container rounded-lg">
                    <span className="material-symbols-outlined text-secondary" data-icon="corporate_fare">corporate_fare</span>
                  </div>
                  <h2 className="font-h2 text-h2 text-on-surface">Step 2: Organization Link</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                  <div className="col-span-1 md:col-span-2 flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Company Name</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="Enter registered company name" type="text" />
                  </div>
                  <div className="flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Manager</label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low">
                      <div className="w-6 h-6 rounded-full bg-tertiary text-white flex items-center justify-center text-[10px]">KP</div>
                      <span className="text-body-md font-medium">Mrs. Kunjal Patel</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-unit">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Org Code</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="ORG-9988-BT" type="text" />
                  </div>
                </div>
              </section>

              {/* Section 3: Success Message */}
              <div className="p-stack-lg bg-primary-fixed/30 border border-dashed border-primary rounded-xl flex items-start gap-stack-md">
                <span className="material-symbols-outlined text-primary" data-weight="fill">info</span>
                <div>
                  <p className="text-body-md font-semibold text-on-primary-fixed-variant">Step 3: Confirmation</p>
                  <p className="text-body-md text-on-surface-variant">
                    Upon completion, you will receive: <span className="font-medium text-on-surface">"You are successfully registered as an employee"</span> with your centralized learning portal access credentials.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-stack-md mt-stack-lg">
                <button className="px-8 py-3 rounded-lg border border-outline text-on-surface font-medium hover:bg-surface-container transition-all active:scale-95">Save Progress</button>
                <button onClick={() => navigate('/login')} className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-sm hover:brightness-110 transition-all active:scale-95">Register Employee</button>
              </div>
            </div>

            {/* Right Column: Info & Visual Context */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-stack-lg">
              {/* KPI Card */}
              <div className="bg-white p-stack-lg rounded-xl shadow-[0px_12px_12px_0px_rgba(0,0,0,0.04)] border border-outline-variant">
                <div className="flex justify-between items-start mb-stack-md">
                  <div className="p-3 bg-tertiary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-tertiary" data-icon="rocket_launch">rocket_launch</span>
                  </div>
                  <div className="bg-primary-fixed/20 text-primary text-[10px] px-2 py-1 rounded-full font-bold">LIVE SETUP</div>
                </div>
                <h3 className="font-h3 text-h3 mb-2">Enterprise Access</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">By linking your organization, you unlock professional courses, skill tracking, and peer collaboration tools.</p>
              </div>

              {/* Image Asset */}
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
                <img alt="Modern minimalist office workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC25v51SSge-CrvkjW1HkwttUBziG1w-kw50JHPQZAD6k0yg6iAZcPTBFRlHJOtS1yOuCFiQsLe-aErZnl3cbqDlUnz67_Ns2oeEQF9YzJEzI9XN2o2n6GR2mYgU0S1j4_B3_3pXgQfZeGAXo-wFsqObbWd0asWiGRwoc1F67V1VqNkhqyhNvaDPxowUS_rrKGHOLsxjkeUAdv1Os3s9ThaYKbGgIjfvBTjCbmbY5cIzofd6GOF6c8Qsi5vw6OajrUV1rkEteLeyf9S" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-stack-lg">
                  <p className="text-white font-h3 text-h3">Global Network</p>
                  <p className="text-white/80 text-body-md">Connect with 12k+ industry professionals.</p>
                </div>
              </div>

              {/* Help Widget */}
              <div className="bg-surface-container-high p-stack-lg rounded-xl border border-outline-variant">
                <p className="font-label-sm text-label-sm mb-stack-sm text-on-surface-variant uppercase tracking-wider">Need Assistance?</p>
                <p className="text-body-md mb-stack-md">Our onboarding specialists are available 24/7 to help you link your organization.</p>
                <div className="flex -space-x-2">
                  <img alt="Specialist 1" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUFieXrTQKHLblpaCU8xanzToEGwHPVuHwyuXsEfQot2ppXBcXoKH5-TpTghhjLiPHVyUxI27bzv68oow5fz1aARzsWyyL0Pd9cIJf6lgXhXtLiPYGf68zYHPafCEW0re0DXSgxoJVm8Mq-AB1aeMiuyb4GmZB5zKodmLRg3yUHoc3jaVQtGeF9ZOh8LooqkjwYe02l4VKP2JfoPsjQTQjF2rDTTyy8CRlqbGpDHacbT4FDcLrwSxPsfhAGlppRo7ER_OB9xiVnKuF" />
                  <img alt="Specialist 2" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgugkjF1n50f1Tbisjc-oPMlQmqzXagrvyU6p3xTmlTp7Ss9jfv3Xbx8fzdmDi7_bCsXzzd9jJZozZqOra1sqaFFoBKtVJRKV3W8tKWLRhhJPJhqahoPo-y6AZrIFsX0qRnh8B87qikn3PvDSbD10GrtP-nHzRm9gpVP-FGsWGMT-AnQqKDZ2d5a9sjkL_7VH6VNlxPLY23jclpQjz4LgFKoARejTxebNw9hqxLcdngOuVyd8BhTq0oryGPOi57dCipsjtTKi2-GQt" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">+3</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full py-8 mt-section-gap border-t border-gray-100 flex justify-between items-center font-['Inter'] text-xs text-gray-500">
            <div>© 2024 Bugle.in Enterprise Learning</div>
            <div className="flex gap-stack-lg">
              <Link className="text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Terms of Service</Link>
              <Link className="text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Privacy Policy</Link>
              <Link className="text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Help Center</Link>
              <Link className="text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Security</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default EmployeeForm;
