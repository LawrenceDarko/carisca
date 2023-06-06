import React from 'react'
import styled from 'styled-components'

const MediaComponent = () => {
  return (
    <MediaItemContainer>
        <MediaImageHolder>
            <img src="/caro.jpg" alt="media" width={550} height={380} />
        </MediaImageHolder>
        <MediaTextContainer>
            <Heading>
                <h1>Media</h1>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a, accusamus fugit aspernatur nobis nulla iure, asperiores, pariatur voluptatum at aperiam praesentium! Et corporis velit laborum eos molestias repellat accusamus?</p>
            <LearnMoreContainer>
                <LearnMoreButton>Learn More</LearnMoreButton>
            </LearnMoreContainer>
        </MediaTextContainer>
    </MediaItemContainer>
  )
}

export default MediaComponent;

const MediaItemContainer = styled.div`
    width: auto;
    height: auto;
    background-color: #2D2E32;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    /* border: 2px solid white; */
    /* margin-bottom: 100px; */

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 10px;
        flex-direction: column;
        height: auto;
    }

    
`
const MediaTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    /* border: 1px solid black; */
    flex: 1;
    /* scale box */
    


    > p {
        font-size: 1.2rem;
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        color: #fff;
        padding-top: 20px;

    }

    /* @media (max-width: 768px) {
        padding-left: 0px;
        padding-right: 0px;

    } */

    
`
const Heading = styled.div`
    border-bottom: 2px solid white;

    > h1 {
        font-size: 40px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
        color: white;
        margin-block-end: 0.3em;
        /* border-bottom: 1px solid white; */
    }
`

const LearnMoreContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid white; */
    width: 200px;

`

const LearnMoreButton = styled.button`
    background-color: #2D2E32;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #2D2E32;
        border: 1px solid #2D2E32;
        transition: all 0.4s ease-in-out;
        font-weight: 400;
        transform: scale(1.1);
    }

`
const MediaImageHolder = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* border: 1px solid white; */
    /* flex: 1; */
    /* scale box */
    /* position: relative; */
    height: 380px;

    @media (max-width: 768px) {
        > img {
            width: 380px;
            height: 250px;
        }
    }
`