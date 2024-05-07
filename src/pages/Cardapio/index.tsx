import { useParams } from 'react-router-dom'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import ItemList from '../../containers/ItemList'
import { ObjectStore } from '../Home'
import { useEffect, useState } from 'react'

const Cardapio = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<ObjectStore>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])
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
