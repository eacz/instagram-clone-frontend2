import { IPost } from '../../interfaces'

export interface postState {
  feedPosts: IPost[],
  currentUserPosts: IPost[],
  loading: boolean,
  error: string | null
}

export type postActions = {}