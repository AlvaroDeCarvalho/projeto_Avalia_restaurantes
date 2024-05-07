import * as S from './styles'

import Loja from '../../Components/Loja/index'
import { ObjectStore } from '../../pages/Home'

type Props = {
  restaurantes: ObjectStore[]
}
const LojaList = ({ restaurantes }: Props) => {
  return (
    <S.ContainerList>
      <div className="container">
        <S.List>
          {restaurantes.map((item) => (
            <li key={item.id}>
              <Loja
                title={item.titulo}
                id={item.id}
                image={item.capa}
                avaliacao={item.avaliacao}
                description={item.descricao}
                tipo={item.tipo}
                destacado={item.destacado}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.ContainerList>
  )
}
export default LojaList
