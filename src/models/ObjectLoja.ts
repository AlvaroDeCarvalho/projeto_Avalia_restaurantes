class ObjetoLoja {
  title: string
  description: string
  avaliacao: number
  infos: string[]
  image: string
  id: number
  constructor(
    title: string,
    description: string,
    avaliacao: number,
    image: string,
    id: number,
    infos: string[]
  ) {
    this.title = title
    this.description = description
    this.avaliacao = avaliacao
    this.image = image
    this.id = id
    this.infos = infos
  }
}

export default ObjetoLoja
