import styled from 'styled-components'

export const ContainerItensList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;
  list-style: none;
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
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-family: 18px;
      font-weight: bold;
    }
    img {
      cursor: pointer;
    }
  }
  > img {
    width: 100%;
  }
  img {
    display: block;
    max-width: 100%;
  }
`
