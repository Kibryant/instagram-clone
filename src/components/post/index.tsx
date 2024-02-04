import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  AirplayIcon,
  CheckIcon,
  CircleEllipsis,
  HeartIcon,
  MessageCircleIcon,
  SaveIcon,
  SplitSquareVerticalIcon,
} from 'lucide-react'
import Image from 'next/image'
import { format } from 'date-fns'
import { Input } from '../ui/input'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

interface PostProps {
  body: string
  photoUrl: string
  verified?: boolean
}

const Post: React.FC<PostProps> = ({ verified, body, photoUrl }) => {
  return (
    <div className="w-full flex max-w-md gap-y-3 py-3 flex-col border-b">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-1 justify-center items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>

          <div className="flex justify-center items-center gap-x-1">
            <h4 className="text-xs font-semibold">John Doe</h4>
            {verified && <CheckIcon className="h-4 w-4 text-primary" />}
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleEllipsis className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Report</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Unfollow</DropdownMenuItem>
            <DropdownMenuItem>Add to favorites</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full max-w-md">
        <Image src={photoUrl} alt="Post" quality={100} width={500} height={600} className="rounded-lg" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-x-3">
          <button>
            <HeartIcon className="h-6 w-6" />
          </button>
          <button>
            <MessageCircleIcon className="h-6 w-6" />
          </button>
          <button>
            <AirplayIcon className="h-6 w-6 -rotate-45" />
          </button>
        </div>
        <div>
          <SaveIcon className="h-6 w-6" />
        </div>
      </div>
      <div>
        <p className="text-sm">Liked by...</p>
      </div>
      <div className="flex gap-x-1">
        <p className="font-bold text-xs">John Doe</p>
        <p className="text-xs">{body}</p>
      </div>
      <div className="space-y-4">
        <p className="text-xs text-muted-foreground">View all 10 comments</p>
        <Input className="border-none p-0 text-xs" type="text" placeholder="Add a comment..." />
        <p className="text-xs text-muted-foreground">{format(new Date(), "MMMM dd, yyyy 'at' hh:mm a")}</p>
      </div>
    </div>
  )
}

export { Post }
