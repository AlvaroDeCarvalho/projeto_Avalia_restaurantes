declare type ObjectStore = {
  id: number
  destacado: boolean
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      nome: string
      id: number
      descricao: string
      porcao: string
    }
  ]
}
