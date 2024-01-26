"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@shared/components/ui/form";
import { Button } from "@shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

import { loginApi } from "@/shared/http/api/auth.api";
import { ALink } from "@/shared/components/ui/typography/a-link";

const FormSchema = z.object({
  email: z.string().email("Not a valid email address."),
  password: z.string().min(8, { message: "The minimum length is 8 characters." }).max(255, { message: "The maximum length is 255 characters" }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const success = await loginApi(data.email, data.password);

    if (success) {
      window.location.replace("/home");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="opentasks@gmail.com" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  Minimum of 8 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
      <div>
        <ALink href="/auth/signup">
          Don&apos;t have an account? Create one
        </ALink>
      </div>
    </>
  );
};