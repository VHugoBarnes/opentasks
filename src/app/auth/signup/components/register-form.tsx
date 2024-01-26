"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@shared/components/ui/form";
import { Button } from "@shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

import { registerApi } from "@/shared/http/api";
import { ALink } from "@/shared/components/ui/typography/a-link";

const FormSchema = z.object({
  name: z.string().min(2, "The minimum length is 2 characters."),
  username: z.string().min(2, "The minimum length is 2 characters."),
  email: z.string().email("Not a valid email address."),
  password: z.string().min(8, { message: "The minimum length is 8 characters." }).max(255, { message: "The maximum length is 255 characters" }),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      name: ""
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("HELLO");
    const success = await registerApi({
      email: data.email,
      name: data.name,
      username: data.username,
      password: data.password
    });

    console.log({ success });

    if (success.ok) {
      window.location.replace("/home");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
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

          {/* Password */}
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
          <Button type="submit">Create Account</Button>
        </form>
      </Form>
      <div>
        <ALink href="/auth/login">
          Already have an account? Log in
        </ALink>
      </div>
    </>
  );
};