// import { useState, useEffect } from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import PageCarousel from '../components/PageCarousel'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Partnerships from "./Partnerships"
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { GoTelescope, GoLightBulb } from "react-icons/go";
import { CiBrightnessUp } from "react-icons/ci";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

function Home() {

  const services = [
    { 
      icon: <GoTelescope style={{fontSize: '90px'}}/>,
      title: 'Research & Knowledge Creation',
      description: 'We combine a methodological research approach with our multidisciplinary background to drive our knowledge creation.'
    },
    { 
      icon: <SiAltiumdesigner style={{fontSize: '90px'}}/>,
      title: 'Design & Rapid Prototyping',
      description: 'We specialize in concept drawings which complement full-fledged design models and inform our prototyping process.'
    },
    { 
      icon: <CiBrightnessUp style={{fontSize: '90px'}}/>,
      title: 'Ideation & Concept Development',
      description: 'Our lab works with the latest ideation-frameworks to initiate our iterative concept development process.'
    },
    { 
      icon: <BsCodeSlash style={{fontSize: '90px'}}/>,
      title: 'Mobile & Web Development',
      description: 'Our team focuses on a user-centric design model for architecting mobile and web based platforms to advance our research pursuits.'
    },
    { 
      icon: <BsClipboardData style={{fontSize: '90px'}}/>,
      title: 'Visualization & Data Science',
      description: 'Our data analytics team utilizes a suite of analytical and graphic-based tool kits to restructure problems with a unique perspective.'
    },
    { 
      icon: <IoSettingsOutline style={{fontSize: '90px'}}/>,
      title: 'Hardware Development',
      description: 'We draw from best-in-class robotics and hardware specialists to create cutting-edge technology.'
    }
  ]

  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Home | Carisca Lab</title>
        <meta name="description" content="Homepage of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <PageCarousel />
      <BodyWrapper>
            <WhoWeAre>
                <p>The Carisca Innovations Lab is an interdisciplinary research and development lab driven by a hand-selected team of high-performing technical and creative students from KNUST. At the behest of unexampled level of graduate unemployment and an ever-increasing demand for highly skilled labour, it is imperative for University of Science and Technology to churn out befitting graduates who, not only thrive in workplaces, but bring their innovative and creative geniuses to fore while leveraging on entrepreneurship in driving societal transformation. We enable students practically apply their knowledge and skills in solving challenges of societies while creating opportunities for employment after school.</p>
                <p>Our mission is to advance the application of knowledge in science and technology through creating an environment for undertaking relevant research, design, prototyping, entrepreneurship training and community engagement to propel the entrepreneurial aspirations of students, enabling them to learn, engage and launch revolutionary ventures presenting solutions to critical challenges facing today’s world whiles positioning KNUST as the most innovative university in Africa. </p>
            </WhoWeAre>
            <UpcomingPrograms>
                {/* This is the text in the notice board */}
                <NoticeText>
                  <h2>Upcoming Programs</h2>
                  <p>Tek Invasion is a transformative event dedicated to fostering Ghanaian students and youth in their pursuit of innovative solutions to Africa's major challenges. It serves as a platform for learning, knowledge-sharing, and showcasing real-world ingenuity. The event aims to create a sustainable technological ecosystem that inspires students, connects them with industry professionals, and unleashes their unlimited potential. By highlighting the critical role of technology in job creation and economic development, Tek Invasion shines a spotlight on Ghanaian examples and encourages students to tackle pressing global issues.</p>
                </NoticeText>

                {/* This is the notice board */}
                <NoticeBoard >
                  <div style={{marginBottom: 20, display: 'flex', flexDirection: 'column'}}>
                    <h1>Soon</h1>
                    <p>TEK invasion</p>
                    <p>Great Hall, KNUST</p>
                  </div>
                  <div style={{}}>
                    <img src="/images/program.jpg" height={'100%'} width={'100%'} style={{objectFit: 'contain'}}/>
                  </div>
                </NoticeBoard>

                    {/* <p>This browser does not support the video tag.</p>
                    <p>This browser does not support the video tag.</p> */}
                  <video loop autoPlay muted>
                    <source src="/videos/vid11.mp4" type="video/mp4" />
                  </video>
            </UpcomingPrograms>
            <OurServices services={services}/>
            <Footer />
      </BodyWrapper>
    </>
    </HelmetProvider>
  )
}

export default Home;

const BodyWrapper = styled.div`
    height: 100%;
    /* padding-left: 10vh;
    padding-right: 10vh; */
    /* background-color: #2D2E32; */
`

const WhoWeAre = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    /* height: 100vh; */
    /* overflow: hidden; */
    background-color: orange;
    padding: 20vh;
    /* border: 1px solid white; */

    /* background-image: url("/caro.jpg"); */
    background-image: linear-gradient(rgba(255, 183, 51, 0.8), rgba(255, 183, 51, 0.8)), url("/caro.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    line-height: 1.5;
    /* background-color: #2D2E32; */

    @media (max-width: 768px) {
      background-attachment: scroll !important;
    }

    > p {
        color: white;
        font-size: 18px;
        /* font-weight: 300; */
        line-height: 25px;
        font-family: 'Open Sans', sans-serif;

/*        
        margin-block-start: 1.3em;
        margin-block-end: 1.3em; */
    }

    @media only screen and (min-device-width : 0px) and (max-device-width : 768px){
        padding: 5vh;
        background-attachment: scroll !important;
      > h2 {
        font-size: 20px;
      }
    }

    @media only screen and (min-device-width : 768px) and (max-device-width : 820px){
        padding: 5vh;
      > h2 {
        font-size: 20px;
      }
    }
`

const UpcomingPrograms = styled.div`
    align-items: center;
    height: 122vh;
    /* width: 100%; */
    overflow: hidden;
    background-color: #2D2E32;
    display: flex;
    justify-content: space-around;
    /* padding-left: 200px;
    padding-right: 200px; */
    overflow: hidden;
    background-color: rgba(0,0,0,0.8);
    z-index: 1;
    /* border: 1px solid white; */
    

    > video { 
      position: absolute;
      object-fit: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      left: 0;
      width: 100%;
      height: 122vh;
      /* background-color: rgba(0,0,0,0.5); */
      z-index: -1;
    }

    > p {
      color: white;
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
        flex-direction: column;
        align-items: left;
        align-content: left;
        justify-content: space-around;
        /* padding: 50px; */
        
    }
    
`
const NoticeBoard = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center;
    justify-content: center; */
    height: 70%;
    width: 400px;
    /* position: relative; */
    border: 1px solid #31302F;
    background-color: rgba(96, 34, 34, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(30px);
    padding: 30px;
    /* z-index: 5; */
    /* box-sizing: border-box; */

    > div > h1 {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 54px;
      font-weight: 600;
      cursor: pointer;
      /* letter-spacing: 1.5px; */
      /* padding-top: 30px; */
      
    }

    > div > p {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 30px;
      /* font-weight: 500; */
      cursor: pointer;
      /* letter-spacing: 1px; */
      /* padding-top: 10px; */
      margin-block-start: 0em;
      margin-block-end: 0.3em;
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
        width: 80%;
        height: 60%;
    }
`
const NoticeText = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* border: 1px solid #31302F; */
    width: 500px;
    /* height: 100%; */
    /* width: 100%; */
    /* background-color: rgba(0,0,0,0.5); */

    > h2 {
        /* color: white; */
        font-size: 30px;
        font-weight: 600;
        color: #FFB733;
        font-family: 'Open Sans', sans-serif;

    }

    > p {
        color: white;
        font-size: 18px;
        /* font-weight: 300; */
        line-height: 25px;
        font-family: 'Open Sans', sans-serif;
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 932px){
        width: 80%;
        > h2 {
            font-size: 20px;

        }

        > p {
            font-size: 18px;
        }
    }

`


