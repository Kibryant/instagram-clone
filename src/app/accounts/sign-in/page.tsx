import { Section } from '@/components/section'
import { ModeToggle } from '@/components/theme'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

const SignUpForm = () => {
  return (
    <>
      <header className="block">
        <div className="flex items-center justify-between p-4 border-b sm:">
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">Instagram</h1>
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="min-h-[90vh] flex items-center justify-center">
        <Section className="flex justify-center">
          <Card className="w-full max-w-xl">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Sign In to see photos and videos from your friends.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="mb-4">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="Your username" name="username" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Seu email" name="email" />
                </div>
                <div className="mb-6">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Sua senha" name="password" />
                </div>
                <div className="flex items-center justify-between">
                  <Button className="w-full" type="submit">
                    Sign In
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Already have an account?
                <Button variant="link">
                  <Link href="/accounts/login">Sign In</Link>
                </Button>
              </CardDescription>
            </CardFooter>
          </Card>
        </Section>
      </main>
    </>
  )
}

export default SignUpForm
