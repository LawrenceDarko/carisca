import React from 'react'
import styled from 'styled-components'

const TheProjects = ({color, title, imageLink}) => {

  return (
    // style={{backgroundColor: color}}
        <ProjectItem color={color}>
            <ProjectImage>
                <img src={imageLink} alt="project"/>
            </ProjectImage>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo vitae numquam accusantium adipisci rem, animi non, quos quisquam consequuntur mollitia error magni, omnis laboriosam impedit iusto modi illo? Vel?</p>
        </ProjectItem>
  )
}

export default TheProjects;


const ProjectItem = styled.div`
    width: 280px;
    /* position: absolute; */
    height: 650px;
    background-color: ${props => props.color};
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    /* margin-left: 10px;
    margin-right: 10px; */
    /* border: 1px solid white; */

    > h1 {
        color: #fff;
        font-size: 30px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-left: 5px;

        /* margin-top: 10px; */
    }

    > p {
        color: #fff;
        margin-left: 7px;
        margin-right: 7px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 200;
    }

    &:hover {
        /* transform the box */
        transform: scale(1.08);
        transition: all 0.4s ease-in-out;
    }
`

const ProjectImage = styled.div`
    width: auto;
    height: 30%;
    margin-top: 10px;
    /* margin-bottom: 20px; */
    margin-left: 3%;
    margin-right: 3%;
    /* border: 1px solid #fff; */

    > img {
        width: 263px;
        height: 200px;

    }
`