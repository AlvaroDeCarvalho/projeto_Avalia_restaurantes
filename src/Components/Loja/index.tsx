import Tag from '../Tag'
import * as S from './styles'

import estrela from '../../assents/image/estrela.png'
type Props = {
  image: string
  title: string
  description: string
  infos: string[]
  avaliacao: number
}

const Loja = ({ image, title, description, infos, avaliacao }: Props) => {
  return (
    <>
      <S.Card>
        <S.ComponentsInfo>
          {infos.map((info) => (
            <Tag typeOfTag="info" key={info}>
              {info}
            </Tag>
          ))}
        </S.ComponentsInfo>
        <S.LogoCard src={image} />

        <S.ContainerAvalicao>
          <S.Titulo>{title}</S.Titulo>
          <div>
            <p>{avaliacao}</p>
            <img src={estrela} />
          </div>
        </S.ContainerAvalicao>
        <S.Paragrafo>{description}</S.Paragrafo>
        <Tag typeOfTag="button" to="/cardapio">
          Saiba mais
        </Tag>
      </S.Card>
    </>
  )
}
export default Loja
