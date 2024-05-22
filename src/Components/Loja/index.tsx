import Tag from '../Tag'
import * as S from './styles'

import estrela from '../../assents/image/estrela.png'
type Props = {
  image: string
  title: string
  description: string
  tipo: string
  avaliacao: number
  id: number
  destacado: boolean
}

export const doneDescription = (description: string) => {
  if (description.length > 121) {
    return `${description.slice(0, 119)} ...`
  }
  return description
}
const Loja = ({
  image,
  title,
  description,
  tipo,
  avaliacao,
  id,
  destacado
}: Props) => {
  const getTagsInfos = () => {
    const tags: string[] = []

    if (destacado) tags.push('Em destaque')

    if (tipo) tags.push(tipo)

    return tags
  }

  return (
    <>
      <S.Card to={`/cardapio/${id}`}>
        <S.ComponentsInfo>
          {getTagsInfos().map((tag, index) => (
            <Tag key={index} typeOfTag="info">
              {tag}
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
        <S.Paragrafo>{doneDescription(description)}</S.Paragrafo>
        <Tag typeOfTag="button" to={`/cardapio/${id}`}>
          Saiba mais
        </Tag>
      </S.Card>
    </>
  )
}
export default Loja
