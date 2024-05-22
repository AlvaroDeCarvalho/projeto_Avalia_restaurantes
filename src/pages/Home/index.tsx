import Header from '../../Components/Header'
import { useGetRestaurantesQuery } from '../../services/api'
import LojaList from '../../containers/LojaList'

export type ObjectStore = {
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
export const Home = () => {
  const { data: restaurante } = useGetRestaurantesQuery()

  if (!restaurante) {
    return <div>Carregando...</div>
  }
  return (
    <>
      <Header typeHeader="Home" />
      <LojaList restaurantes={restaurante} />
    </>
  )
}
