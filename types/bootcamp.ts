export type TBootcamps = {
  bootcamps: TBootcamp[]
}

export type TBootcampData = {
  data: TBootcamp
}

type TBootcamp = {
  _id: string,
  name: string,
  rating: number,
  description: string,
  price: number,
}

