import { WaitlistForm } from '../molecules/WaitlistForm';

export function CtaSection() {
  return (
    <div className="flex items-center justify-between w-full py-28 px-20 bg-void flex-wrap gap-10">
      <div className="flex flex-col w-[640px] gap-5 shrink-0">
        <h2 className="text-[64px] leading-16 tracking-[-0.04em] font-bold text-mist m-0 font-sans">
          Your best week starts here.
        </h2>
        <p className="text-[18px] leading-7 text-muted m-0 font-sans">
          Join the waitlist and be first in when the beta opens. Weeks first; months and years are on the way.
        </p>
      </div>
      <div className="shrink-0">
        <WaitlistForm />
      </div>
    </div>
  );
}
