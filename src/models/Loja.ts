class Loja {
  titulo: string
  descricao: string
  avaliacao: number
  image: string
  id: number
  constructor(
    titulo: string,
    descricao: string,
    avaliacao: number,
    image: string,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.avaliacao = avaliacao
    this.image = image
    this.id = id
  }
}

export default Loja
