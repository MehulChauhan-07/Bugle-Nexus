import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSidebar from '../../../components/signup/OnboardingSidebar';

const LEARNER_STEPS = [
  { key: 'basic', label: 'Basic Info', sublabel: 'Name, Email, Password' },
  { key: 'profile', label: 'Profile Setup', sublabel: 'Interests & Goals' },
  { key: 'done', label: 'All Set!', sublabel: 'Access your dashboard' },
];

const LearnerBasic = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup/learner/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OnboardingSidebar steps={LEARNER_STEPS} currentStep={1} flowType="learner" />

      {/* Main */}
      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/signup/role')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back
            </button>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm text-gray-400">Learner Registration</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">Step 1 of 3</span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-1/3 rounded-full" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-8 py-10 max-w-4xl mx-auto w-full">
          {/* Page heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-100">
              <span className="material-symbols-outlined text-base">school</span>
              Learner Signup — Step 1
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Create your account</h1>
            <p className="text-gray-500 text-sm">Start your learning journey — it only takes a minute.</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Form */}
            <div className="col-span-12 lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">person</span>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">mail</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="arjun@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="password">
                    Create Password
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
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <span className="material-symbols-outlined text-xl">{showPass ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">Use at least 8 characters with a mix of letters and numbers.</p>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" required className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    I agree to Bugle.in's{' '}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
                >
                  Continue to Profile Setup
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>

                <p className="text-xs text-center text-gray-400">
                  Already have an account?{' '}
                  <button type="button" onClick={() => navigate('/login')} className="text-blue-600 hover:underline font-medium">
                    Sign in
                  </button>
                </p>
              </form>
            </div>

            {/* Right: Info card */}
            <div className="col-span-12 lg:col-span-5 space-y-4">
              {/* What's next card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500 text-xl">rocket_launch</span>
                  What's next?
                </h3>
                <ol className="space-y-3">
                  {[
                    { step: 1, label: 'Basic Info', sub: 'Name, email & password', active: true },
                    { step: 2, label: 'Profile Setup', sub: 'Interests & goals' },
                    { step: 3, label: 'Start Learning', sub: 'Access your dashboard' },
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

              {/* Trust card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <p className="font-bold text-sm mb-1">Trusted by 50,000+ Learners</p>
                <p className="text-white/70 text-xs mb-4 leading-relaxed">
                  Join developers from Amazon, Google, and Infosys who use Bugle.in to grow their careers.
                </p>
                <div className="flex -space-x-2">
                  {[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuC6o4WYTSArrmnFcHEhTPTpadFFDyY1g27KZnvo_P0HLs6f6y9Ecqit_E-cpheEHURuQibSZN_MidQnb0PLlyBSLbjkntJxBJ7lColpm053tYz4gkhkFSgG1wLsRvnd3XevbTLkYXYo4z5w1mtdM_hAjd93Rk3-pzlnHM6hORb4zHOOgpGzb3aa7v-uONGnVyIxwJ1V7PdG1kKFa6EBn35Hwm9iBdEnLn7AFgEdqktbQC4ZVJ2eL5ocJ-QG4vBhd5dmJPWjPFp2Z4hX',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDOpg1-DV4w73pOG82DY3IgHnC3hcBTe0MN16ryMgcAGobf8LIC8N5YnpdWOp6WaZLrpBr5h0U71Zzcne9SeOfh7LC-2vjjUOSk4ipgyfvWRYsrsMDQeb0Pj10-iyQ7GKXGwnthAMV3dAbwaeEGKWO8XvdvbFE4SPri8y7B8gztxvN0hdk5gY7NDAg_C26ForqOs625Vme4WDzbh6NNt7Ja9_jl0wEUwmf8JVU06luG26WpSmZJU4esbZ2WEewYio47K7ASemxtSEGK',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuABC55aNouCAcwynpeD43IRsUeY0SjVQP90TKXcLMWZJ9XZI0M4z04wqIg6zyLzDuk8qiVdl0AAQ69fB3CPMK9jY10aFko4aeKxcCY7fIayvehdZcLZodrtw-qU16JlsRz-odCiyEn2SJj0tjHOF8B2AaTQ6CzgGc7_pAE541gRMMQUeJ0tU7D6yGQ8vlx-IkNtoSL7DAfrCWQ-HjskmU28ssASbK0Gxu2lImaTYJu-3jTGMusJiFLynvN0OgQI5QZyFxZQrC7FtMxy',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="user" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-[10px] font-bold">+4k</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearnerBasic;
