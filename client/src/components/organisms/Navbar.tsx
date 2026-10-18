import { Logo } from '../atoms/Logo';
import { NavLinks } from '../molecules/NavLinks';
import { Button } from '../atoms/Button';

export function Navbar() {
  return (
    <div className="flex items-center justify-between w-full py-7 px-20">
      <Logo />
      <div className="flex items-center gap-10">
        <NavLinks />
        <Button variant="mint" className="py-3 px-5.5 text-[15px]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Join the waitlist
        </Button>
      </div>
    </div>
  );
}
