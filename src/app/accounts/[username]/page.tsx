import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  CogIcon,
  CompassIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
  MessageCircleHeart,
  Plus,
  Search,
  StarIcon,
  UserPlus,
} from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

interface Props {
  params: {
    username: string
  }
}

const Page: React.FC<Props> = ({ params: { username } }) => {
  console.log(username)
  return (
    <>
      <header className="sm:hidden py-4 border-b flex justify-between w-full">
        <CogIcon className="size-7" />
        <p>{username}</p>
        <UserPlus className="size-7" />
      </header>

      <div className="flex">
        <aside className={`h-screen hidden sm:block border-r w-44 py-8 px-5 duration-300 fixed`}>
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
        <div className="w-full ms-56 flex flex-col justify-center items-start px-3 gap-y-10 mt-10 sm:items-center">
          <div className="flex gap-x-4 sm:justify-center sm:items-center">
            <Avatar className="size-20 sm:size-56">
              <AvatarImage src="https://avatars.githubusercontent.com/u/4726921?v=4" alt="avatar" />
              <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold sm:text-2xl">{username}</p>
              <p className="text-muted-foreground">Software Engineer</p>
              <Button>
                <Link href="/accounts/edit">Edit Profile</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold sm:text-xl">{username}</h4>
            <p className="sm:text-lg">Hello, I am a software engineer.</p>
          </div>
          <div className="flex gap-x-2 sm:gap-x-4">
            <div className="flex gap-y-2 shrink-0 flex-col justify-center items-center">
              <Avatar className="border-2 size-12 border-primary sm:size-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <span className="text-lg">J</span>
                </AvatarFallback>
              </Avatar>
              <p className="text-xs text-center text-balance whitespace-nowrap overflow-hidden">👩‍🎤👩‍🎤👩‍🎤</p>
            </div>
            <div className="flex gap-y-2 shrink-0 flex-col justify-center items-center">
              <Avatar className="border-2 size-12 border-primary sm:size-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <span className="text-lg">J</span>
                </AvatarFallback>
              </Avatar>
              <p className="text-xs text-center text-balance whitespace-nowrap overflow-hidden">👩‍🎤👩‍🎤👩‍🎤</p>
            </div>
            <div className="flex gap-y-2 shrink-0 flex-col justify-center items-center">
              <Avatar className="border-2 size-12 border-primary sm:size-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <span className="text-lg">J</span>
                </AvatarFallback>
              </Avatar>
              <p className="text-xs text-center text-balance whitespace-nowrap overflow-hidden">👩‍🎤👩‍🎤👩‍🎤</p>
            </div>
          </div>
          <div className="border-t w-full py-4 max-w-7xl">
            <div className="grid grid-cols-3 gap-2">
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
              <div className="w-full h-40 bg-gray-200 sm:h-96  rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page
