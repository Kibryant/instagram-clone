interface Post {
  id?: string
  userId: string
  title: string
  content: string
  image: string
  likes?: string[]
  comments?: string[]
  createdAt?: Date
  updatedAt?: Date
}

export type { Post }
