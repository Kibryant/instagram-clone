import { Footer } from '@/components/footer'
import { Post } from '@/components/post'
import { Section } from '@/components/section'
import { ModeToggle } from '@/components/theme'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollBar } from '@/components/ui/scroll-area'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CompassIcon, HeartIcon, HomeIcon, MenuIcon, MessageCircleHeart, Plus, Search, StarIcon } from 'lucide-react'
import Link from 'next/link'

const Page: React.FC = async () => {
  return (
    <>
      <header className="block sm:hidden">
        <div className="flex items-center justify-between p-4 border-b sm:">
          <div>
            <Link href="/">
              <h1 className="text-2xl font-semibold text-primary">Instagram</h1>
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <Link href="/chat">
              <MessageCircleHeart size={24} className="text-primary" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      <header className="hidden sm:flex justify-between w-screen absolute z-50">
        <aside className={`h-screen border-r w-44 py-8 px-5 duration-300 fixed`}>
          <div className="flex justify-center">
            <Link href="/">
              <h1 className="text-xl font-semibold text-primary cursor-pointer">Instagram</h1>
            </Link>
          </div>
          <nav className="w-full flex justify-center mt-10">
            <ul className="pt-6 flex flex-col gap-y-10 w-full items-start">
              <li className="flex justify-center gap-x-2 items-center">
                <HomeIcon className={`w-8 h-8`} />
                <span>Home</span>
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <Search />
                <span>Search</span>
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <CompassIcon className={`w-8 h-8`} />
                <span>Explore</span>
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <MessageCircleHeart className={`w-8 h-8`} />
                <span>Messages</span>
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <StarIcon className={`w-8 h-8`} />
                <span>Activity</span>
              </li>
              <li className="flex justify-center gap-x-2 items-center">
                <Plus className={`w-8 h-8`} />
                <span>Create</span>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center px-5 py-8 gap-y-3 items-center">
            <div className="flex justify-center gap-x-2 items-center">
              <MenuIcon />
              <p className="text-muted-foreground">More</p>
            </div>
            <div className="flex justify-center gap-x-2 items-center">
              <p className="text-muted-foreground text-xs">Made with</p>
              <HeartIcon className={`text-primary w-5 h-5`} />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">&copy;2023</p>
            </div>
          </div>
        </aside>
        <div className="w-full flex items-center justify-center py-8 gap-x-5">
          <ScrollArea className="w-[440px]">
            <div className="flex w-max space-x-4 py-4">
              {Array.from({ length: 100 }).map((_, index) => (
                <div className="flex gap-y-2 shrink-0 flex-col justify-center items-center" key={index}>
                  <Avatar key={index} className="border-2 border-primary">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                      <span className="text-lg">J</span>
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-center text-balance whitespace-nowrap overflow-hidden">Arthur Gustavo</p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </header>

      <div className="flex items-center gap-x-2 p-4 overflow-x-scroll w-full sm:hidden">
        {Array.from({ length: 100 }).map((_, index) => (
          <div className="flex flex-col justify-center items-center" key={index}>
            <Avatar key={index} className="border-2 border-primary">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <span className="text-lg">J</span>
              </AvatarFallback>
            </Avatar>
            <p className="text-xs text-center text-balance whitespace-nowrap overflow-hidden">Arthur Gustavo</p>
          </div>
        ))}
      </div>

      <main className="sm:relative w-screen">
        <div className="hidden absolute right-24 w-72 top-10 sm:flex justify-between items-center">
          <div className="flex gap-x-2 w-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                <span className="text-lg">J</span>
              </AvatarFallback>
            </Avatar>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col justify-start">
                <span className="text-sm">John Doe</span>
                <span className="text-xs text-muted-foreground">@jhondoe@gmail.com</span>
              </div>

              <Link href="/profile" className="text-primary text-sm">
                Edit
              </Link>
            </div>
          </div>
        </div>
        <Section className="space-y-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-32">
          <Post
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus neque quo atque nobis magni natus repellat velit veniam aperiam voluptates repudiandae iste exercitationem sapiente, enim quidem quas ipsum sequi!"
            photoUrl="https://github.com/shadcn.png"
            verified
          />
          <Post
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus neque quo atque nobis magni natus repellat velit veniam aperiam voluptates repudiandae iste exercitationem sapiente, enim quidem quas ipsum sequi!"
            photoUrl="https://github.com/shadcn.png"
          />
          <Post
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus neque quo atque nobis magni natus repellat velit veniam aperiam voluptates repudiandae iste exercitationem sapiente, enim quidem quas ipsum sequi!"
            photoUrl="https://github.com/shadcn.png"
          />
          <Post
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus neque quo atque nobis magni natus repellat velit veniam aperiam voluptates repudiandae iste exercitationem sapiente, enim quidem quas ipsum sequi!"
            photoUrl="https://github.com/shadcn.png"
            verified
          />
          <Post
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus neque quo atque nobis magni natus repellat velit veniam aperiam voluptates repudiandae iste exercitationem sapiente, enim quidem quas ipsum sequi!"
            photoUrl="https://github.com/shadcn.png"
          />
        </Section>
      </main>

      <Footer />
    </>
  )
}

export default Page
