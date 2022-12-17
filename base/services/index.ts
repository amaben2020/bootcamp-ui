import { api } from "../api"

export const fetchSingleBootcamp = async (path: string, id: string) => {
  try {
    const data = await api.get(`/${path}/${id}`)
    return data
  } catch (error: any) {
    console.log(error.message)
  }
}

export const fetchAllBootcamps = async (path: string) => {
  try {
    const data = await api.get(`/${path}`)
    return data
  } catch (error: any) {
    console.log(error.message)
  }
}