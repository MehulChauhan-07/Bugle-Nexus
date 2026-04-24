# EMS

nice , that is good prompt focusing on the courses and video, i generated some desing but from that i realise the design is focus the course seliing portal , so now we want to create prompt focus on the employee training and similiar

12:24 PM

Pivoted focus toward employee training platform prompts

Great shift! Employee training LMS is a completely different design language — less "marketplace", more "corporate tool". Here are the prompts:

***

### 🎨 Prompt 1 - Employee Training Portal Homepage (Login Landing)

```
Design a corporate Employee Training Portal page — an internal LMS used by companies 
to train their employees in digital skills, compliance, 
onboarding, and professional development.

Layout: Desktop web, centered login page with company branding
Style: Enterprise SaaS, clean, professional, trustworthy — 
similar to Workday, SAP SuccessFactors, or Cornerstone OnDemand
Color scheme: Deep navy (#0A1628) header/sidebar, 
white card areas, electric blue (#2563EB) for CTAs, 
soft gray (#F8FAFC) background

Page layout — split screen:
Left panel (40% width, navy background):
- Bugle.in logo top left (white version)
- Large headline: "Upskill Your Team. Track Their Growth."
- Subheadline: "One platform for onboarding, compliance 
  training, and professional development"
- 3 feature bullets with checkmark icons:
  "Assign courses to teams instantly"
  "Track completion and quiz scores"
  "Generate performance reports"
- Illustration of a team dashboard or training progress 
  chart (flat style, blue tones)

Right panel (60% width, white):
- "Welcome Back" heading
- Company logo placeholder (small, top)
- Email input field
- Password input field  
- "Remember me" checkbox
- "Login" button (full width, blue)
- "Login with Google / Microsoft SSO" button (outlined)
- "Forgot Password?" link
- Small text: "New company? Contact admin to get access"
- Footer: Privacy Policy | Terms | Support
```

***

### 🎨 Prompt 2 - Employee Dashboard (After Login)

```
Design an Employee Dashboard for a corporate training LMS.

This is what an employee sees after logging in their personal training home screen.

Layout: Desktop web app, left sidebar + main content
Style: Clean enterprise dashboard, data-forward, 
professional — like Microsoft Viva Learning or LinkedIn 
Learning for enterprise
Color scheme: White sidebar, light gray body (#F1F5F9), 
navy (#0A1628) sidebar active states, blue (#2563EB) 
for progress and CTAs, amber (#F59E0B) for deadlines/alerts

Left sidebar (fixed, narrow):
- Bugle.in logo + company name
- Employee avatar, name, department tag 
  (e.g. "Marketing Team")
- Navigation icons with labels: 
  My Training, Assigned Courses, Certificates, 
  Leaderboard, Help
- "Admin Panel" link visible only for managers

Main content:
1. Top bar — greeting "Good morning, Priya!" + 
   notification bell + search bar

2. Alert banner (amber) — 
   "You have 2 overdue trainings. Complete by Friday."

3. Training summary row (4 stat cards):
   - Assigned: 6
   - Completed: 3 (green)
   - In Progress: 2 (blue)
   - Overdue: 1 (red)

4. "Continue Where You Left Off" — 
   large card with course thumbnail, title 
   "Digital Marketing Fundamentals", 
   module name, progress bar 58%, 
   "Resume Training" blue button

5. Assigned training list — table format:
   Columns: Course Name | Assigned By | Due Date | 
   Status | Action
   3–4 rows with status pills: 
   (Completed-green, In Progress-blue, Not Started-gray, 
   Overdue-red)

6. "Mandatory Compliance Trainings" section — 
   highlighted box with red border, 
   2 course cards: "Data Privacy Policy 2024", 
   "Workplace Safety Guidelines"

7. Upcoming live session card — 
   date, time, topic, "Join Session" button
```

***

### 🎨 Prompt 3 - Manager / HR Admin Dashboard

```
Design a Manager/HR Admin Dashboard for a corporate training.

This is used by HR managers and team leads to monitor team 
training progress, assign courses, and generate reports.

Layout: Desktop web app, wide sidebar + data-heavy main area
Style: Analytics-heavy enterprise dashboard — 
similar to Tableau, Workday Analytics, or Google Data Studio 
but simplified and clean
Color scheme: White background, navy (#0F172A) for headers 
and sidebar, blue (#2563EB) for charts and active elements, 
green (#16A34A) for completion metrics, red (#DC2626) for 
overdue/alerts

Top navigation bar:
- Bugle.in logo
- Team selector dropdown: "Marketing Team ▼"
- Date range filter: "This Month ▼"
- Export Report button (outlined)
- Admin avatar top right

Main content grid:

Row 1 — KPI cards (5 across):
- Total Employees: 24
- Courses Assigned: 8
- Avg Completion Rate: 72% (green)
- Trainings Overdue: 5 (red with alert icon)
- Certificates Issued This Month: 11

Row 2 — Two column charts:
Left: Donut chart — "Team Completion Overview"
  Completed 72% / In Progress 18% / Not Started 10%
  Color: green/blue/gray
Right: Bar chart — "Course-wise Completion Rate"
  Horizontal bars per course name, blue fill, 
  percentage label at end

Row 3 — Employee progress table:
Title: "Individual Training Status"
Columns: Employee Name | Department | Assigned | 
Completed | Overdue | Last Active | View Details
5–6 rows, sortable, with colored status pills
Search bar above table, filter by department

Row 4 — Two panels side by side:
Left: "Overdue Trainings Alert" — 
  list of employee names + course + days overdue + 
  "Send Reminder" button per row
Right: "Upcoming Training Deadlines" — 
  calendar-style or list view of next 7 days
```

***

### 🎨 Prompt 4 - Course Assignment Page (Manager assigns training)

```
Design a "Assign Training" page for HR managers in a LMS.

This is where a manager selects a training course and 
assigns it to specific employees or entire teams.

Layout: Desktop, multi-step form with sidebar preview
Style: Clean form UI, step-by-step wizard style, 
professional enterprise feel
Color scheme: White background, blue (#2563EB) for 
step indicators and CTAs, gray (#64748B) for inactive steps

Top: Step indicator bar — 3 steps:
  Step 1: Select Course (active/filled blue)
  Step 2: Select Employees
  Step 3: Set Deadline & Rules
  Connected by horizontal line, inactive steps gray

Step 1 — Select Course (shown active):
- Search bar: "Search training courses..."
- Filter pills: All | Compliance | Soft Skills | 
  Technical | Onboarding
- Course card grid (2 columns):
  Each card: thumbnail, course title, duration, 
  category tag, "Select" button
  When selected: blue border + checkmark overlay
- Selected course preview panel on right:
  Course thumbnail, title, description, 
  module count, estimated hours

Step 2 preview (grayed out, shows next):
- "Select Employees or Teams"
- Team dropdown + individual employee checkboxes

Step 3 preview (grayed out):
- Due date picker
- Reminder settings (3 days before, 1 day before)
- Make mandatory toggle switch
- Notify via email toggle switch

Bottom bar (sticky):
- "Cancel" button left
- "Back" and "Next: Select Employees" buttons right
```

***

### 🎨 Prompt 5 - Employee Training Video Player (Corporate Style)

```
Design a Training Video Player page for a corporate page — this is where an employee 
watches their assigned training video.

Layout: Desktop, focused learning mode — dark video area left + structured curriculum sidebar right
Style: Distraction-free, professional, corporate — 
NOT a YouTube style, more like a focused enterprise 
learning environment. Similar to Coursera for Business 
or Udemy for Enterprise
Color scheme: Dark (#0F172A) for video area, 
white for sidebar, blue (#2563EB) for progress 
and active states, green checkmarks for completed lessons

Top bar (slim, dark):
- Back arrow + "Digital Marketing Fundamentals" breadcrumb
- Center: Course progress "Module 2 of 5 — Lesson 3 of 8"
- Right: "Mark as Complete" button + Help icon

Left section — Video player (70% width, dark bg):
- 16:9 video player, clean controls:
  Play/pause, seek bar (blue), time display, 
  volume, playback speed (1x dropdown), 
  CC toggle, fullscreen
- Below player: lesson title "Introduction to SEO Strategy"
- Assigned by: "HR Team — Mandatory Training"
- Due date badge: "Due: 25 March 2025" (amber if near due)
- Notes tab — employee can type personal notes 
  while watching

Right section — Training curriculum (30% width, white):
- "Your Training Plan" heading
- Overall progress bar: "Progress: 45%"
- Module accordion list:
  Module 1: Company Onboarding (all lessons completed, 
    green check)
  Module 2: Digital Marketing Basics (in progress, blue):
    Lesson 1 — done (green check + "5:32")
    Lesson 2 — done (green check + "7:14")
    Lesson 3 — ACTIVE (blue highlight, playing icon)
    Lesson 4 — locked
  Module 3–5: locked (gray, lock icon)
- Bottom of sidebar: 
  "Next: Lesson 4 — Keyword Research Basics"
  "Next Lesson" blue button
- Quiz reminder card: 
  "Module 2 Quiz unlocks after all lessons"
```

***

### 🎨 Prompt 6 - Employee Certificate & Achievement Page

```
Design a "My Certificates & Achievements" page for an employee in a corporate training page.

Layout: Desktop, clean profile-style page
Style: Achievement-focused, motivating, 
professional — like LinkedIn Certifications section 
but richer with badges and analytics
Color scheme: White background, gold (#F59E0B) for 
certificates and achievements, blue (#2563EB) for 
buttons, green (#16A34A) for completed badges

Top section — Employee summary card:
- Employee avatar (large, circular)
- Name: Priya Sharma
- Designation: Marketing Executive
- Department: Marketing Team
- Training Score: 87/100 (blue progress ring)
- Member since: June 2024

Tab navigation:
Certificates | Badges | Training History | Leaderboard

"Certificates" tab (active):
Grid of certificate cards (3 per row):
Each card:
- Gold border, certificate icon top center
- Course name: "Digital Marketing Fundamentals"
- Issued by: Bugle.in Learning Hub
- Date: 15 Feb 2025
- Score achieved: 91%
- Two action buttons: "Download PDF" | "Share on LinkedIn"

"Badges" section below certificates:
Row of achievement badge icons (circular, colored):
- "Fast Learner" (completed 3 courses in first month)
- "Quiz Master" (scored 90%+ on 5 quizzes)
- "Consistent Learner" (7-day streak)
- "Team Player" (helped 3 colleagues via Q&A)
Locked badges shown in gray with padlock overlay

Bottom section — Training Stats:
3 metric cards in a row:
- Total Training Hours: 48 hrs
- Courses Completed: 6 / 8
- Average Quiz Score: 87%
```

***

### 💡 How These Differ from Course-Selling Prompts

| Feature      | Course Selling Portal | Employee Training Portal   |
| ------------ | --------------------- | -------------------------- |
| Login        | Public signup         | SSO / company login        |
| Home         | Browse & buy courses  | Assigned training list     |
| Progress     | Personal choice       | Manager-assigned deadlines |
| Dashboard    | Student-led           | HR/Admin controlled        |
| Payments     | Razorpay checkout     | No payment — HR pays       |
| Reports      | Not needed            | Critical for HR            |
| Alerts       | None                  | Overdue training warnings  |
| Certificates | Personal achievement  | Official HR record         |

***

Want me to also write prompts for the **Onboarding Flow** (new employee first login experience), the **Mobile App version**, or the **Performance Review integration page**?

***

Clipped from https://claude.ai/chat/b876db62-b27a-49a9-b76e-18caa869f754
