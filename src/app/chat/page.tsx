import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Circle } from 'lucide-react'
import Link from 'next/link'

const Page: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-3 w-full max-w-7xl px-3 mt-3">
      {Array.from({ length: 100 }).map((_, index) => (
        <Link href="chat/1" className="flex w-full items-end" key={index}>
          <Avatar key={index} className="border-2 border-primary w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <span className="text-lg">J</span>
            </AvatarFallback>
          </Avatar>
          <div className="ms-2 w-full">
            <p className="text-xs text-balance whitespace-nowrap overflow-hidden">Arthur Gustavo</p>
            <div className="flex w-full justify-between items-center">
              <p className="text-xs font-bold">
                Hello, World!
                <span className="ms-2 text-muted-foreground">1hr</span>
              </p>
              <Circle size={12} className="text-primary" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Page
