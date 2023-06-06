import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Partnerships = () => {

  const Title = "Partnerships"

  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Partnerships | Carisca Lab</title>
        <meta name="description" content="Partnerships Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
          <SponsorshipsContainer>
              <SponsorshipsTextContainer>
                <h1>Our Sponsors and Partners</h1>
                <p>The Carisca Innovations Lab has its partners as USAID and Arizona State University (ASU) with USAID being our main sponsors who are currently funding the five projects running at the innovation’s lab. Every other team, then stands the chance of funding from our main partners and sponsors. Carisca has also extended its reach and impact by forming strategic alliances with other giants in the Tec innovation industry including avenues to resort to for funding. The image of our main partners as well leads the discussions for funds at both local and international level.</p>
              </SponsorshipsTextContainer>
              <SponsorshipsLogosContainer>
                  <img src="/sponsors/asu.png" width={400} height={110} alt="" />
                  <img src="/sponsors/usaid.png" width={320} height={110} alt="" />
                  <img src="/sponsors/knust.png" width={270} height={100} alt="" />
                  {/* <Image src="/sponsors/carisca.jpg" width={290} height={110} /> */}
                  
              </SponsorshipsLogosContainer>
          </SponsorshipsContainer>
          <PresentAndPastSponsorshipsContainer>
              {/* <h1>Present and Past Sponsorships</h1> */}
          </PresentAndPastSponsorshipsContainer>
          <Footer />
      </PageWrapper>
    </>
    </HelmetProvider>
  )
};

export default Partnerships;

const PageWrapper = styled.div`
    width: 100%;
    /* height: 100vh; */
    background-color: #403F3E;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
`
const SponsorshipsContainer = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 80px;
    /* border: 1px solid black; */
`
const SponsorshipsTextContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-left: 50px;
    padding-right: 50px;
    /* padding-bottom: 50px; */

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
        /* margin-block-start: 0em; */
    }
`
const SponsorshipsLogosContainer = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* padding-left: 50px; */
    padding-right: 50px;
    justify-content: space-evenly;
    padding-bottom: 100px;
    /* align-items: center; */
    /* border: 1px solid black; */
`
const PresentAndPastSponsorshipsContainer = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    
`