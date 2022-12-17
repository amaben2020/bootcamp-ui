export type TBootcamps = {
  bootcamps: TBootcamp[]
}

type TBootcamp = {
  _id: string,
  name: string,
  rating: number,
  description: string,
  price: number,
}

