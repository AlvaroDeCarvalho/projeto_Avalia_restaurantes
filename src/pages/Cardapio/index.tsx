import { useParams } from 'react-router-dom'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import ItemList from '../../containers/ItemList'
import { useGetRestauranteQuery } from '../../services/api'

const Cardapio = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id as string)

  if (!restaurante) {
    return <>Carregando...</>
  }
  return (
    <>
      <Header typeHeader="Cardapio" />
      <Banner restaurante={restaurante} />
      <ItemList restaurante={restaurante} />
    </>
  )
}
export default Cardapio
