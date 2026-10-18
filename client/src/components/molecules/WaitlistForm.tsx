import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-[520px] max-w-full p-2 rounded-full gap-2 bg-abyss border-[1.5px] border-steel"
    >
      {submitted ? (
        <div className="py-3 px-5 text-[16px] text-mint font-semibold w-full text-center">
          You&apos;re on the list! We&apos;ll email you when your spot opens.
        </div>
      ) : (
        <>
          <Input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="mint" className="py-4 px-7">
            Get early access
          </Button>
        </>
      )}
    </form>
  );
}
