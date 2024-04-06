'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUp from './signUp';
import Login from './login';
import { useRouter } from 'next/navigation';

export function Auth() {
  const router = useRouter();
  return (
    <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Sign-Up</TabsTrigger>
        <TabsTrigger value="login">Log-In</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <SignUp router={router} />
      </TabsContent>
      <TabsContent value="login">
        <Login router={router} />
      </TabsContent>
    </Tabs>
  );
}
