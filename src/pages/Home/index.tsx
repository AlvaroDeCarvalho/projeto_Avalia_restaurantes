import Header from '../../Components/Header'
import { useGetRestaurantesQuery } from '../../services/api'
import LojaList from '../../containers/LojaList'

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
