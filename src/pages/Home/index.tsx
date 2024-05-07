import Header from '../../Components/Header'
import LojaList from '../../containers/LojaList'
import { useEffect, useState } from 'react'

export interface ObjectStore {
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
      preco: string
      nome: string
      id: number
      descricao: string
      porcao: string
    }
  ]
}
export const Home = () => {
  const [restaurante, setRestaurante] = useState<ObjectStore[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  return (
    <>
      <Header typeHeader="Home" />
      <LojaList restaurantes={restaurante} />
    </>
  )
}
