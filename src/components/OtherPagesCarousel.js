import React from 'react'
import styled from "styled-components"


const OtherPagesCarousel = ({title}) => {

  return (
    <PageHeaderImageContainer>
      {title === "Partnerships" ?<h1 style={{fontSize: 35}}>{title}</h1> : <h1>{title}</h1>}
    </PageHeaderImageContainer>
  )
}

export default OtherPagesCarousel;

const PageHeaderImageContainer = styled.div`
    height: 20vh;
    background-color: #2D2E32;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 20vh;
    margin-top: 20px;
    /* border: 1px solid white; */

    /* background-image: url("/caro.jpg"); */
    background-image: linear-gradient(rgba(255, 183, 51, 0.4), rgba(0,0,0, 0.8)), url("/caro.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    /* object-fit: cover; */
    background-position: center;
    background-attachment: fixed;
    line-height: 1.5;

    @media (max-width: 768px) {
      background-attachment: scroll !important;
    }

    > h1 {
        color: #fff;
        font-size: 2.5rem;
        line-height: 1;
        font-weight: 800;
        margin-block-start: 0em;
        margin-block-end: 0em; 
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: 'Open Sans', sans-serif;
        padding-top: 50px;
        cursor: pointer;
        white-space: nowrap;
        

        &:hover{
            border-bottom: 5px solid #FFB733;;
            /* font-size: 70px */
        }
    }
`