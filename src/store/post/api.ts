import axiosInstance from '../../shared/axiosInstance'
import { IPost } from '../../interfaces'

const postApi = {
  async getFeed() {
    try {
      //TODO configure limit and offset
      const res = await axiosInstance.get<IPost[]>('post/feed')
      return res.data
    } catch (error) {
      throw error
    }
  },
  async likePost(id: number) {
    try {
      const res = await axiosInstance.post<void>(`post/${id}/like`)
      return res
    } catch (error) {
      throw error
    }
  },
  async dislikePost(id: number) {
    try {
      const res = await axiosInstance.post<void>(`post/${id}/dislike`)
      return res
    } catch (error) {
      throw error
    }
  },
}

export default postApi
