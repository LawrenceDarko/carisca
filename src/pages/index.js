// import { useState, useEffect } from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import PageCarousel from '../components/PageCarousel'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <PageCarousel />
      <BodyWrapper>
            <WhoWeAre>
             
                <h2>Luminosity is an interdisciplinary research and development lab driven by a hand-selected team of high-performing students from Arizona State University. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nostrum unde id harum modi doloribus mollitia! Nisi sequi corrupti molestiae natus, expedita quis tempora aliquid? Magnam ipsa rem obcaecati maiores!</h2>
                <h2>Our mission is to create a new generation of technology that will revolutionize the way we live, work, and play. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia pariatur sit facere iusto a, amet recusandae incidunt reprehenderit eos. Laudantium quasi necessitatibus hic consectetur dolor sint odio illum dicta nam?</h2>
             
            </WhoWeAre>
            <UpcomingPrograms>
                {/* This is the text in the notice board */}
                <NoticeText>
                  <h2>Upcoming Programs</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, illo earum totam facere obcaecati alias eos ut ex recusandae deleniti labore laudantium quibusdam commodi error excepturi dolore libero itaque possimus?</p>
                </NoticeText>

                {/* This is the notice board */}
                <NoticeBoard >
                  <h1>March 21</h1>
                </NoticeBoard>

                    {/* <p>This browser does not support the video tag.</p>
                    <p>This browser does not support the video tag.</p> */}
                  <video loop autoPlay muted>
                    <source src="/videos/vid11.mp4" type="video/mp4" />
                  </video>
            </UpcomingPrograms>
            <OurServices />
            <Footer />
      </BodyWrapper>
    </>
  )
}

export default Home;

const BodyWrapper = styled.div`
    height: 100%;
    /* padding-left: 10vh;
    padding-right: 10vh; */
    /* background-color: #333; */
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
    /* background-color: #333; */

    > h2 {
        color: white;
        font-size: 30px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
/*        
        margin-block-start: 1.3em;
        margin-block-end: 1.3em; */
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
        padding: 5vh;
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
    background-color: #333;
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
    padding-left: 30px;
    /* z-index: 5; */

    > h1 {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 54px;
      font-weight: 600;
      cursor: pointer;
      letter-spacing: 1.5px;
      padding-top: 30px;
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
        font-size: 25px;
        font-weight: 300;
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


