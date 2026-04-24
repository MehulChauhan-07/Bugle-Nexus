# page hierarchy

# 🧠 1. Final Architecture Zones

👉 Your system is divided into **3 main zones**



1\. Public Website (Marketing + Entry)

2\. App System (/app) → Employee + Admin

3\. Learning Platform (/learn) → LMS



***

# 🌐 2. PUBLIC SITE (Marketing + Entry)



/

├── Home

├── About

├── Services (Bugle services)

├── Courses Overview

├── Contact

├── Login

├── Signup

│ ├── Join as Employee

│ └── Join as Learner



👉 Pages count: **6–8**

***

# 🔐 3. AUTH FLOW (Shared)



/auth

├── Login

├── Signup (Role Selection)

├── Employee Registration

├── Learner Registration

├── Forgot Password



👉 Pages count: **4–5**

***

# 🏢 4. APP SYSTEM (/app) — INTERNAL

👉 Used by:

* &#x20;Employee 
* &#x20;Manager 
* &#x20;Admin 
* &#x20;Super Admin 

***

## 🧭 Core Routes



/app

├── Dashboard

├── Profile



***

## 👷 Employee Features



/app

├── Tasks

├── Attendance

├── Leaves

├── My Courses

├── Certificates



👉 Pages: **5**

***

## 👨‍💼 Manager / HR Features



/app

├── Team

├── Task Management

├── Leave Management

├── Course Assignment

├── Team Progress



👉 Pages: **5**

***

## 🧑‍💼 Admin Features



/app/admin

├── Employees

├── Departments

├── Courses Management

├── Reports

├── Analytics

├── Payments



👉 Pages: **6**

***

## 👑 Super Admin



/app/super-admin

├── Organizations

├── System Users

├── Global Analytics

├── Revenue

├── Settings



👉 Pages: **5**

***

👉 TOTAL /app pages ≈ **20–25 (role-based visibility)**

***

# 🎓 5. LMS PLATFORM (/learn)

👉 Used by:

* &#x20;Learners 
* &#x20;Employees (for learning) 

***

## 🌍 Public LMS Pages



/learn

├── Courses (All categories)

├── Category Page

├── Course Detail



👉 Pages: **3–4**

***

## 🎓 User Learning Pages



/learn

├── My Learning

├── Course Player

├── Quiz Page

├── Quiz Results

├── Certificates



👉 Pages: **5**

***

## 💳 Payment Flow



/learn

├── Checkout

├── Payment Success

├── Payment Failed

├── Payment History



👉 Pages: **3–4**

***

👉 TOTAL /learn pages ≈ **12–15**

***

# 📊 6. GRAND TOTAL (Realistic)

| Section      | Pages |
| ------------ | ----- |
| Public       | 6–8   |
| Auth         | 4–5   |
| App (/app)   | 20–25 |
| LMS (/learn) | 12–15 |

***

## 🎯 TOTAL:

👉 **\~45–55 pages (BUT many are reusable layouts)**

***

# 🧠 7. Important Insight (Don’t Panic)

👉 You are NOT building 50 different UIs

### Why?

* &#x20;Same layout reused 
* &#x20;Role-based visibility 
* &#x20;Dynamic content 

***

## Example:



/app/dashboard



👉 Same page for:

* &#x20;Employee 
* &#x20;Manager 
* &#x20;Admin 

👉 Just different data

***

# 🧩 8. Smart Grouping (What You Actually Build)

Instead of 50 pages, think:

## 🧱 Core Components

* &#x20;Dashboard Layout 
* &#x20;Table View (tasks, users, reports) 
* &#x20;Form Pages (create/edit) 
* &#x20;Course UI (shared) 
* &#x20;Player UI 
* &#x20;Auth pages 

👉 Real UI count: **\~15–20 components**

***

# 🔥 9. Final Clean Sitemap (Simplified)



/

├── Public Pages

├── Auth Pages



/app

├── Dashboard

├── Work (Tasks, Attendance, Leaves)

├── Learning (My Courses, Certificates)

├── Management (Team, Reports, Admin)



/learn

├── Browse Courses

├── Course Detail

├── Learning (Player, Quiz)

├── Payments

