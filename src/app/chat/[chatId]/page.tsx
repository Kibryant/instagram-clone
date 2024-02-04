'use client'

import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SmileIcon, FileAudio, CameraIcon, Heart, PhoneIcon, SaveIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'

const Page = () => {
  const messages = [
    {
      id: 1,
      content: 'Hello, World!',
      sender: {
        id: 1,
        name: 'Arthur Gustavo',
        avatar: 'https://github.com/ArthurGustavo.png',
      },
      createdAt: new Date(),
    },
    {
      id: 2,
      content: 'Hello, World!',
      sender: {
        id: 2,
        name: 'John Doe',
        avatar: 'https://github.com/shadcn.png',
      },
      createdAt: new Date(),
    },
    {
      id: 1,
      content: 'My name is Arthur Gustavo',
      sender: {
        id: 1,
        name: 'Arthur Gustavo',
        avatar: 'https://github.com/ArthurGustavo.png',
      },
      createdAt: new Date(),
    },
    {
      id: 2,
      content: 'Hello, World!',
      sender: {
        id: 2,
        name: 'John Doe',
        avatar: 'https://github.com/shadcn.png',
      },
      createdAt: new Date(),
    },
    {
      id: 1,
      content: 'My name is Arthur Gustavo',
      sender: {
        id: 1,
        name: 'Arthur Gustavo',
        avatar: 'https://github.com/ArthurGustavo.png',
      },
      createdAt: new Date(),
    },
    {
      id: 2,
      content: 'Hello, World!',
      sender: {
        id: 2,
        name: 'John Doe',
        avatar: 'https://github.com/shadcn.png',
      },
      createdAt: new Date(),
    },
  ]
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-row h-full">
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <div className="flex flex-row items-center justify-between p-3 border-b border-gray-200">
              <div className="flex flex-row items-center gap-x-4">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-full"
                    src="https://github.com/shadcn.png"
                    alt="Profile"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold">Chat</h1>
                  <p className="text-muted-foreground text-xs">Last seen 10 minutes ago</p>
                </div>
              </div>
              <div className="flex flex-row gap-x-2">
                <button className="flex items-center justify-center w-10 h-10 rounded-full border">
                  <PhoneIcon className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full border">
                  <CameraIcon className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full border">
                  <SaveIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <ScrollArea className="overflow-y-hidden">
              <div
                id="messages"
                className="flex h-full flex-1 flex-col gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              >
                {messages.map((message, index) => {
                  const isCurrentUser = message.sender.id === 1
                  const hasNextMessageFromSameUser = messages[index - 1]?.sender.id === messages[index].sender.id
                  const formatedDate = format(message.createdAt, 'HH:mm')
                  return (
                    <div className="chat-message" key={`${message.id}-${message.createdAt}`}>
                      <div
                        className={cn('flex items-end', {
                          'justify-end': isCurrentUser,
                          'justify-start': !isCurrentUser,
                        })}
                      >
                        <div
                          className={cn('flex flex-col space-y-2 text-base max-w-xs mx-2', {
                            'order-1 items-end': isCurrentUser,
                            'order-2 items-start': !isCurrentUser,
                          })}
                        >
                          <Avatar>
                            <AvatarImage src={message.sender.avatar} />
                            <AvatarFallback>J</AvatarFallback>
                          </Avatar>
                          <span
                            className={cn('px-4 text-xs py-2 rounded-lg inline-block', {
                              'bg-primary text-secondary-foreground': isCurrentUser,
                              'bg-indigo-600': !isCurrentUser,
                              'rounded-br-none': !hasNextMessageFromSameUser && isCurrentUser,
                              'rounded-bl-none': !hasNextMessageFromSameUser && !isCurrentUser,
                            })}
                          >
                            {message.content}{' '}
                          </span>
                          <span className="text-xs text-gray-500">{formatedDate}</span>
                        </div>

                        <div
                          className={cn('relative w-6 h-6', {
                            'order-2': isCurrentUser,
                            'order-1': !isCurrentUser,
                            invisible: hasNextMessageFromSameUser,
                          })}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>
            <form className="px-5 py-3 fixed bg-background - bottom-0 flex items-center">
              <div className="flex items-center space-x-3">
                <FileAudio className="rounded-full bg-transparent" />
                <CameraIcon className="rounded-full bg-transparent" />
                <Heart className="rounded-full bg-transparent" />
              </div>
              <Input className="rounded-3xl bg-transparent flex-grow mx-3" placeholder="Message..." />
              <div className="flex items-center space-x-3">
                <SmileIcon className="rounded-full bg-transparent" />
                <Button type="submit" className="rounded-3xl">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
