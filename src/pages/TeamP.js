import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import OurTeamGallery from '../components/OurTeamGallery';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Team = () => {

  const Title = "Our Team"

  const ImageOneLink = "/team/stephen.webp"
  const ImageTwoLink = "/team/jesse.webp"
  const ImageThreeLink = "/team/serbe.webp"



  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Team | Carisca Lab</title>
        <meta name="description" content="Team Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
        <h2>Gallery</h2>
          <GalleryImagesContainer>
              <OurTeamGallery name="Frimpong Stephen" position="Administrative Manager" imageLink={ImageOneLink}/>
              <OurTeamGallery name="Jesse Anim" position="Technical Manager" imageLink={ImageTwoLink}/>
              <OurTeamGallery name="Dr. John Serbe Marfo" position="Senior Technical Advisor, CARISCA" imageLink={ImageThreeLink}/>
          </GalleryImagesContainer>
          <Footer />
      </PageWrapper>
    </>
    </HelmetProvider>
  )
};

export default Team;

const PageWrapper = styled.div`
  /* height: 100%; */
  width: 100%;
  background-color: #403F3E;
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  /* padding-left: 30px;
  padding-right: 10px; */

  > h2 {
    color: #FFB733;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 0px;
    padding-bottom: 0px;
    text-align: center;

  }

`
const GalleryImagesContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-left: 0px;
  padding-bottom: 50px;
  flex-wrap: wrap;
  /* border: 1px solid black; */

`
