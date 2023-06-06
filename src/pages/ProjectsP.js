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


  const projects = [
    {
      title: 'Cleeve',
      description: 'The Cleeve App is a user-friendly mobile and web application that enhances the experience for patients, medical lab workers, and doctors. It utilizes an AI model to analyze various medical imaging and diagnostic tests, including microscopic images of blood smears. By automating data processing and reducing manual errors, the Cleeve app speeds up lab findings and allows lab personnel to focus on more critical tasks. It provides reliable assistance in microscopy and improves the turnaround time for results.',
      image: '/caro.jpg',
      color: '#d42701',
    },
    {
      title: 'Inserviz',
      description: 'Inserviz is a web and mobile platform that connects youth with service opportunities in the supply chain and other sectors. It empowers young individuals to offer their services and be contracted for various tasks. The platform caters to technologically savvy youth in African communities, providing them with employment prospects in the gig economy. Clients can easily hire talent through Inserviz, fostering economic growth and creating opportunities for youth.',
      image: '/caro.jpg',
      color: '#e06804',
    },
    {
      title: 'KERVE',
      description: 'KERVE is a waste management mobile platform connecting users with registered individuals and riders for timely waste collection. The user-friendly app aims to address waste disposal challenges in Ghana and Africa by improving communication and reducing the spread of diseases associated with overfilled waste bins.',
      image: '/caro.jpg',
      color: '#1a752c',
    },
    {
      title: 'AREPO',
      description: 'The main Goal of AREPO is to eliminate paper receipt systems while at the same time providing an all-in-one financial tracking service for end-users, to better manage their finances. To provide an alternative to the traditional means of serving receipts, and enable customers to keep records of important receipts.',
      image: '/caro.jpg',
      color: '#006c7b',
    },
    {
      title: 'WELLFED',
      description: "WellFed's energy-efficient cooling system extends the shelf life of tomatoes by up to 20 days, reducing post-harvest loss and preserving revenue and nutrition in Akumadan. Through research and a cost-effective approach, we have developed an efficient evaporative cooling chamber for perishable food storage, ensuring tomatoes remain fresh and nutritious for longer periods.",
      image: '/caro.jpg',
      color: '#00507b',
    },
    {
      title: 'ESOG',
      description: 'ESOG is an E-Commerce platform that connects farmers with consumers through pre-selling and data analytics. It eliminates post-harvest losses and enhances traceability by ensuring products reach consumers on the day of harvest. The platform provides user-friendly interfaces for online shopping, stock uploading, and market trend monitoring. With ESOG, farmers can optimize production and maximize profits, benefiting the entire agricultural supply chain.',
      image: '/caro.jpg',
      color: '#2a53ab',
    },
  ]


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
            <p>Carisca Lab's Project Section is dedicated to delivering innovative software solutions that address supply chain challenges. With a team of skilled developers and industry experts, we customize projects to optimize operations, reduce costs, and improve productivity. Leveraging advanced technology like machine learning and data analytics, we provide valuable insights for informed decision-making. Our commitment to excellence has earned us a reputation for high-quality, scalable solutions that empower businesses across industries. Explore our successful collaborations and join us in revolutionizing supply chain management. Welcome to Carisca Lab's Project Section, where the future of supply chain begins.</p>
          </OurProjectsTextContainer>
          <ItemsContainer>
              {projects.map(({image, title, description, color}) => <TheProjects imageLink={image} title={title} color={color} description={description}/>)}
              {/* <TheProjects imageLink={ProjectTwoLink} title={"Project 2 title"} color={orange}/>
              <TheProjects imageLink={ProjectThreeLink} title={"Project 3 title"} color={green}/>
              <TheProjects imageLink={ProjectFourLink} title={"Project 4 title"} color={blue}/>
              <TheProjects imageLink={ProjectFiveLink} title={"Project 5 title"} color={deepBlue}/>
              <TheProjects imageLink={ProjectSixLink} title={"Project 6 title"} color={lightBlue}/>
              <TheProjects imageLink={ProjectSevenLink} title={"Project 7 title"} color={pink}/>
              <TheProjects imageLink={ProjectEightLink} title={"Project 8 title"} color={gold}/> */}
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
    /* justify-content: center ; */
    gap: 10px;
    width: 100%;
    /* margin: 0 auto; */
    padding: 1vh 13vh 13vh 13vh;
    padding-bottom: 50px;
    box-sizing: border-box;
    /* border: 1px solid black; */

    @media (max-width: 768px) {
      padding: 5vh;
    }
    
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 100px;
  background-color: #403F3E;
`
const OurProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: #403F3E; */
  padding-left: 13vh;
  padding-right: 13vh;
  /* margin-bottom: 100px; */
  /* border: 1px solid red; */
  box-sizing: border-box;

  > h1 {
        color: #FFB733;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

  > p {
      color: white;
      font-size: 18px;
      /* font-weight: 300; */
      line-height: 25px;
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