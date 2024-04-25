class ObjectItem {
  title: string
  discription: string
  image: string
  idItem: number

  constructor(
    title: string,
    discription: string,
    image: string,
    idItem: number
  ) {
    this.title = title
    this.discription = discription
    this.image = image
    this.idItem = idItem
  }
}
export default ObjectItem
