'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// import axios from 'axios'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  href: string
}

const Form = ({ className }: Props) => {
  const schema = z.object({
    email: z.string().email('Invalid email address'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z
      .string()
      .min(8, 'Password must be at least 6 characters')
      // This regex requires at least one letter and one number and allows special characters
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@!#$%^&]{6,}$/,
        'Password must contain at least one letter and one number',
      ),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    mode: 'onSubmit',
  })

  type FormValues = z.infer<typeof schema>

  const onSubmit = async ({ username, email, password }: FormValues) => {
    console.log({ username, email, password })

    // const { data } = await axios.post(`/api/accounts/${href}`, {
    //   email,
    //   password,
    // })

    return
  }

  return (
    <div className={cn('grid gap-6', className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              username
            </Label>
            <Input
              id="username"
              placeholder="JohnDoe"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              {...register('username')}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="text"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              disabled={isLoading}
              {...register('password')}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div className="flex gap-x-2 w-full">
        <Button variant="outline" type="button" disabled={isLoading} className="w-full">
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{' '}
          GitHub
        </Button>
        <Button variant="outline" type="button" disabled={isLoading} className="w-full">
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{' '}
          Google
        </Button>
      </div>
    </div>
  )
}

export { Form }
