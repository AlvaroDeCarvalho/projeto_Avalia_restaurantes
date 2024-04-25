import * as S from './styles'

type Props = {
  tipoComida?: string
  nomeRestaurante?: string
}

const Banner = ({ tipoComida, nomeRestaurante }: Props) => {
  return (
    <>
      <S.BannerContainer>
        <div className="container">
          <S.ElementContainer>
            <p>Italiana {tipoComida}</p>

            <h2>La Dolce Vita Trattoria {nomeRestaurante}</h2>
          </S.ElementContainer>
        </div>
      </S.BannerContainer>
    </>
  )
}
export default Banner
