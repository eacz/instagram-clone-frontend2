export * from './stories'
export * from './posts'

export interface User {
  id: number
  username: string
  name: string
  email: string
  biography: null
  profilePicture: string
}

export interface ILink {
  text: string 
  to?: string 
}