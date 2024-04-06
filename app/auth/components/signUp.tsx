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

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // This ensures the error is attached to confirmPassword
  });

type FormFields = z.infer<typeof schema>;

type Props = {
  router: AppRouterInstance;
};

const SignUp = (props: Props) => {
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
        toast.success('Signup successfull');
        const searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams);
        const redirectUrl = searchParams.get('redirect');
        props.router.push(redirectUrl || '/');
      });
    } catch (error) {
      setError('root', {
        message: String(error),
      });
    }
  };

  const signUpUser = async (formData: FormFields) => {
    let { data, error } = await supabase.auth.signUp({
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
        <CardTitle className="text-center">Sign Up</CardTitle>
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
          <div className="space-y-1">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              type="password"
              id="confirm"
              {...register('confirmPassword')}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <div className="text-red-500">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
          <div className="pt-4 w-full">
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? 'Loading...' : 'Sign Up'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUp;
