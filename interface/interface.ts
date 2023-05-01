interface Product {
  id: number
  image: string
  name: string
  price: number
  short_desc: string
}

interface Products extends Product {
  data: Product[]
}
