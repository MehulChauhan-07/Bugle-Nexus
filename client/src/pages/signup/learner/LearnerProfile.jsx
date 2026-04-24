import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSidebar from '../../../components/signup/OnboardingSidebar';

const LEARNER_STEPS = [
  { key: 'basic', label: 'Basic Info', sublabel: 'Name, Email, Password' },
  { key: 'profile', label: 'Profile Setup', sublabel: 'Interests & Goals' },
  { key: 'done', label: 'All Set!', sublabel: 'Access your dashboard' },
];

const INTERESTS = [
  { key: 'webdev', icon: 'code', label: 'Web Development', sub: 'React, Node, Cloud' },
  { key: 'data', icon: 'analytics', label: 'Data Science', sub: 'ML, Python, AI' },
  { key: 'design', icon: 'draw', label: 'UI/UX Design', sub: 'Figma, Motion' },
  { key: 'devops', icon: 'cloud', label: 'DevOps & Cloud', sub: 'AWS, Docker, CI/CD' },
  { key: 'cyber', icon: 'security', label: 'Cybersecurity', sub: 'Ethical Hacking, SIEM' },
  { key: 'pm', icon: 'task_alt', label: 'Product Management', sub: 'Roadmaps, Agile' },
];

const SKILL_LEVELS = [
  { key: 'beginner', label: 'Beginner', desc: 'Just getting started', icon: 'emoji_nature' },
  { key: 'intermediate', label: 'Intermediate', desc: '1–3 years experience', icon: 'trending_up' },
  { key: 'advanced', label: 'Advanced', desc: '3+ years, deep expertise', icon: 'military_tech' },
];

const GOALS = [
  { key: 'job', label: 'Land a new job', icon: 'work' },
  { key: 'promo', label: 'Get promoted', icon: 'leaderboard' },
  { key: 'freelance', label: 'Start freelancing', icon: 'laptop_mac' },
  { key: 'upskill', label: 'Upskill for projects', icon: 'build' },
  { key: 'cert', label: 'Earn certifications', icon: 'verified' },
  { key: 'startup', label: 'Build a startup', icon: 'rocket_launch' },
];

const LearnerProfile = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState(['webdev']);
  const [skillLevel, setSkillLevel] = useState('intermediate');
  const [selectedGoals, setSelectedGoals] = useState(['upskill']);

  const toggleInterest = (key) => {
    setSelectedInterests((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : prev.length < 3 ? [...prev, key] : prev
    );
  };

  const toggleGoal = (key) => {
    setSelectedGoals((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OnboardingSidebar steps={LEARNER_STEPS} currentStep={2} flowType="learner" />

      <div className="flex-1 ml-[280px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/signup/learner/basic')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back
            </button>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm text-gray-400">Profile Setup</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">Step 2 of 3</span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-2/3 rounded-full" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-8 py-10 max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-100">
              <span className="material-symbols-outlined text-base">tune</span>
              Learner Signup — Step 2
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Personalize your learning</h1>
            <p className="text-gray-500 text-sm">Help us tailor your curriculum to your goals and experience.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Interests */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Topics of Interest</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Choose up to 3 topics you'd like to master</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-medium">
                  {selectedInterests.length}/3 selected
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {INTERESTS.map((interest) => {
                  const isSelected = selectedInterests.includes(interest.key);
                  return (
                    <button
                      key={interest.key}
                      type="button"
                      onClick={() => toggleInterest(interest.key)}
                      className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {isSelected && (
                        <span
                          className="absolute top-3 right-3 material-symbols-outlined text-blue-600 text-base"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                      )}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        <span className={`material-symbols-outlined text-xl ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                          {interest.icon}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">{interest.label}</p>
                      <p className="text-xs text-gray-400">{interest.sub}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Skill Level */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Current Skill Level</h2>
              <div className="grid grid-cols-3 gap-3">
                {SKILL_LEVELS.map((level) => {
                  const isSelected = skillLevel === level.key;
                  return (
                    <button
                      key={level.key}
                      type="button"
                      onClick={() => setSkillLevel(level.key)}
                      className={`text-center py-5 px-3 rounded-xl border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl mb-2 block ${isSelected ? 'text-amber-600' : 'text-gray-400'}`}>
                        {level.icon}
                      </span>
                      <p className={`text-sm font-bold ${isSelected ? 'text-amber-700' : 'text-gray-700'}`}>{level.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{level.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Learning Goals</h2>
              <p className="text-xs text-gray-400 mb-5">Select all that apply</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {GOALS.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.key);
                  return (
                    <button
                      key={goal.key}
                      type="button"
                      onClick={() => toggleGoal(goal.key)}
                      className={`flex items-center gap-3 py-3 px-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-xl ${isSelected ? 'text-blue-600' : 'text-gray-400'}`}>
                        {goal.icon}
                      </span>
                      <span className={`text-sm font-medium ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                        {goal.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => navigate('/signup/learner/basic')}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md active:scale-[0.98]"
              >
                Complete Registration
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LearnerProfile;
