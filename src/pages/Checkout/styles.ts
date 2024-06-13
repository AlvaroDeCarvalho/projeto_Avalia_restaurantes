import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assents/image/lixeira-card.png'

export const itemCarrinho = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: ${cores.salmaoClaro};
  color: ${cores.Salmao};
  padding: 12px 8px;
  img {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      margin: 8px 0px;
    }
  }
`

export const Delete = styled.button`
  position: absolute;
  background-image: url(${lixeira});
  background-size: cover;
  width: 16px;
  height: 16px;
  border: none;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`

export const FinalContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  color: ${cores.branca};
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0 8px 0;
  }

  input {
    height: 32px;
    background-color: ${cores.salmaoClaro};
    border: 1px solid ${cores.salmaoClaro};
  }
  small {
    font-weight: 800;
    color: ${cores.backgroundColor};
  }
`

export const FormContainer = styled.form`
  display: block;
  color: ${cores.salmaoClaro};
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .adressContainer {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }

  .cardNumberContainer {
    display: grid;
    gap: 32px;
    grid-template-columns: 70% 20%;
  }
  .cardContainerDate {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
  }
`

export const BehaviorContainer = styled.div`
  color: ${cores.salmaoClaro};
  display: block;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 16px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 40px;
`
