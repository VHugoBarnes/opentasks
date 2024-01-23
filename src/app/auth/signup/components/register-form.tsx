"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@shared/components/ui/form";
import { Button } from "@shared/components/ui/button";

const FormSchema = z.object({
  name: z.string().max(255, "The maximum length is 255 characters."),
  email: z.string().email("Not a valid email address."),
  password: z.string().min(8, { message: "The minimum length is 8 characters." }).max(255, { message: "The maximum length is 255 characters" }),
  repeatPassword: z.string().min(8, { message: "The minimum length is 8 characters." }).max(255, { message: "The maximum length is 255 characters" })
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      repeatPassword: ""
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {

  }

  return (
    <Form>

    </Form>
  );
};