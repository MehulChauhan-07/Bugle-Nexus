import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LearnerForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[280px] bg-gray-50 border-r border-gray-200 flex flex-col py-6 gap-2 z-40">
        <div className="px-8 mb-8">
          <h1 className="text-lg font-black text-blue-600">Bugle.in</h1>
          <p className="text-xs text-on-surface-variant mt-1">Enterprise Learning</p>
        </div>
        
        <div className="px-4 mb-4">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
              <img alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaRqhazTjVjOSWTam2Hmzq0Ku7jzyrqk5HFpO8QGuLdH4SLcWUU0f-bZCdST92TCZVqZlZiYPTMsuqbonNtdTA4juYIpSd05quAhCUMTEZl1MIkuOu4JQcmhWkw4s2qxcO3bRZ7za6gwVA9jF-jlf4xSwMuSkBkb9YE4UfTSDcqAiRvoUM8zWrbYtLaSlqRYMREX_SeZ504cjdudaVI_DmyMueAo_48Bu2AxV275zMrkJBNfnPAZ8V9vML380OmwyW4syB01SNF4Em" />
            </div>
            <div>
              <p className="font-label-sm text-sm text-on-surface font-semibold">Onboarding</p>
              <p className="text-xs text-on-surface-variant">Complete your setup</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <div onClick={() => navigate('/role-selection')} className="flex items-center gap-3 text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform active:scale-[0.98]">
            <span className="material-symbols-outlined" data-icon="person_search">person_search</span>
            <span className="font-label-sm">Role Selection</span>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 text-blue-700 font-semibold rounded-lg mx-2 px-4 py-3 border-l-4 border-blue-600 cursor-pointer">
            <span className="material-symbols-outlined" data-icon="badge">badge</span>
            <span className="font-label-sm">Profile Setup</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform active:scale-[0.98]">
            <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
            <span className="font-label-sm">Training Path</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 px-4 py-3 mx-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-transform active:scale-[0.98]">
            <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
            <span className="font-label-sm">Verification</span>
          </div>
        </nav>

        <div className="mt-auto px-4 space-y-2">
          <button className="w-full bg-white border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-on-surface hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm" data-icon="help">help</span>
            Get Help
          </button>
          <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-base" data-icon="policy">policy</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-[280px] min-h-screen flex flex-col">
        {/* TopAppBar Component */}
        <header className="flex justify-between items-center h-16 px-8 w-full sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold tracking-tight text-blue-600">Bugle.in</span>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-blue-600 font-bold border-b-2 border-blue-600 font-label-sm" to="/categories">Explore</Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors font-label-sm" to="#">Pricing</Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors font-label-sm" to="#">Help</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-all active:scale-95 duration-150">Contact Sales</button>
            <button onClick={() => navigate('/login')} className="bg-primary text-on-primary px-5 py-2 rounded-lg text-sm font-medium hover:brightness-90 transition-all active:scale-95 duration-150">Sign In</button>
          </div>
        </header>

        {/* Registration Flow Content */}
        <div className="flex-1 p-12 max-w-[1200px] mx-auto w-full">
          {/* Step Header */}
          <div className="mb-12">
            <h2 className="text-h1 font-h1 text-on-surface">Join the Bugle.in Community</h2>
            <p className="text-body-lg text-on-surface-variant mt-2 max-w-2xl">Start your learning journey with a personalized curriculum tailored to your career goals.</p>
          </div>

          {/* Multi-step Content */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Forms/Selection */}
            <div className="col-span-12 lg:col-span-8 space-y-section-gap">
              
              {/* Section 1: Basic Details */}
              <section className="bg-white p-stack-lg rounded-xl card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-h2 font-h2">Basic Details</h3>
                </div>
                <div className="grid grid-cols-2 gap-stack-md">
                  <div className="space-y-unit">
                    <label className="text-label-sm font-label-sm text-on-surface-variant block ml-1">Full Name</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-unit">
                    <label className="text-label-sm font-label-sm text-on-surface-variant block ml-1">Work Email</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@enterprise.com" type="email" />
                  </div>
                </div>
              </section>

              {/* Section 2: Interest Selection */}
              <section className="bg-white p-stack-lg rounded-xl card-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-h2 font-h2">Interest Selection</h3>
                </div>
                <p className="text-body-md text-on-surface-variant mb-6 ml-11">Choose up to 3 topics you'd like to master.</p>
                
                <div className="grid grid-cols-3 gap-stack-md">
                  <div className="relative group cursor-pointer border-2 border-primary bg-primary/5 p-6 rounded-xl transition-all">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary-container flex items-center justify-center text-white">
                      <span className="material-symbols-outlined" data-icon="code">code</span>
                    </div>
                    <h4 className="font-h3 text-base font-semibold mb-1">Web Dev</h4>
                    <p className="text-xs text-on-surface-variant">React, Node, Cloud Native</p>
                    <div className="absolute top-4 right-4">
                      <span className="material-symbols-outlined text-primary" data-icon="check_circle" data-weight="fill">check_circle</span>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer border border-gray-100 hover:border-primary/30 p-6 rounded-xl transition-all hover:bg-gray-50">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                    </div>
                    <h4 className="font-h3 text-base font-semibold mb-1">Data Science</h4>
                    <p className="text-xs text-on-surface-variant">ML, Python, Big Data</p>
                  </div>
                  
                  <div className="group cursor-pointer border border-gray-100 hover:border-primary/30 p-6 rounded-xl transition-all hover:bg-gray-50">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-tertiary-container flex items-center justify-center text-white">
                      <span className="material-symbols-outlined" data-icon="draw">draw</span>
                    </div>
                    <h4 className="font-h3 text-base font-semibold mb-1">UI/UX Design</h4>
                    <p className="text-xs text-on-surface-variant">Figma, Motion, Systems</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Learning Plan */}
              <section className="bg-white p-stack-lg rounded-xl card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-h2 font-h2">Learning Plan</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Free Plan */}
                  <div className="border border-gray-200 p-6 rounded-xl flex flex-col hover:shadow-md transition-shadow">
                    <span className="text-xs font-mono-label text-on-surface-variant uppercase tracking-widest mb-2">Free</span>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold">$0</span>
                      <span className="text-xs text-on-surface-variant">/mo</span>
                    </div>
                    <ul className="text-xs space-y-3 mb-8 flex-1">
                      <li className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> Community Forums
                      </li>
                      <li className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> Basic Courses
                      </li>
                    </ul>
                    <button className="w-full border border-primary text-primary py-2 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors">Select Plan</button>
                  </div>
                  
                  {/* Premium Plan (Featured) */}
                  <div className="border-2 border-primary p-6 rounded-xl flex flex-col shadow-lg relative bg-primary/5">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Most Popular</div>
                    <span className="text-xs font-mono-label text-primary uppercase tracking-widest mb-2">Premium</span>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold">$29</span>
                      <span className="text-xs text-on-surface-variant">/mo</span>
                    </div>
                    <ul className="text-xs space-y-3 mb-8 flex-1">
                      <li className="flex items-center gap-2 text-on-surface font-medium">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> All Core Courses
                      </li>
                      <li className="flex items-center gap-2 text-on-surface font-medium">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> Certifications
                      </li>
                      <li className="flex items-center gap-2 text-on-surface font-medium">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> Cloud Lab Access
                      </li>
                    </ul>
                    <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all">Selected</button>
                  </div>
                  
                  {/* Pro Membership */}
                  <div className="border border-gray-200 p-6 rounded-xl flex flex-col hover:shadow-md transition-shadow">
                    <span className="text-xs font-mono-label text-on-surface-variant uppercase tracking-widest mb-2">Pro</span>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold">$99</span>
                      <span className="text-xs text-on-surface-variant">/mo</span>
                    </div>
                    <ul className="text-xs space-y-3 mb-8 flex-1">
                      <li className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> 1-on-1 Mentoring
                      </li>
                      <li className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-green-500 text-sm" data-icon="check">check</span> Team Analytics
                      </li>
                    </ul>
                    <button className="w-full border border-primary text-primary py-2 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors">Select Plan</button>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Summary & Payment */}
            <div className="col-span-12 lg:col-span-4 space-y-stack-lg">
              {/* Summary */}
              <div className="bg-white p-6 rounded-xl kpi-shadow">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-h3 text-base">Order Summary</h4>
                  <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">LIVE UPDATE</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Premium Plan</span>
                    <span className="font-semibold">$29.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Tax (5%)</span>
                    <span className="font-semibold">$1.45</span>
                  </div>
                  <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold">Total Due Today</span>
                    <span className="text-primary font-bold text-lg">$30.45</span>
                  </div>
                </div>
              </div>

              {/* Payment Card */}
              <form onSubmit={handleRegistration} className="bg-white p-6 rounded-xl card-shadow border border-gray-100">
                <h4 className="font-h3 text-base mb-6">Step 4: Secure Payment</h4>
                <div className="space-y-stack-md">
                  <div className="space-y-unit">
                    <label className="text-label-sm font-label-sm text-on-surface-variant block">Card Number</label>
                    <div className="relative">
                      <input className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500" disabled type="text" value="•••• •••• •••• 4242" />
                      <div className="absolute right-3 top-3">
                        <span className="material-symbols-outlined text-gray-400" data-icon="credit_card">credit_card</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-unit">
                      <label className="text-label-sm font-label-sm text-on-surface-variant block">Expiry</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-primary focus:border-primary outline-none text-sm" placeholder="MM/YY" type="text" />
                    </div>
                    <div className="space-y-unit">
                      <label className="text-label-sm font-label-sm text-on-surface-variant block">CVC</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-primary focus:border-primary outline-none text-sm" placeholder="123" type="text" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-lg text-base font-bold shadow-lg hover:shadow-xl hover:brightness-95 transition-all mt-4 flex items-center justify-center gap-2 active:scale-95">
                    Complete Registration
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                  <p className="text-[10px] text-center text-on-surface-variant px-4">
                    By clicking, you agree to our Terms of Service. Secure 256-bit SSL encrypted payment.
                  </p>
                </div>
              </form>

              {/* Trust Factor Card */}
              <div className="bg-gray-900 text-white p-6 rounded-xl overflow-hidden relative">
                <div className="relative z-10">
                  <h5 className="font-bold text-sm mb-2">Trusted by Global Teams</h5>
                  <p className="text-[11px] text-gray-400 mb-4 leading-relaxed">Join 50,000+ developers from Amazon, Google, and Meta who use Bugle.in to level up.</p>
                  <div className="flex -space-x-2">
                    <img alt="trust-user" className="w-8 h-8 rounded-full border-2 border-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6o4WYTSArrmnFcHEhTPTpadFFDyY1g27KZnvo_P0HLs6f6y9Ecqit_E-cpheEHURuQibSZN_MidQnb0PLlyBSLbjkntJxBJ7lColpm053tYz4gkhkFSgG1wLsRvnd3XevbTLkYXYo4z5w1mtdM_hAjd93Rk3-pzlnHM6hORb4zHOOgpGzb3aa7v-uONGnVyIxwJ1V7PdG1kKFa6EBn35Hwm9iBdEnLn7AFgEdqktbQC4ZVJ2eL5ocJ-QG4vBhd5dmJPWjPFp2Z4hX" />
                    <img alt="trust-user" className="w-8 h-8 rounded-full border-2 border-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOpg1-DV4w73pOG82DY3IgHnC3hcBTe0MN16ryMgcAGobf8LIC8N5YnpdWOp6WaZLrpBr5h0U71Zzcne9SeOfh7LC-2vjjUOSk4ipgyfvWRYsrsMDQeb0Pj10-iyQ7GKXGwnthAMV3dAbwaeEGKWO8XvdvbFE4SPri8y7B8gztxvN0hdk5gY7NDAg_C26ForqOs625Vme4WDzbh6NNt7Ja9_jl0wEUwmf8JVU06luG26WpSmZJU4esbZ2WEewYio47K7ASemxtSEGK" />
                    <img alt="trust-user" className="w-8 h-8 rounded-full border-2 border-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABC55aNouCAcwynpeD43IRsUeY0SjVQP90TKXcLMWZJ9XZI0M4z04wqIg6zyLzDuk8qiVdl0AAQ69fB3CPMK9jY10aFko4aeKxcCY7fIayvehdZcLZodrtw-qU16JlsRz-odCiyEn2SJj0tjHOF8B2AaTQ6CzgGc7_pAE541gRMMQUeJ0tU7D6yGQ8vlx-IkNtoSL7DAfrCWQ-HjskmU28ssASbK0Gxu2lImaTYJu-3jTGMusJiFLynvN0OgQI5QZyFxZQrC7FtMxy" />
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-[10px] font-bold">+4k</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal Backdrop */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-stack-lg text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl" data-icon="verified" data-weight="fill">verified</span>
              </div>
              <h2 className="text-h1 font-h1 mb-2">Welcome to Bugle.in Learning Platform</h2>
              <p className="text-body-md text-on-surface-variant mb-8">Your account is ready! We've customized your dashboard for a <span className="font-bold text-primary">Web Developer</span> role.</p>
              
              <div className="bg-surface-container rounded-xl p-4 mb-8 text-left border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary" data-icon="school">school</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface uppercase tracking-wide">Next Step</p>
                    <p className="text-sm text-on-surface-variant">Start "Advanced React Patterns" course</p>
                  </div>
                </div>
              </div>
              
              <button onClick={() => navigate('/login')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">Go to My Dashboard</button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="w-full py-8 px-12 flex justify-between items-center border-t border-gray-100 mt-auto bg-white">
          <div className="text-xs text-gray-500 font-['Inter']">
            © 2024 Bugle.in Enterprise Learning
          </div>
          <div className="flex gap-6">
            <Link className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Terms of Service</Link>
            <Link className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Privacy Policy</Link>
            <Link className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Help Center</Link>
            <Link className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200" to="#">Security</Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LearnerForm;
