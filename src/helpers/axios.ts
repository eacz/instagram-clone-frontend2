import axiosInstance from '../shared/axiosInstance';

export const setHeader = (key: string, header: string) => {
  axiosInstance.defaults.headers.common[key] = header
}

export const deleteHeader = (key: string) => {
  delete axiosInstance.defaults.headers.common[key]
}
