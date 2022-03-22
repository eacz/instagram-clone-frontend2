export const setItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
    alert('Your browser has the storage disabled or reached the limit of storage')
  }
}

export const deleteItem = (key: string) => {
  localStorage.removeItem(key)
}

export const getItem = (key: string) => {
  return localStorage.getItem(key)
}
