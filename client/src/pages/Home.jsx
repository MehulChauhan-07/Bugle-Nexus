import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed">
      <main className="pt-8">
        {/* Hero Section */}
        <section className="relative px-8 pt-12 pb-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center overflow-hidden">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-wider uppercase">
              Future-Proof Your Skills
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              Learn In-Demand <span className="text-gradient">Skills</span>, Build Your Career.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Access world-class education curated by industry experts. Join over 10,000 students mastering the digital landscape today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/categories" className="btn-gradient px-8 py-4 rounded-xl text-white font-bold text-base shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all inline-block">
                Browse Courses
              </Link>
              <button className="px-8 py-4 rounded-xl border border-outline-variant font-bold text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-2xl shadow-slate-200/60 border border-white">
              <img 
                alt="Course Dashboard Interface" 
                className="rounded-xl w-full object-cover aspect-video shadow-inner" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ey240ElqQTUuHU9_MsAeRM6GovrCRGYBjO-gyTxrgImw0rxXOhaIp14jTynreIEqjg3lVv-ifhSCp9IfpbKyTNqYRuAWg_-UIto6uyXYcwhu25iwFB36T2iOZtsdHnx5x_IwwigARqKg_lT-bwUPDELLBkqb9xyu2BVvHcpZimz7RD2oEs9x_3q4LULKVAzza1zr_ODUa-OVJVpxZ19izInJFEWSLzGaOwtQizc4CbVsNp8Tjg0UOZyggK8cFYL97njwmBe4ZYOQ" 
              />
            </div>
            {/* Floating Card UI Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-surface-container">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium">Monthly Progress</p>
                <p className="text-lg font-bold text-on-surface">+84% Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary-container py-12 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-1">500+</p>
              <p className="text-on-primary-container text-sm font-medium tracking-wide">Courses</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-1">10,000+</p>
              <p className="text-on-primary-container text-sm font-medium tracking-wide">Students</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-1">50+</p>
              <p className="text-on-primary-container text-sm font-medium tracking-wide">Instructors</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-1">4.8</p>
              <p className="text-on-primary-container text-sm font-medium tracking-wide">Star Rating</p>
            </div>
          </div>
        </section>

        {/* Categories Section (Bento Grid Inspired) */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Explore Top Categories</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tailored paths designed for professionals looking to scale their impact in the modern economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Dev */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">Web Development</h3>
              <p className="text-on-surface-variant text-sm mb-4">Master modern frameworks like React, Node, and more.</p>
              <Link to="/categories" className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            {/* Digital Marketing */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">campaign</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-on-surface-variant text-sm mb-4">Grow brands using advanced strategy and analytics.</p>
              <Link to="/categories" className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            {/* UI/UX */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">draw</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-on-surface-variant text-sm mb-4">Design products that people love to use every day.</p>
              <Link to="/categories" className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            {/* Business */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">Business Analytics</h3>
              <p className="text-on-surface-variant text-sm mb-4">Turn raw data into actionable business intelligence.</p>
              <Link to="/categories" className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            {/* SEO */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">search_check</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">SEO Mastery</h3>
              <p className="text-on-surface-variant text-sm mb-4">Rank higher and drive organic traffic consistently.</p>
              <Link to="/categories" className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            {/* App Dev */}
            <div className="group p-8 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">smartphone</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">App Development</h3>
              <p className="text-on-surface-variant text-sm mb-4">Build powerful cross-platform mobile applications.</p>
              <Link to="/categories" className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-2">Most Popular Courses</h2>
                <p className="text-on-surface-variant">Handpicked sessions to kickstart your next career move.</p>
              </div>
              <Link to="/categories" className="text-secondary font-bold flex items-center gap-2 hover:underline">
                View All Courses <span className="material-symbols-outlined">chevron_right</span>
              </Link>
            </div>
            
            <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar -mx-4 px-4 snap-x">
              {/* Course Card 1 */}
              <div className="min-w-[320px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow snap-start">
                <div className="relative h-48">
                  <img 
                    alt="UI/UX Design Course" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwjSMJfAHTyV5XhCn0pxQWvaliVetSsCCXdxNwmswY2_LlZvFsaUK6ZeEJYpMklMhgQJER2kZSsaiZYAE5ZHsTNBCm36-QChnMG1YEMnByZkzoyZ-Vdd-k5d8krDl6RpUS7KgsBSYavh36PEm2WNONgAQrMPx3pTTjyb8WVClP7FaUD3793qO63Ba5B8Lakcfzr1GH2NkP03oTQAJfOZMbWOQ8MJXvp-574Ezilo6Kqn3dHQm8T90zY3l6CfMUMVWXyNQCLZF1xe9A" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-secondary">
                    Bestseller
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Design</p>
                  <h4 className="font-headline text-lg font-bold mb-2 line-clamp-1">Advanced UI/UX Systems</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      alt="Instructor" 
                      className="w-6 h-6 rounded-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXWjaJnGtTivvGCNZMQzYWN9pKVBg3o_pCoDI_uKMd7LC_7J4u9WQDijONU4KU1Fm5IrZ37vp_O7kJhfGpOl6oYWjhVB5jjRXxUdgcjKZT-8b9dhpa0CwFCKUSK1ifYB-WiUGGoWkKo3LOdDplKNgrglKgg401D8VnrYemB3jw5ybC8QuZrr4jCZZ435d1cb4vfaSmWe8erP6vgsYtT9yk06w5vsr9xb3ml2SrQAkU1L-rj4MVI4gomkuLLNnM9STwaGNRfdFYnDhY" 
                    />
                    <span className="text-sm text-on-surface-variant">David Chen</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xl font-extrabold text-on-surface">$89.00</span>
                    <Link to="/role-selection" className="btn-gradient px-4 py-2 rounded-lg text-white text-xs font-bold inline-block">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Course Card 2 */}
              <div className="min-w-[320px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow snap-start">
                <div className="relative h-48">
                  <img 
                    alt="Web Dev Course" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7mHrJ1OD-nejKoIs2q3XGua4Adudh44FGHuPx7pgNFf7C-w5JLkIg1lSIjmL-DGOJTLwVMTi0zeKh1YBS0JxACIntnnQZrrmnAT1Yh3nDaW-VCwSWXFmMGOOxCX4CR7bBg-ZzEW089Y96E_9x95EOW1N44DjcfDXrPQz978KGCVQrbzyMKXqrA-o1tbnrOxoTmzOcpfYRf7yqc1US_XVzc1-ri0B_5JDWpuQwm4_qk08phq0x98D2tuPZgS-L9sAJ8b4VqP9U0sVa" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Development</p>
                  <h4 className="font-headline text-lg font-bold mb-2 line-clamp-1">Full-Stack Mastery 2024</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      alt="Instructor" 
                      className="w-6 h-6 rounded-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLMCKy2fIWMhGwaYC2GhHISyRRwYTyt-61rSukip0oGVOC6fzP4po-cGbDbq2dfy844l8LPMhj_Mk0nz359lyvuIW5gkBIBriu-wVVm5fcoRCcHdwyGygtTZzA6ABWYuxd9z4NdkZfxn2BF3UTSn5WG-UF6iGkScM8x4xAQ9ocN-xtBz2Yo6W_jVfxKakAjYWbCBwr4XrBxTk1gIM3Mw7kfu90tzvIMZrvpStEiYKtFqU257my-DeJ_sABS3evTLGPkDAFoJm3rHA4" 
                    />
                    <span className="text-sm text-on-surface-variant">Sarah Jenkins</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xl font-extrabold text-on-surface">$129.00</span>
                    <Link to="/role-selection" className="btn-gradient px-4 py-2 rounded-lg text-white text-xs font-bold inline-block">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Course Card 3 */}
              <div className="min-w-[320px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow snap-start">
                <div className="relative h-48">
                  <img 
                    alt="Analytics Course" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB9yEKg5N1L4CsVFxpEyXGPpX6biCekKF4WOAiCDzFAsf5JGdhU1fBo9ew2FWJFHA08KNBdhPNrXDyssOwdMeKH_mzk5ACHvpzmD2VEpn6Nk3BJKQekDIhSpNc7vdYrW9Q17kK0cqem2o_MjjoVH5hMG84UL8dVzdj58uG_hQjo6MXH-V3c74SxqGMVw8OjYt9nc3e4nvy3l5pn0lON5Qbq5WLi0OHrCSPlfuim8LjY3sCkcconmrS8QwQg1_OAKah5YhRHUmsu1Mm" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Business</p>
                  <h4 className="font-headline text-lg font-bold mb-2 line-clamp-1">Data Driven Marketing</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      alt="Instructor" 
                      className="w-6 h-6 rounded-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbXDap8NPCIWizBxBdzg2Hokr3DsjHj40qMPjyKNXYVMuN_BCkTFSE3gZJKweemkRjhVvF_AltS8SGl8BMcGQSOrU07EODIDEKnwnohVBuvrbokMpycJAeG0ael4YAoJrSj04k3WMrxxclpyodJGWyjVPf2YfpmzSQDkbX6OQ8nhW4JkyN83T1SHca_zLH_lzCv6s-LIZl8veXeJjJ_QxddqRSD5T_ID2Y4UE6XgCbOyZ1K_KLBRpCdeL3DeDiGvUfkMH8Ye3oeQg" 
                    />
                    <span className="text-sm text-on-surface-variant">Marcus Thorne</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xl font-extrabold text-on-surface">$75.00</span>
                    <Link to="/role-selection" className="btn-gradient px-4 py-2 rounded-lg text-white text-xs font-bold inline-block">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-secondary-fixed text-secondary flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-headline text-xl font-bold">Certified Learning</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Earn globally recognized certificates that validate your expertise and boost your professional credibility.
              </p>
            </div>
            
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-secondary-fixed text-secondary flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined">group</span>
              </div>
              <h3 className="font-headline text-xl font-bold">Expert Mentorship</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Get direct access to industry leaders through live sessions and personalized feedback on your projects.
              </p>
            </div>
            
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-secondary-fixed text-secondary flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined">all_inclusive</span>
              </div>
              <h3 className="font-headline text-xl font-bold">Lifetime Access</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Enroll once and learn at your own pace with lifetime access to all course materials and updates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
