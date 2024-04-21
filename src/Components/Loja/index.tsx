import Tag from '../Tag'
import * as S from './styles'
type Props = {
  image: string
  title: string
  description: string
  infos: string[]
}

const Loja = ({ image, title, description, infos }: Props) => {
  return (
    <>
      <S.Card>
        <S.ComponentsInfo>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.ComponentsInfo>
        <img src={image} />
        <S.Titulo>{title}</S.Titulo>
        <S.Paragrafo>{description}</S.Paragrafo>
      </S.Card>
    </>
  )
}
export default Loja
