import { User } from '.'

export interface IPost {
  id: number
  images: string[]
  savedCount: number
  description: undefined | string
  location: undefined | string
  hideLikesAndViews: boolean
  canBeCommented: boolean
  createdAt: string
  updatedAt: string
  user: User
  likes: User[]
}
