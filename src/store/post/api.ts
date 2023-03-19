import axiosInstance from '../../shared/axiosInstance'
import { IPost } from '../../interfaces';


const postApi = {
  async getFeed(){
    try {
      //TODO configure limit and offset 
      const res = await axiosInstance.get<IPost[]>('post/feed')
      return res.data 
    } catch (error) {
      throw error
    }
  },
}

export default postApi
