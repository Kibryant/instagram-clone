import { Post } from './post'

type AccountType = 'public' | 'private'

interface Friend {
  id?: string
  username: string
  avatar: string
  email: string
}

interface User {
  id?: string
  avatar: string
  bio?: string
  username: string
  email: string
  password: string
  posts?: Post[]
  followers?: Friend[]
  following?: Friend[]
  verified?: boolean
  accountType?: AccountType
  savedPosts?: Post[]
  createdAt?: Date
  updatedAt?: Date
}

export type { User }
