import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

import { close } from '../../store/Reducer/cart'

type Props = {
  children: JSX.Element
}

const SideBarComponent = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeOverlay = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeOverlay} />
      <S.SideBar>{children}</S.SideBar>
    </S.CartContainer>
  )
}

export default SideBarComponent
