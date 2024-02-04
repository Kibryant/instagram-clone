import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ChevronLeftIcon, HeartIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CompassIcon, HomeIcon, MessageCircleHeart, Plus, Search, StarIcon } from 'lucide-react'

const Page: React.FC = () => {
  return (
    <div className="sm:flex sm:justify-between">
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
      <div className="w-full flex sm:hidden border-b items-center">
        <Link href="/">
          <ChevronLeftIcon className="h-8 w-8 m-5 cursor-pointer" />
        </Link>
        <h3 className="font-bold text-primary ms-24 text-center">Edit Account</h3>
      </div>
      <div className="ms-52 flex flex-col w-full">
        <div className="flex justify-start items-center mt-10 px-2">
          <div className="bg-zinc-600/20 rounded-lg w-full flex justify-start gap-x-2 px-2 items-center py-6">
            <Avatar className="w-14 h-14">
              <AvatarImage src="https://randomuser.me/api/port" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-center">John Doe</h3>
              <p className="text-blue-500 text-center">edit your account details</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 mt-10 px-2">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea placeholder="Bio" id="bio" />
            <p className="text-sm text-muted-foreground">Your bio will be copied to the support team.</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                  <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Europe & Africa</SelectLabel>
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="cet">Central European Time (CET)</SelectItem>
                  <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                  <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                  <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                  <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                  <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                  <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                  <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Australia & Pacific</SelectLabel>
                  <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
                  <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
                  <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                  <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                  <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>South America</SelectLabel>
                  <SelectItem value="art">Argentina Time (ART)</SelectItem>
                  <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                  <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
