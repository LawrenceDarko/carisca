import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import Footer from '../components/Footer';

const Partnerships = () => {

  const Title = "Partnerships"

  return (
    <>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
         <SponsorshipsContainer>
            <SponsorshipsTextContainer>
              <h1>Our Sponsors and Partners</h1>
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ducimus tempora reprehenderit soluta quidem! Ipsam non eum ab in veritatis, iste accusamus beatae totam quos dolores omnis ratione doloribus tempore.</h2>
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

    > h2 {
        color: white;
        font-size: 25px;
        font-weight: 300;
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