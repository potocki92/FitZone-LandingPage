'use server'

import { User } from '@supabase/supabase-js'
import { createClient } from './services/server';

interface FormProps {
  email: string;
  password: string;
}

type PromiseLoginType = {
  user: User | null,
  token: string | null
}
export async function login(data: FormProps): Promise<PromiseLoginType> {
  const supabase = await createClient()
  const { email, password } = data;

  if (!email || !password) {
    throw new Error("Invalid form data");
  }

  const { data: signInData, error } = await supabase.auth.signInWithPassword({ 
    email, 
    password
  })

  if (error || !signInData.user) {
    console.error("Login error:", error?.message);
    throw new Error(error?.message || "Login failed");
  } 

  if (!signInData.session.access_token) {
    console.error("Access token is required for login");
    throw new Error("Access token is required for login");
  }

  const token = signInData.session.access_token
  const user = signInData.user
  return { user, token};
}

export async function signup(data: FormProps): Promise<User | null> {
  const supabase = await createClient()

  if (!data.email || !data.password) {
    throw new Error("Invalid form data");
  }

  const { data: signUpData, error } = await supabase.auth.signUp(data);

  if (error || !signUpData.user) {
    console.error("Signup error:", error?.message);
    throw new Error(error?.message || "Signup failed");
  }

  return signUpData.user;
}