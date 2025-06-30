'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Zod schema for email validation
type SubscribeFormValues = {
  email: string;
};

const subscribeFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

const SubscribeForm: FC = ({}) => {
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (values: SubscribeFormValues) => {
    // TODO: replace with your subscription API call
    console.log('Subscribing:', values.email);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-y-4 border-0">
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-cream rounded-none border-0 shadow-none" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-yellow rounded-none text-black">
          Subscribe
        </Button> */}
      </form>
    </Form>
  );
};

export default SubscribeForm;
