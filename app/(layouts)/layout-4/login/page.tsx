import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="container max-w-md mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">Sign in</h1>
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="••••••••" required />
        </div>
        <div className="flex items-center justify-between">
          <Link href="/layout-4/register" className="text-sm text-primary hover:underline">
            Create an account
          </Link>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
}
