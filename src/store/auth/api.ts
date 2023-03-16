import axiosInstance from '../../shared/axiosInstance'
import { loginResponse } from '../../interfaces/responses';
import { getItem } from '../../helpers';

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
      const res = await axiosInstance.post<loginResponse>('/auth/login', body)
      return res.data
    } catch (error) {
      throw error
    }
  },
  async checkToken(){
    const token = getItem('token-ig')
    try {
      if(!token) throw new Error('invalid token')
      const res = await axiosInstance.post<loginResponse>('/auth/renew-token', {token})
      return res.data
    } catch (error) {
      throw error;
    }
  }
}

export default authApi
