import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerItensList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
export const Modal = styled.div`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  &.active {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 787px) {
    .overlay {
      padding: 16px; /* Espaçamento interno */
    }
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  max-height: 344px;
  width: 100%;
  height: 100%;
  background-color: ${cores.Salmao};
  position: relative;
  z-index: 1;
  header {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    h4 {
      font-family: 18px;
      font-weight: bold;
    }
    img {
      padding: 8px;
      cursor: pointer;
    }
  }
  tbody {
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 0 32px 32px 32px;
    gap: 18px;
    color: ${cores.branca};
    h2 {
      size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      margin-bottom: 16px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    img {
      object-fit: cover;
      height: 280px;
      width: 280px;

      @media (max-width: 768px) {
        height: 140px;
        width: 140px;
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`
export const Botao = styled.button`
  font-weight: 900;
  margin-top: 8px;
  padding: 4px;
  border: none;
  width: 218px;
  background-color: ${cores.salmaoClaro};
  color: ${cores.Salmao};
  cursor: pointer;
`
