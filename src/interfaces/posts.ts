import { User } from '.'

export interface IPost {
  id: number
  images: string[]
  savedCount: number
  description: null | string
  location: null | string
  hideLikesAndViews: boolean
  canBeCommented: boolean
  createdAt: string
  updatedAt: string
  user: User
  likes: User[]
}
