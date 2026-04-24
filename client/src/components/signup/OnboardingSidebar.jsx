import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingSidebar = ({ steps, currentStep, flowType }) => {
  const navigate = useNavigate();

  const completedColor = 'text-primary border-primary bg-primary-fixed';
  const activeColor = 'text-blue-700 border-blue-600 bg-blue-50 font-semibold';
  const inactiveColor = 'text-gray-400 border-gray-200 bg-white';

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-gray-50 border-r border-gray-200 flex flex-col z-40">
      {/* Logo */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-100">
        <button onClick={() => navigate('/')} className="text-xl font-black text-blue-600 tracking-tight hover:opacity-80 transition-opacity">
          Bugle.in
        </button>
        <p className="text-xs text-gray-400 mt-1">Enterprise Learning Platform</p>
      </div>

      {/* Onboarding label */}
      <div className="px-8 pt-6 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-base">edit_note</span>
          </div>
          <span className="text-sm font-semibold text-on-surface">Onboarding</span>
        </div>
        <p className="text-xs text-gray-400 pl-9">
          {flowType === 'learner' ? 'Learner Registration' : 'Organization Setup'}
        </p>
      </div>

      {/* Steps */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {steps.map((step, index) => {
          const stepNum = index + 1;
          const isDone = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          const isInactive = stepNum > currentStep;

          return (
            <div
              key={step.key}
              className={`flex items-center gap-3 px-4 py-3 mx-0 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 border-l-4 border-blue-600'
                  : isDone
                  ? 'bg-green-50 border-l-4 border-green-500'
                  : 'border-l-4 border-transparent'
              }`}
            >
              {/* Step number / check */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border-2 ${
                  isDone
                    ? 'bg-green-500 border-green-500 text-white'
                    : isActive
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-200 text-gray-400'
                }`}
              >
                {isDone ? (
                  <span className="material-symbols-outlined text-sm">check</span>
                ) : (
                  stepNum
                )}
              </div>
              <div className="min-w-0">
                <p
                  className={`text-sm leading-tight ${
                    isActive
                      ? 'font-semibold text-blue-700'
                      : isDone
                      ? 'font-medium text-green-700'
                      : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </p>
                {step.sublabel && (
                  <p className={`text-xs mt-0.5 ${isActive ? 'text-blue-500' : 'text-gray-300'}`}>
                    {step.sublabel}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Progress bar */}
      <div className="px-8 pb-4">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>{Math.round(((currentStep - 1) / steps.length) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-4 pb-6 pt-2 border-t border-gray-100 space-y-2">
        <button className="w-full bg-white border border-blue-200 text-blue-600 text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base">help_outline</span>
          Get Help
        </button>
        <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-400 hover:text-blue-600 transition-colors cursor-pointer rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined text-base">policy</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </aside>
  );
};

export default OnboardingSidebar;
