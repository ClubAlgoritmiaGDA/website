'use client'

import { object, string } from 'zod'

export const loginFormSchema = object({
    email: string().min(2).max(50),
    password: string().min(8).max(50),
})

export const registerFormSchema = object({
    email: string().min(2).max(50),
    password: string().min(8).max(50),
    repeatPassword: string().min(8).max(50),
})
