import { useState } from 'react';
import { Badge } from '../atoms/Badge';
import { WaitlistForm } from '../molecules/WaitlistForm';
import { GoalPill } from '../molecules/GoalPill';
import { HabitRow } from '../molecules/HabitRow';
import { TaskRow } from '../molecules/TaskRow';
import { ProgressBar } from '../atoms/ProgressBar';

export function HeroSection() {
  const [mode, setMode] = useState<'after' | 'before'>('after');
  const [selectedGoal, setSelectedGoal] = useState(0);

  const goals = [
    { title: 'Reach 80 kg', current: '83.4 kg now · 3.4 kg to go', progress: 75, iconType: 'circle' as const, color: '#050B14' },
    { title: 'Launch a side project', current: '2 of 5 milestones done', progress: 40, iconType: 'rect' as const, color: '#4A86B5' },
    { title: 'Learn Spanish', current: 'Unit 4 · Day 18', progress: 60, iconType: 'triangle' as const, color: '#C9D6E2' },
    { title: 'Run a half marathon', current: '14 km long run completed', progress: 85, iconType: 'circle' as const, color: '#2EE6A6' },
  ];

  const currentGoalData = goals[selectedGoal];

  return (
    <div className="flex items-center justify-between w-full pt-8 pb-24 gap-10 px-20 flex-wrap">
      {/* Left Column */}
      <div className="flex flex-col w-[600px] max-w-full gap-8 shrink-0">
        <Badge variant="mint">THE WEEK-FIRST PRODUCTIVITY SYSTEM</Badge>
        <h1 className="text-[84px] leading-20 tracking-[-0.04em] font-bold text-mist m-0 whitespace-pre-wrap font-sans">
          Plan one week.<br />Get better.
        </h1>
        <p className="text-[20px] leading-7 text-muted w-[520px] max-w-full m-0 font-sans">
          Notion and Obsidian hand you a blank page. Better hands you a system: three goals, seven days, and the habits that actually move you forward.
        </p>
        <WaitlistForm />
        <div className="text-[14px] leading-[18px] text-muted font-sans">
          Free during the beta. One email when your spot opens.
        </div>
      </div>

      {/* Right Column: Demo Card */}
      <div className="flex w-[600px] max-w-full h-fit shrink-0 items-center">
        <div className="flex flex-col w-full p-6 rounded-[24px] gap-5 shrink-0 bg-abyss border border-steel">
          <div className="flex items-center justify-between">
            <Badge variant="muted">TRY IT ON A REAL GOAL</Badge>
            <div className="flex items-center p-1 rounded-full bg-void border border-steel">
              <div
                onClick={() => setMode('before')}
                className={`py-2 px-4.5 rounded-full cursor-pointer text-[14px] font-medium transition-all ${
                  mode === 'before' ? 'bg-mist text-void font-semibold' : 'text-muted'
                }`}
              >
                Before
              </div>
              <div
                onClick={() => setMode('after')}
                className={`py-2 px-4.5 rounded-full cursor-pointer text-[14px] font-medium transition-all ${
                  mode === 'after' ? 'bg-mint text-void font-semibold' : 'text-muted'
                }`}
              >
                After
              </div>
            </div>
          </div>

          {/* Goal Pills */}
          <div className="flex flex-wrap gap-2">
            {goals.map((goal, idx) => (
              <GoalPill
                key={goal.title}
                title={goal.title}
                active={selectedGoal === idx}
                onClick={() => setSelectedGoal(idx)}
                iconType={goal.iconType}
                color={goal.color}
              />
            ))}
          </div>

          {/* Card Inside */}
          {mode === 'after' ? (
            <div className="flex flex-col p-6 rounded-[16px] gap-4 bg-void border border-steel">
              <Badge variant="mint">WEEK 42 · GOAL {selectedGoal + 1}</Badge>
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-[30px] leading-[34px] tracking-[-0.02em] font-bold text-mist">
                    {currentGoalData.title}
                  </div>
                  <div className="text-[15px] leading-[18px] text-muted">
                    {currentGoalData.current}
                  </div>
                </div>
                <div className="text-[30px] tracking-[-0.02em] font-bold leading-9 text-mint">
                  {currentGoalData.progress}%
                </div>
              </div>
              <ProgressBar progress={currentGoalData.progress} />

              <div className="pt-1">
                <Badge variant="muted">HABITS</Badge>
              </div>
              <HabitRow title="Train 4×" completedDays={[true, false, true, false, true, true, false]} currentCount={3} totalCount={4} />
              <HabitRow title="Log meals" completedDays={[true, true, true, true, true, false, false]} currentCount={5} totalCount={7} />

              <div className="pt-1">
                <Badge variant="muted">TASKS</Badge>
              </div>
              <TaskRow title="Meal prep" day="Mon" completed={true} />
              <TaskRow title="Weigh in" day="Sun" completed={false} />
            </div>
          ) : (
            <div className="flex flex-col p-8 rounded-[16px] gap-4 bg-void border border-steel items-center justify-center min-h-[320px] text-center">
              <div className="text-[18px] font-semibold text-mist">Blank Page Syndrome</div>
              <div className="text-[15px] text-muted max-w-[380px] leading-[22px]">
                You open Notion, stare at an empty cursor, wonder what you planned last Tuesday, and eventually close the tab.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
