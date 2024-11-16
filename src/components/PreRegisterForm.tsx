import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function PreRegisterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://hook.eu1.make.com/dzu600lqr0qhr342ay9gw37taq2tg6eb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          formType: 'pre-register',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      toast.success("You're on the list! We'll contact you soon with exclusive access.");
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow bg-white/10 text-white placeholder:text-gray-400 focus:bg-white/15"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Get Early Access'}
      </Button>
    </form>
  );
}