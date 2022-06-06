import React from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import TheProjects from '../components/TheProjects';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Projects = () => {

  const Title = "Projects"

  const red = "#d42701"
  const orange = "#e06804"
  const green = "#1a752c"
  const blue = "#006c7b"
  const deepBlue = "#00507b"
  const lightBlue = "#2a53ab"
  const pink = "#d437fd"
  const gold = "#ffb733"

  const ProjectOneLink = "/caro.jpg"
  const ProjectTwoLink = "/caro.jpg"
  const ProjectThreeLink = "/caro.jpg"
  const ProjectFourLink = "/caro.jpg"
  const ProjectFiveLink = "/caro.jpg"
  const ProjectSixLink = "/caro.jpg"
  const ProjectSevenLink = "/caro.jpg"
  const ProjectEightLink = "/caro.jpg"




  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Projects | Carisca Lab</title>
        <meta name="description" content="Projects Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
          <OurProjectsTextContainer>
            <h1>Our Projects</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ducimus tempora reprehenderit soluta quidem! Ipsam non eum ab in veritatis, iste accusamus beatae totam quos dolores omnis ratione doloribus tempore.</p>
          </OurProjectsTextContainer>
          <ItemsContainer>
              <TheProjects imageLink={ProjectOneLink} title={"Project 1 title"} color={red}/>
              <TheProjects imageLink={ProjectTwoLink} title={"Project 2 title"} color={orange}/>
              <TheProjects imageLink={ProjectThreeLink} title={"Project 3 title"} color={green}/>
              <TheProjects imageLink={ProjectFourLink} title={"Project 4 title"} color={blue}/>
              <TheProjects imageLink={ProjectFiveLink} title={"Project 5 title"} color={deepBlue}/>
              <TheProjects imageLink={ProjectSixLink} title={"Project 6 title"} color={lightBlue}/>
              <TheProjects imageLink={ProjectSevenLink} title={"Project 7 title"} color={pink}/>
              <TheProjects imageLink={ProjectEightLink} title={"Project 8 title"} color={gold}/>
          </ItemsContainer>
          <Footer />
      </PageWrapper>
    </>
    </HelmetProvider>
    )
};

export default Projects;


const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 94%;
    margin: 0 auto;
    padding-bottom: 50px;
    /* border: 1px solid black; */
    
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #403F3E;
`
const OurProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  /* background-color: #403F3E; */
  padding-left: 13vh;
  padding-right: 13vh;

  > h1 {
        color: #FFB733;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

  > p {
      color: white;
      font-size: 25px;
      font-weight: 300;
      font-family: 'Open Sans', sans-serif;
  }

  @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
      padding-left: 35px;
      padding-right: 35px;
      margin-top: 0px;
      /* margin-bottom: 50px; */

      > h1 {
        color: #FFB733;
        font-size: 23px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: white;
        font-size: 18px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }

  }
`