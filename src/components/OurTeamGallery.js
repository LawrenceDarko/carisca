import React from 'react';
import styled from 'styled-components';

const OurTeamGallery = ({imageLink}) => {

  return (
    <ImageItem priority={true} imageLink={imageLink}>
        {/* <Image src={imageLink} width={400} height={400} alt="team-1"/> */}
        <h1>Name</h1>
        <p>This is the position</p>
    </ImageItem>
  )
}

export default OurTeamGallery;

const ImageItem = styled.div`
    width: 400px;
    height: 300px;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.imageLink});
    background-size: cover;
    background-position: center;
    margin: 15px;
    cursor: pointer;
    /* padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px; */
    /* add shadow around the box */
    box-shadow: 8px 8px 8px 0px black;

    /* margin-bottom: 100px; */

    > h1 {
        font-size: 40px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
        color: white;
        margin-block-end: 0.3em;

    }

    > p {
        font-size: 1.2rem;
        line-height: 1.5;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        color: #fff;
        /* padding-top: 20px; */

    }

    &:hover {
        box-shadow: 8px 8px 8px 0px black;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        /* add a linear gradient */
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${props => props.imageLink});
    }

`