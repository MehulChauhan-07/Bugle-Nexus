import re

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Online Business Courses | Marketing, SEO & Growth — BugleNexus</title>
    <meta name="description" content="Explore free and paid online business courses on growth marketing, SEO, performance marketing, CRO, and email automation." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

    <style>
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :root {
            --bg: #F9F8F4;
            --bg-card: #FFFFFF;
            --bg-dark: #111111;
            --text-primary: #111111;
            --text-secondary: #4A4A4A;
            --text-muted: #8A8A8A;
            --border: rgba(17, 17, 17, 0.1);
            --border-md: rgba(17, 17, 17, 0.18);
            --accent: #E31E24;
            --accent-light: #FBEAEA;
            --accent-dark: #C4181E;
            --amber: #BA7517;
            --amber-light: #FAEEDA;
            --blue: #185FA5;
            --blue-light: #E6F1FB;
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 16px;
            --radius-xl: 24px;
        }

        html { scroll-behavior: smooth; }

        body {
            font-family: 'DM Sans', sans-serif;
            background: var(--bg);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
        }

        /* ── NAV ── */
        nav {
            position: sticky;
            top: 0;
            z-index: 100;
            background: var(--bg-dark);
            padding: 0 2rem;
        }

        .nav-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 72px;
        }

        .nav-logo {
            font-family: 'DM Sans', sans-serif;
            font-size: 22px;
            color: #ffffff;
            font-weight: 500;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            letter-spacing: 0.02em;
        }

        .nav-logo-icon {
            width: 24px;
            height: 24px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            font-weight: bold;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 2.5rem;
            list-style: none;
        }

        .nav-links a {
            font-size: 14px;
            font-weight: 400;
            color: #cccccc;
            text-decoration: none;
            transition: color 0.15s;
        }

        .nav-links a:hover, .nav-links a.active {
            color: #ffffff;
        }

        .nav-cta {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .btn-ghost {
            font-size: 14px;
            padding: 10px 20px;
            border-radius: var(--radius-sm);
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.15s;
        }

        .btn-ghost:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .btn-primary {
            font-size: 14px;
            padding: 10px 20px;
            border-radius: var(--radius-sm);
            border: none;
            background: #ffffff;
            color: var(--text-primary);
            cursor: pointer;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.15s;
        }

        .btn-primary:hover {
            opacity: 0.85;
        }

        /* ── HERO ── */
        .hero {
            max-width: 1200px;
            margin: 0 auto;
            padding: 5rem 2rem 4rem;
            text-align: center;
        }

        .hero-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--accent);
            margin-bottom: 1.5rem;
        }

        h1.hero-title {
            font-family: 'Instrument Serif', serif;
            font-size: 64px;
            line-height: 1.1;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-weight: 400;
            max-width: 800px;
            margin-inline: auto;
        }

        h1.hero-title em {
            font-style: italic;
            color: var(--accent);
        }

        .hero-desc {
            font-size: 18px;
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto 2.5rem;
        }

        .hero-actions {
            display: flex;
            gap: 12px;
            justify-content: center;
        }

        .btn-large {
            font-size: 16px;
            padding: 14px 32px;
            border-radius: var(--radius-sm);
            font-weight: 500;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.2s;
        }

        .btn-dark {
            background: var(--text-primary);
            color: var(--bg);
            border: none;
        }

        .btn-dark:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .btn-outline {
            background: transparent;
            color: var(--text-primary);
            border: 1px solid var(--border-md);
        }

        .btn-outline:hover {
            background: rgba(17, 17, 17, 0.05);
        }

        /* ── SECTION STYLES ── */
        .section-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .section-title {
            font-family: 'Instrument Serif', serif;
            font-size: 36px;
            font-weight: 400;
            color: var(--text-primary);
            margin-bottom: 2.5rem;
        }

        /* ── CATEGORIES ── */
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
        }

        .category-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 2rem;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .category-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.06);
            border-color: var(--border-md);
        }

        .category-card h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .category-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .category-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 15px;
            transition: color 0.2s;
            display: flex;
            align-items: center;
        }

        .category-links a::before {
            content: '→';
            opacity: 0;
            transform: translateX(-8px);
            transition: all 0.2s;
            color: var(--accent);
            margin-right: 6px;
            font-size: 14px;
        }

        .category-links a:hover {
            color: var(--accent);
        }

        .category-links a:hover::before {
            opacity: 1;
            transform: translateX(0);
        }

        /* ── COURSES ── */
        .course-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }

        .course-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .course-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px rgba(0,0,0,0.08);
            border-color: var(--border-md);
        }

        .card-body {
            padding: 1.5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .card-top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        .badge {
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .badge-free {
            background: var(--accent-light);
            color: var(--accent-dark);
        }

        .badge-paid {
            background: #F3F4F6;
            color: #374151;
        }

        .card-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            line-height: 1.3;
            margin-bottom: 0.5rem;
        }

        .card-rating {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }

        .card-rating span.stars {
            color: #F59E0B;
            letter-spacing: 1px;
        }

        .card-meta {
            display: flex;
            gap: 16px;
            margin-top: auto;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border);
        }

        .meta-item {
            font-size: 13px;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        /* ── SPLIT SECTION (FREE COURSES) ── */
        .split-layout {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
            align-items: center;
        }

        .split-content h2 {
            font-family: 'Instrument Serif', serif;
            font-size: 42px;
            line-height: 1.1;
            margin-bottom: 1.5rem;
        }

        .split-content p {
            font-size: 16px;
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }

        .mini-course-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .mini-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            padding: 1.25rem;
            border-radius: var(--radius-md);
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s;
            text-decoration: none;
            color: inherit;
        }

        .mini-card:hover {
            border-color: var(--accent);
            box-shadow: 0 4px 12px rgba(227, 30, 36, 0.08);
        }

        .mini-card-title {
            font-weight: 600;
            font-size: 16px;
        }

        .mini-card-badge {
            font-size: 12px;
            font-weight: 500;
            color: var(--accent);
            background: var(--accent-light);
            padding: 4px 10px;
            border-radius: 999px;
        }

        /* ── PREMIUM SECTION ── */
        .premium-box {
            background: var(--bg-dark);
            border-radius: var(--radius-xl);
            padding: 5rem 3rem;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
            margin-bottom: 4rem;
        }

        .premium-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(227, 30, 36, 0.1) 0%, transparent 50%);
            z-index: 0;
            pointer-events: none;
        }

        .premium-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
            margin: 0 auto;
        }

        .premium-content h2 {
            font-family: 'Instrument Serif', serif;
            font-size: 42px;
            color: white;
            margin-bottom: 1.5rem;
        }

        .premium-content p {
            font-size: 18px;
            color: rgba(255,255,255,0.7);
            margin-bottom: 2.5rem;
        }

        /* ── FOOTER ── */
        footer {
            background: var(--bg-dark);
            color: white;
            padding: 4rem 2rem 2rem;
        }

        .footer-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 2rem;
        }

        .footer-left {
            font-size: 14px;
            color: rgba(255,255,255,0.5);
        }

        .footer-links {
            display: flex;
            gap: 2rem;
        }

        .footer-links a {
            font-size: 14px;
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            transition: color 0.2s;
        }

        .footer-links a:hover {
            color: white;
        }

        @media (max-width: 900px) {
            .split-layout { grid-template-columns: 1fr; }
            h1.hero-title { font-size: 48px; }
            .nav-links { display: none; }
        }

    </style>
</head>
<body>

    <!-- NAV -->
    <nav>
        <div class="nav-inner">
            <a href="/" class="nav-logo">
                <div class="nav-logo-icon">B</div>
                BUGLE
            </a>
            <ul class="nav-links">
                <li><a href="/learn/courses" class="active">Courses</a></li>
                <li><a href="/learn/my-learning">My Learning</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div class="nav-cta">
                <a href="/auth/login" class="btn-ghost">Log in</a>
                <a href="/auth/signup" class="btn-primary">Let's Connect &rarr;</a>
            </div>
        </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
        <div class="hero-eyebrow">BugleNexus Learn</div>
        <h1 class="hero-title">Building skills and digital expertise that <em>make an impact.</em></h1>
        <p class="hero-desc">Explore professional courses in marketing, design, and technology. Learn at your own pace, with certificates on completion.</p>
        <div class="hero-actions">
            <a href="#categories" class="btn-large btn-dark">Explore Categories</a>
        </div>
    </section>

    <!-- COURSE CATEGORIES -->
    <section class="category-section" id="categories">
        <div class="section-container">
            <h2 class="section-title">Browse Courses by Category</h2>
            <div class="category-grid">
                
                <div class="category-card">
                    <h3>📈 Growth & Marketing</h3>
                    <div class="category-links">
                        <a href="/learn/category/seo-local-search">SEO & Local Search</a>
                        <a href="/learn/category/performance-marketing">Performance Marketing</a>
                        <a href="/learn/category/conversion-optimization">Conversion Optimization</a>
                        <a href="/learn/category/email-marketing-automation">Email Marketing Automation</a>
                    </div>
                </div>

                <div class="category-card">
                    <h3>💻 Technology & Development</h3>
                    <div class="category-links">
                        <a href="/learn/category/web-development">Web Development</a>
                        <a href="/learn/category/javascript-frameworks">JavaScript & Frameworks</a>
                        <a href="/learn/category/backend-systems">Backend Systems</a>
                    </div>
                </div>

                <div class="category-card">
                    <h3>📊 Business & Analytics</h3>
                    <div class="category-links">
                        <a href="/learn/category/data-analytics">Data Analytics</a>
                        <a href="/learn/category/business-intelligence">Business Intelligence</a>
                        <a href="/learn/category/decision-making">Decision Making</a>
                    </div>
                </div>

                <div class="category-card">
                    <h3>🎨 Design & UI/UX</h3>
                    <div class="category-links">
                        <a href="/learn/category/ui-design">UI Design</a>
                        <a href="/learn/category/ux-research">UX Research</a>
                        <a href="/learn/category/product-design">Product Design</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FEATURED COURSES -->
    <section class="featured-section">
        <div class="section-container">
            <h2 class="section-title">Featured Courses</h2>
            <div class="course-grid">
                
                <article class="course-card">
                    <div class="card-body">
                        <div class="card-top-row">
                            <span class="badge badge-free">Free</span>
                        </div>
                        <h3 class="card-title">SEO Basics</h3>
                        <div class="card-rating">
                            <span class="stars">★★★★★</span>
                            <span>4.8 (124 reviews)</span>
                        </div>
                        <div class="card-meta">
                            <span class="meta-item">⏱ 2h 15m</span>
                            <span class="meta-item">📊 Beginner</span>
                        </div>
                    </div>
                </article>

                <article class="course-card">
                    <div class="card-body">
                        <div class="card-top-row">
                            <span class="badge badge-free">Free</span>
                        </div>
                        <h3 class="card-title">Local Search Basics</h3>
                        <div class="card-rating">
                            <span class="stars">★★★★☆</span>
                            <span>4.6 (89 reviews)</span>
                        </div>
                        <div class="card-meta">
                            <span class="meta-item">⏱ 1h 45m</span>
                            <span class="meta-item">📊 Beginner</span>
                        </div>
                    </div>
                </article>

                <article class="course-card">
                    <div class="card-body">
                        <div class="card-top-row">
                            <span class="badge badge-paid">Paid</span>
                        </div>
                        <h3 class="card-title">Advanced SEO</h3>
                        <div class="card-rating">
                            <span class="stars">★★★★★</span>
                            <span>4.9 (210 reviews)</span>
                        </div>
                        <div class="card-meta">
                            <span class="meta-item">⏱ 6h 30m</span>
                            <span class="meta-item">📊 Advanced</span>
                        </div>
                    </div>
                </article>

                <article class="course-card">
                    <div class="card-body">
                        <div class="card-top-row">
                            <span class="badge badge-paid">Paid</span>
                        </div>
                        <h3 class="card-title">Performance Marketing Mastery</h3>
                        <div class="card-rating">
                            <span class="stars">★★★★★</span>
                            <span>4.9 (340 reviews)</span>
                        </div>
                        <div class="card-meta">
                            <span class="meta-item">⏱ 8h 15m</span>
                            <span class="meta-item">📊 Advanced</span>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <!-- FREE COURSES -->
    <section class="free-courses-section">
        <div class="section-container">
            <div class="split-layout">
                <div class="split-content">
                    <h2 class="section-title">Start Learning with Free Courses</h2>
                    <p>Get started with beginner-friendly courses at no cost. Build foundational knowledge before moving to advanced training.</p>
                    <a href="/auth/signup" class="btn-large btn-outline">Create Free Account</a>
                </div>
                <div class="mini-course-list">
                    <a href="/course/seo-basics" class="mini-card">
                        <span class="mini-card-title">SEO Basics</span>
                        <span class="mini-card-badge">Free</span>
                    </a>
                    <a href="/course/local-seo-basics" class="mini-card">
                        <span class="mini-card-title">Local SEO Basics</span>
                        <span class="mini-card-badge">Free</span>
                    </a>
                    <a href="/course/intro-marketing" class="mini-card">
                        <span class="mini-card-title">Intro to Marketing</span>
                        <span class="mini-card-badge">Free</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- PREMIUM COURSES -->
    <section class="premium-courses-section">
        <div class="section-container">
            <div class="premium-box">
                <div class="premium-content">
                    <h2>🔒 Unlock Advanced Skills with Premium Courses</h2>
                    <p>Take your expertise to the next level with in-depth, advanced courses designed for professionals and teams.</p>
                    <a href="/upgrade" class="btn-large btn-primary" style="color: #111;">Upgrade Your Skills &rarr;</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="footer-inner">
            <span class="footer-left">© 2025 BugleNexus. All rights reserved.</span>
            <div class="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </footer>

</body>
</html>
"""

with open("/home/mehulc07/Projects/BugleNexus/Categories.html", "w") as f:
    f.write(html_content)
