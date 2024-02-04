import { DragDrop } from '@/components/drag-drop'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { HomeIcon, MessageCircleHeart, Plus, SearchIcon } from 'lucide-react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="fixed bg-inherit w-full bottom-0 left-0 border-t p-4 sm:hidden">
      <nav className="flex justify-between">
        <Link href="/home">
          <HomeIcon size={24} className="text-primary" />
        </Link>
        <Link href="/search">
          <SearchIcon size={24} className="text-primary" />
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Plus size={24} className="text-primary" />
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add a new post</DialogTitle>
            <DialogDescription>What&apos;s on your mind?</DialogDescription>
            <div>
              <DragDrop />
            </div>{' '}
          </DialogContent>
        </Dialog>

        <Link href="/shop">
          <MessageCircleHeart size={24} className="text-primary" />
        </Link>
        <Link href="/profile">
          <Avatar className="border-2 border-primary w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <span className="text-lg">J</span>
            </AvatarFallback>
          </Avatar>
        </Link>
      </nav>
    </footer>
  )
}

export { Footer }
