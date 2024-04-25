import ItemLoja from '../../Components/ItemLoja'
import * as S from './styles'
import ObjectItem from '../../models/ObjectItem'
import PizzaImg from '../../assents/image/imagemPizza.png'

const arrayItens: ObjectItem[] = [
  new ObjectItem(
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    PizzaImg,
    1
  ),
  new ObjectItem(
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    PizzaImg,
    2
  ),
  new ObjectItem(
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    PizzaImg,
    3
  ),
  new ObjectItem(
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    PizzaImg,
    4
  ),
  new ObjectItem(
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    PizzaImg,
    5
  ),
  new ObjectItem(
    'Pizza Marguerita',
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    PizzaImg,
    6
  )
]

const ItemList = () => {
  return (
    <>
      <div className="container">
        <S.ContainerItensList>
          {arrayItens.map(({ title, image, discription, idItem }) => (
            <ItemLoja
              key={idItem}
              title={title}
              imagem={image}
              description={discription}
            />
          ))}
        </S.ContainerItensList>
      </div>
    </>
  )
}

export default ItemList
