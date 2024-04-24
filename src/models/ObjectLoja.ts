class ObjetoLoja {
  title: string
  description: string
  avaliacao: number
  infos: string[]
  image: string
  tipoRestaurante: string
  id: number
  constructor(
    infos: string[],
    tipoRestaurante: string,
    title: string,
    description: string,
    avaliacao: number,
    image: string,
    id: number
  ) {
    this.title = title
    this.tipoRestaurante = tipoRestaurante
    this.description = description
    this.avaliacao = avaliacao
    this.image = image
    this.id = id
    if (infos[0] === 'em breve') {
      this.infos = ['em breve', tipoRestaurante]
    } else {
      this.infos = [tipoRestaurante]
    }
  }
}

export default ObjetoLoja
