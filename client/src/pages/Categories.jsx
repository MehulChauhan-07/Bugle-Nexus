import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories-page pt-4">

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">BugleNexus Learn</div>
        <h1 className="hero-title">Building skills and digital expertise that <em>make an impact.</em></h1>
        <p className="hero-desc">Explore professional courses in marketing, design, and technology. Learn at your own pace, with certificates on completion.</p>
        <div className="hero-actions">
          <a href="#categories" className="btn-large btn-dark">Explore Categories</a>
        </div>
      </section>

      {/* COURSE CATEGORIES */}
      <section className="category-section" id="categories">
        <div className="section-container">
          <h2 className="section-title">Browse Courses by Category</h2>
          <div className="category-grid">

            <div className="category-card">
              <h3>📈 Growth & Marketing</h3>
              <div className="category-links">
                <Link to="#">SEO & Local Search</Link>
                <Link to="#">Performance Marketing</Link>
                <Link to="#">Conversion Optimization</Link>
                <Link to="#">Email Marketing Automation</Link>
              </div>
            </div>

            <div className="category-card">
              <h3>💻 Technology & Development</h3>
              <div className="category-links">
                <Link to="#">Web Development</Link>
                <Link to="#">JavaScript & Frameworks</Link>
                <Link to="#">Backend Systems</Link>
              </div>
            </div>

            <div className="category-card">
              <h3>📊 Business & Analytics</h3>
              <div className="category-links">
                <Link to="#">Data Analytics</Link>
                <Link to="#">Business Intelligence</Link>
                <Link to="#">Decision Making</Link>
              </div>
            </div>

            <div className="category-card">
              <h3>🎨 Design & UI/UX</h3>
              <div className="category-links">
                <Link to="#">UI Design</Link>
                <Link to="#">UX Research</Link>
                <Link to="#">Product Design</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="featured-section">
        <div className="section-container">
          <h2 className="section-title">Featured Courses</h2>
          <div className="course-grid">

            <article className="course-card">
              <div className="card-body">
                <div className="card-top-row">
                  <span className="badge badge-free">Free</span>
                </div>
                <h3 className="card-title">SEO Basics</h3>
                <div className="card-rating">
                  <span className="stars">★★★★★</span>
                  <span>4.8 (124 reviews)</span>
                </div>
                <div className="card-meta">
                  <span className="meta-item">⏱ 2h 15m</span>
                  <span className="meta-item">📊 Beginner</span>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="card-body">
                <div className="card-top-row">
                  <span className="badge badge-free">Free</span>
                </div>
                <h3 className="card-title">Local Search Basics</h3>
                <div className="card-rating">
                  <span className="stars">★★★★☆</span>
                  <span>4.6 (89 reviews)</span>
                </div>
                <div className="card-meta">
                  <span className="meta-item">⏱ 1h 45m</span>
                  <span className="meta-item">📊 Beginner</span>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="card-body">
                <div className="card-top-row">
                  <span className="badge badge-paid">Paid</span>
                </div>
                <h3 className="card-title">Advanced SEO</h3>
                <div className="card-rating">
                  <span className="stars">★★★★★</span>
                  <span>4.9 (210 reviews)</span>
                </div>
                <div className="card-meta">
                  <span className="meta-item">⏱ 6h 30m</span>
                  <span className="meta-item">📊 Advanced</span>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="card-body">
                <div className="card-top-row">
                  <span className="badge badge-paid">Paid</span>
                </div>
                <h3 className="card-title">Performance Marketing Mastery</h3>
                <div className="card-rating">
                  <span className="stars">★★★★★</span>
                  <span>4.9 (340 reviews)</span>
                </div>
                <div className="card-meta">
                  <span className="meta-item">⏱ 8h 15m</span>
                  <span className="meta-item">📊 Advanced</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* FREE COURSES */}
      <section className="free-courses-section">
        <div className="section-container">
          <div className="split-layout">
            <div className="split-content">
              <h2 className="section-title">Start Learning with Free Courses</h2>
              <p>Get started with beginner-friendly courses at no cost. Build foundational knowledge before moving to advanced training.</p>
              <Link to="/role-selection" className="btn-large btn-outline">Create Free Account</Link>
            </div>
            <div className="mini-course-list">
              <Link to="#" className="mini-card">
                <span className="mini-card-title">SEO Basics</span>
                <span className="mini-card-badge">Free</span>
              </Link>
              <Link to="#" className="mini-card">
                <span className="mini-card-title">Local SEO Basics</span>
                <span className="mini-card-badge">Free</span>
              </Link>
              <Link to="#" className="mini-card">
                <span className="mini-card-title">Intro to Marketing</span>
                <span className="mini-card-badge">Free</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM COURSES */}
      <section className="premium-courses-section">
        <div className="section-container">
          <div className="premium-box">
            <div className="premium-content">
              <h2>🔒 Unlock Advanced Skills with Premium Courses</h2>
              <p>Take your expertise to the next level with in-depth, advanced courses designed for professionals and teams.</p>
              <Link to="/role-selection" className="btn-large btn-primary" style={{ color: '#111' }}>Upgrade Your Skills &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER is now in Layout/Footer.jsx */}
    </div>
  );
};

export default Categories;
