import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const COURSES = [
  {
    title: 'Full-Stack Web Dev Bootcamp',
    category: 'Development',
    lessons: 42,
    instructor: 'Dr. David Miller',
    students: 1245,
    enrollment: 85,
    price: '$129.00',
    status: 'Published',
    statusClass: 'bg-green-50 text-green-700 border-green-200',
    dotClass: 'bg-green-600',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOnWTobMc9fNEfCu89eCB_auf4O5LCcXK9HY_NGxLSxyVvpFRn6J5hkTy05puhOYIZlxBCeW-JNHYjnnqq1IWTxmPZ_yh8Xhg-9oeuJHETJmGvVUq3sUrd6bF_We50GYEmRxzZzWZsXPKUxRQ8g0fv_-xLENJt8_BTpLKNfSCA3Vnqu0CjWwSYjAXfXU50TbseYezU56gQWl5xJFIVH8RKCptxVyy2oXnPGoShaVFBBK3pyvMrPh_b0pYd34j-qmgek6vmZuRXb-LY',
  },
  {
    title: 'Advanced Growth Marketing',
    category: 'Marketing',
    lessons: 18,
    instructor: 'Sarah Jenkins',
    students: 412,
    enrollment: 30,
    price: '$79.00',
    status: 'Draft',
    statusClass: 'bg-slate-100 text-slate-600 border-slate-200',
    dotClass: 'bg-slate-400',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGKgK0yGviQQPTjuVq1_E5odPYihYdmrWi2Dh7Ewt-a98qeamcQ0nxWF4QZYVxfN2hgp47lCLlFEfE1OC1KYbAest0p1xklCKkVGavvXS6GsvSnjHb4LGx_JCAOssX2NHJdnoSYEmY2Fkn5LvFrS56m0MwGbx_tRm7IwyMMKf_84KV50PfIQPzSt2ijPwXPFIR-D_MUR5gtaenn1d6DeDGW0HFzTuNV-NFhjQcbFkd0eFEf7oETEJwBu-xtxuwvCgvhVrKrPTKwXRu',
  },
  {
    title: 'Mastering Figma & UI Design',
    category: 'Design',
    lessons: 24,
    instructor: 'Elena Rodriguez',
    students: 890,
    enrollment: 65,
    price: '$99.00',
    status: 'Published',
    statusClass: 'bg-green-50 text-green-700 border-green-200',
    dotClass: 'bg-green-600',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNpg-6htNaH9eaDPi_5qgYv8M4to7MAnLbgKxC8FSCueX3LIdLAxHRUiAjyHKTR6j49MwgEuxx5wOJ2YfuohBW6tpzOSwJg5jyqZm4qs_C8OT4Bm_RdNAOVVRpBC6v8ptqqEh9Q3vP1O5pDWthPw_6maGojDChibUJNZuNUVpC_qfgllcn7rblW5IRpsGVO_LTvEMj-c35_0xfXm2m3K2SjmEATYrSqln0dPadhuyE6sy6GGFuS8wJBRw_p8qS33I05ls50Dj5-nCm',
  },
  {
    title: 'Python for Data Analysis',
    category: 'Development',
    lessons: 56,
    instructor: 'Michael Chen',
    students: 2105,
    enrollment: 95,
    price: '$149.00',
    status: 'Archived',
    statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    dotClass: 'bg-amber-500',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYLwLdC5YBD76WRVcaEnuC7t6uv_3B-yZVYGgeDcmOzCd4nNuxZPGbbBBva_kTD0VossMNiFDzz3_1dkGu34fDpUrAXfhya6ojduWSwCPIgajCR6RFBglZcDrDqFudj4JvyMdGLYH6IGcA68LGciLuN0ajluSl87kEjaOBh_206SlQzUOFQ0jspyrKiLMjefn4QLds-UnW2WGkHMCzYZlY9nSk9s6s9PzUSD4tT1oN2FLVcbcy48bZUSi7Sea9g5m4UuSolYjMOrj',
  },
];

const CourseManagement = () => {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selected, setSelected] = useState({});

  const toggleAll = () => {
    const newVal = !selectedAll;
    setSelectedAll(newVal);
    const newSelected = {};
    COURSES.forEach((c) => { newSelected[c.title] = newVal; });
    setSelected(newSelected);
  };

  const toggleOne = (title) => {
    setSelected((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden min-h-screen">
      {/* Side Navigation */}
      <aside className="flex flex-col h-screen border-r border-slate-200/50 bg-slate-50 w-64 fixed left-0 top-0 overflow-y-auto z-50">
        <div className="p-6">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-blue-900">Bugle.in</Link>
          <p className="text-xs font-medium text-on-primary-container opacity-70">Admin Console</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg group">
            <span className="material-symbols-outlined group-hover:text-blue-600">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/courses" className="flex items-center gap-3 px-4 py-3 text-blue-700 font-bold border-r-4 border-blue-600 bg-blue-50/50 rounded-l-lg">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span>Courses</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg group">
            <span className="material-symbols-outlined group-hover:text-blue-600">group</span>
            <span>Users</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg group">
            <span className="material-symbols-outlined group-hover:text-blue-600">analytics</span>
            <span>Analytics</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg group">
            <span className="material-symbols-outlined group-hover:text-blue-600">payments</span>
            <span>Revenue</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg group">
            <span className="material-symbols-outlined group-hover:text-blue-600">settings</span>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200/50">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-sm">A</div>
            <div>
              <p className="text-sm font-bold text-on-surface">Alex Rivera</p>
              <p className="text-xs text-on-surface-variant">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="flex justify-between items-center px-8 h-full">
          <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline-variant outline-none ml-2"
              placeholder="Search for courses, users, or reports..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:bg-slate-50 p-2 rounded-full transition-all text-slate-500 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
            <button className="hover:bg-slate-50 p-2 rounded-full transition-all text-slate-500">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm cursor-pointer">A</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
              <span>Admin</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="font-medium text-secondary">Course Catalog</span>
            </nav>
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Course Catalog</h2>
            <p className="text-on-surface-variant max-w-lg">
              Manage, curate, and monitor educational content across the platform from one central dashboard.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary-container text-white font-bold rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all">
            <span className="material-symbols-outlined">add</span>
            Add New Course
          </button>
        </div>

        {/* Filters & Bulk Actions */}
        <div className="bg-surface-container-low rounded-2xl p-6 mb-8 flex flex-col lg:flex-row gap-6 items-center justify-between border border-white/50">
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant px-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              FILTERS
            </div>
            <select className="bg-surface-container-lowest border-none rounded-lg text-sm px-4 py-2 pr-10 focus:ring-2 focus:ring-secondary/20 cursor-pointer shadow-sm outline-none">
              <option>All Categories</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Design</option>
              <option>Business</option>
            </select>
            <select className="bg-surface-container-lowest border-none rounded-lg text-sm px-4 py-2 pr-10 focus:ring-2 focus:ring-secondary/20 cursor-pointer shadow-sm outline-none">
              <option>Any Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end border-l lg:border-l border-outline-variant/30 pl-0 lg:pl-6">
            <span className="text-sm font-medium text-on-surface-variant">Bulk Actions:</span>
            <button className="px-4 py-2 text-sm font-semibold text-error hover:bg-error/5 rounded-lg transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">delete</span>
              Delete Selected
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-secondary hover:bg-secondary/5 rounded-lg transition-colors flex items-center gap-2 border border-secondary/10">
              <span className="material-symbols-outlined text-sm">edit_note</span>
              Change Status
            </button>
          </div>
        </div>

        {/* Course Table */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="py-4 px-6 w-10">
                    <input
                      type="checkbox"
                      className="rounded text-secondary focus:ring-secondary/20 bg-surface-container-lowest border-outline-variant"
                      checked={selectedAll}
                      onChange={toggleAll}
                    />
                  </th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Course Details</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Instructor</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Enrollment</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Price</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Status</th>
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {COURSES.map((course) => (
                  <tr key={course.title} className="group hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        className="rounded text-secondary focus:ring-secondary/20 bg-surface-container-lowest border-outline-variant"
                        checked={!!selected[course.title]}
                        onChange={() => toggleOne(course.title)}
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img alt={course.title} className="object-cover w-full h-full" src={course.thumb} />
                        </div>
                        <div>
                          <p className="font-bold text-on-surface leading-tight mb-0.5">{course.title}</p>
                          <p className="text-xs text-on-surface-variant">{course.category} • {course.lessons} Lessons</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">
                          {course.instructor.charAt(course.instructor.lastIndexOf(' ') + 1)}
                        </div>
                        <span className="text-sm font-medium">{course.instructor}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold">{course.students.toLocaleString()} Students</span>
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${course.enrollment}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-bold">{course.price}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${course.statusClass}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${course.dotClass}`}></span>
                        {course.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-2 hover:bg-surface-container rounded-full transition-all text-on-surface-variant">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 flex items-center justify-between border-t border-surface-container-low">
            <p className="text-sm text-on-surface-variant">
              Showing <span className="font-bold text-on-surface">1-4</span> of <span className="font-bold text-on-surface">42</span> courses
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-surface-container-low text-outline-variant disabled:opacity-30" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded-lg bg-secondary text-white text-sm font-bold">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-low text-on-surface-variant text-sm font-medium">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-low text-on-surface-variant text-sm font-medium">3</button>
              <span className="px-1 text-outline-variant">...</span>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-low text-on-surface-variant text-sm font-medium">10</button>
              <button className="p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseManagement;
