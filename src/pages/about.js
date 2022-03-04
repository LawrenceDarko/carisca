import React from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';

const About = () => {
  const Title = "About US"
  return (
    <>
      <Navbar />
      <OtherPagesCarousel title ={Title} />
      <PageWrapper>
          <AboutText>
            <h1>Introduction</h1>
            <p>Luminosity is an interdisciplinary research and development lab driven by a hand-selected team of high-performing students from Arizona State University. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nostrum unde id harum modi doloribus mollitia! Nisi sequi corrupti molestiae natus, expedita quis tempora aliquid? Magnam ipsa rem obcaecati maiores!</p>

            <h1>Our Mission</h1>
            <p>Our mission is to create a new generation of technology that will revolutionize the way we live, work, and play. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia pariatur sit facere iusto a, amet recusandae incidunt reprehenderit eos. Laudantium quasi necessitatibus hic consectetur dolor sint odio illum dicta nam?</p>

            <h1>Our Vision</h1>
            <p>Our vision is to create a new generation of technology that will revolutionize the way we live, work, and play. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia pariatur sit facere iusto a, amet recusandae incidunt reprehenderit eos. Laudantium quasi necessitatibus hic consectetur dolor sint odio illum dicta nam?</p>

            <h1>Our Values</h1>
            <p>Our values are to create a new generation of technology that will revolutionize the way we live, work, and play. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia pariatur sit facere iusto a, amet recusandae incidunt reprehenderit eos. Laudantium quasi necessitatibus hic consectetur dolor sint odio illum dicta nam?</p>

            <h1>Our History</h1>
            <p>Our history is to create a new generation of technology that will revolutionize the way we live, work, and play. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia pariatur sit facere iusto a, amet recusandae incidunt reprehenderit eos. Laudantium quasi necessitatibus hic consectetur dolor sint odio illum dicta nam?</p>

            
          </AboutText>
          <Footer />
      </PageWrapper>
    </>
  )
}

export default About;

const PageWrapper = styled.div`
    height: 100%;
    /* width: 100%; */
    /* border-bottom: 1px solid #e6e6e6; */
    
    /* background-color: #333; */

`
const AboutText = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #403F3E;
    padding-left: 10vh;
    padding-right: 10vh;
    /* padding-top: 10vh; */

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

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
      padding-left: 5vh;
      padding-right: 5vh;
        /* width: 80%; */
        > h1 {
            font-size: 20px;

        }

        > p {
            font-size: 18px;
        }
    }

`