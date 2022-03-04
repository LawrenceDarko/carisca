import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import OurTeamGallery from '../components/OurTeamGallery';

const Team = () => {

  const Title = "Our Team"

  const ImageOneLink = "/team/caro1.webp"
  const ImageTwoLink = "/team/caro1.webp"
  const ImageThreeLink = "/team/caro1.webp"
  const ImageFourLink = "/team/caro1.webp"
  const ImageFiveLink = "/team/caro1.webp"
  const ImageSixLink = "/team/caro1.webp"
  const ImageSevenLink = "/team/caro1.webp"
  const ImageEightLink = "/team/caro1.webp"
  const ImageNineLink = "/team/caro1.webp"


  return (
    <>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
        <h2>Gallery</h2>
         <GalleryImagesContainer>
            <OurTeamGallery imageLink={ImageOneLink}/>
            <OurTeamGallery imageLink={ImageTwoLink}/>
            <OurTeamGallery imageLink={ImageThreeLink}/>
            <OurTeamGallery imageLink={ImageFourLink}/>
            <OurTeamGallery imageLink={ImageFiveLink}/>
            <OurTeamGallery imageLink={ImageSixLink}/>
            <OurTeamGallery imageLink={ImageSevenLink}/>
            <OurTeamGallery imageLink={ImageEightLink}/>
            <OurTeamGallery imageLink={ImageNineLink}/>
         </GalleryImagesContainer>
         <Footer />
      </PageWrapper>
    </>
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
