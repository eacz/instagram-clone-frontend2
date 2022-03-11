import axiosInstance from '../../shared/axiosInstance'

export interface signupBody {
  username: string
  password: string
  name: string
  email: string
}

export interface loginBody {
  username: string
  password: string
}

const authApi = {
  async signup(body: signupBody) {
    try {
      const res = await axiosInstance.post('/auth/signup', body)
      return res.data
    } catch (error) {
      throw error
    }
  },
  async login(body: loginBody) {
    try {
      const res = await axiosInstance.post('/auth/login', body)
      return res.data
    } catch (error) {
      throw error
    }
  },
}

export default authApi
