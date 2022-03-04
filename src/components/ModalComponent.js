import React from 'react'
import styled from 'styled-components'


const ModalComponent = () => {
  return (
    <ModalContainer>
        <h1>This is modal</h1>
    </ModalContainer>
  )
}

export default ModalComponent;

const ModalContainer = styled.div`
    width: 70%;
    height: 70%;
    background-color: #403F3E;
    display: flex;
    box-shadow: 8px 8px 8px 0px white;
    z-index: 100;

`