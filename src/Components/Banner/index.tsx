import * as S from './styles'

type Props = {
  restaurante: ObjectStore
}

const Banner = ({ restaurante }: Props) => {
  return (
    <>
      <S.BannerContainer backgroundCover={restaurante.capa}>
        <div className="container">
          <S.ElementContainer>
            <p> {restaurante.tipo}</p>

            <h2> {restaurante.titulo}</h2>
          </S.ElementContainer>
        </div>
      </S.BannerContainer>
    </>
  )
}
export default Banner
