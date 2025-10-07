import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="container max-w-md mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">Create account</h1>
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="••••••••" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" name="confirm" type="password" placeholder="••••••••" required />
        </div>
        <div className="flex items-center justify-between">
          <Link href="/layout-4/login" className="text-sm text-primary hover:underline">
            Already have an account?
          </Link>
          <Button type="submit">Create account</Button>
        </div>
      </form>
    </div>
  );
}
