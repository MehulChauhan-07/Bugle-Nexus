import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <main className="flex min-h-screen overflow-hidden">
        {/* Left Panel: Brand & Features */}
        <section className="hidden lg:flex w-1/2 bg-login-gradient flex-col justify-between p-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>
                  campaign
                </span>
              </div>
              <span className="text-h2 font-h2 text-white tracking-tight">Bugle.in</span>
            </div>
            
            <div className="max-w-lg">
              <h1 className="font-h1 text-h1 text-white mb-6 leading-tight">Upskill Your Team. Track Their Growth.</h1>
              <p className="font-body-lg text-body-lg text-white/70 mb-10">
                The most comprehensive Learning Management System for modern enterprise teams. Streamline training workflows and drive measurable outcomes.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" data-icon="send">send</span>
                  </div>
                  <div>
                    <h3 className="font-h3 text-body-lg text-white font-semibold">Assign courses instantly</h3>
                    <p className="font-body-md text-white/60">Automated enrollments based on employee roles and skill gaps.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" data-icon="query_stats">query_stats</span>
                  </div>
                  <div>
                    <h3 className="font-h3 text-body-lg text-white font-semibold">Track progress & attendance</h3>
                    <p className="font-body-md text-white/60">Real-time dashboards for monitoring individual and department engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" data-icon="article">article</span>
                  </div>
                  <div>
                    <h3 className="font-h3 text-body-lg text-white font-semibold">Generate certification reports</h3>
                    <p className="font-body-md text-white/60">Audit-ready documentation and automated certificate issuance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: Login Form */}
        <section className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8 lg:p-24 overflow-y-auto">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-10 text-center lg:text-left">
              <h2 className="font-h1 text-h1 text-on-surface mb-2">Welcome Back</h2>
              <p className="font-body-lg text-on-secondary-container">Log in to your enterprise dashboard</p>
            </div>

            {/* Form */}
            <form action="#" className="space-y-6" method="POST">
              {/* Role Selector */}
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Select Your Role</label>
                <div className="flex p-1 bg-surface-container rounded-xl gap-1">
                  <button className="flex-1 py-2 text-label-sm font-semibold rounded-lg bg-white shadow-sm text-primary transition-all" type="button">Admin</button>
                  <button className="flex-1 py-2 text-label-sm font-semibold rounded-lg text-on-secondary-container hover:bg-surface-variant transition-all" type="button">HR Manager</button>
                  <button className="flex-1 py-2 text-label-sm font-semibold rounded-lg text-on-secondary-container hover:bg-surface-variant transition-all" type="button">Employee</button>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="email">Email Address</label>
                <input className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="email" name="email" placeholder="name@company.com" type="email" />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant" htmlFor="password">Password</label>
                  <Link className="text-label-sm font-semibold text-primary hover:underline" to="#">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <input className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" id="password" name="password" placeholder="••••••••" type="password" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-secondary-container" type="button">
                    <span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember-me" name="remember-me" type="checkbox" />
                <label className="ml-3 block font-body-md text-on-surface-variant" htmlFor="remember-me">Remember me for 30 days</label>
              </div>

              {/* Action Button */}
              <button className="w-full bg-primary text-white font-h3 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2" type="submit">
                Login to Dashboard
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </form>

            {/* SSO Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-outline-variant"></div>
              <span className="font-mono-label text-[11px] text-on-secondary-container tracking-widest uppercase">Or Continue With</span>
              <div className="h-px flex-1 bg-outline-variant"></div>
            </div>

            {/* SSO Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant rounded-lg hover:bg-surface transition-all">
                <img alt="" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD83uutNzLhSx2CNJ3bdg-8mS-nMQ6dWwcY5cRM-bl-EOIv51EUkMMF_pLz5YCyTZGipsD9LsIK2oPpry_72dP5QSWiuDidCiQ6Z1ASTds386RjJcbmIUUzGeqRatAtLqpergwnO0TwvpDPCtxYuMRX4kjKFopU7pt8WKNfq0FUK1jDg6ScNl3hSGolbeYkHBBZ7Pi3GorZzoKW7luuwkLqkrTOCaSNmOFMaD47sTb9g4JhylNwD487--8QInwQlMyj0cE_umpCCwN-" />
                <span className="font-body-md font-semibold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant rounded-lg hover:bg-surface transition-all">
                <img alt="" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlmEP2sHiqskoJJdgIwM61gaJGiJWpSbUJcmcpjDsg9Kf1lvIZw8JaqpSDu8hL85Kbs_eMx98_gT6r91myPROYe63h-NDAaQPLwYppNhbYLwWv94-NDe_Ja-B2iLB5KbStZiLbBaC12OWbPVITejY2kvUbZ51gZknWxprjFos9u3mezhlF9BZU3zwScAoGGOuWaRVLvgZ0hZwTJcQ9Z880cf-n9mmcX0ebgt_S0LquOO_PwaPq6hp0y47gwe1XlqTuW4JJcRcM_sYQ" />
                <span className="font-body-md font-semibold">Microsoft</span>
              </button>
            </div>

            {/* Demo Credentials */}
            <div className="p-4 bg-surface-container-low rounded-xl border border-surface-variant mb-12">
              <div className="flex items-center gap-2 mb-2 text-on-surface font-semibold text-label-sm">
                <span className="material-symbols-outlined text-[18px]" data-icon="info">info</span>
                Demo Credentials
              </div>
              <div className="space-y-1 text-[11px] font-body-md text-on-surface-variant">
                <p><span className="font-bold">Admin:</span> ravi.kamdar@bugle.in</p>
                <p><span className="font-bold">HR:</span> kunjal.patel@bugle.in</p>
                <p><span className="font-bold">Employee:</span> jeel.mungra@bugle.in</p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center">
              <p className="font-body-md text-on-secondary-container mb-6">
                New organization? <Link className="text-primary font-semibold hover:underline" to="/role-selection">Contact admin</Link> to request access
              </p>
              <div className="flex justify-center gap-6 font-label-sm text-on-surface-variant">
                <Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link>
                <Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link>
                <Link className="hover:text-primary transition-colors" to="#">Support</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
