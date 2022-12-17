import { api } from "../api"

export const fetchSingleBootcamp = async (id: string) => {
  try {
    const data = await api.get(id)
    return data
  } catch (error: any) {
    console.log(error.message)
  }
}