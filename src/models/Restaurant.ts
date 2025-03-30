class Restaurant {
  category: string[]
  description: string
  image: string
  title: string
  id: number
  score: number

  constructor(
    category: string[],
    description: string,
    image: string,
    title: string,
    id: number,
    score: number
  ) {
    this.id = id
    this.description = description
    this.category = category
    this.image = image
    this.title = title
    this.score = score
  }
}

export default Restaurant
