'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/utils/supabase';
import { toast } from 'sonner';
import { NextRouter } from 'next/router';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useEditorStore } from '@/utils/stores';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
});

type FormFields = z.infer<typeof schema>;

type Props = {
  router: AppRouterInstance;
};

const Login = (props: Props) => {
  const toggleRefresh = useEditorStore((state) => state.toggleRefresh);
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await signUpUser(data).then(() => {
        toast.success('Login successfull');
        const searchParams = new URLSearchParams(window.location.search);
        const redirectUrl = searchParams.get('redirect');
        toggleRefresh();
        props.router.push(redirectUrl || '/');
      });
    } catch (error) {
      setError('root', {
        message: String(error),
      });
    }
  };

  const signUpUser = async (formData: FormFields) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      toast('Error', {
        description: error.message,
        action: {
          label: 'Ok',
          onClick: () => console.log('Undo'),
        },
      });
      throw error;
    } else if (data) {
      return data;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              {...register('email')}
              placeholder="john@doe.com"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              {...register('password')}
              placeholder="••••••••"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="pt-4 w-full">
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? 'Loading...' : 'Login'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
