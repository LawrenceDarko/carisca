import React from 'react';
import styled from 'styled-components';
import MediaComponent from '../components/MediaComponent';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import Footer from '../components/Footer';
import MediaComponentRight from '../components/MediaComponentRight';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Media = () => {

  const Title = "Media"
  const MediaOneTitle = ""
  const MediaOneBody = ""
  const MediaTwoTitle = ""
  const MediaTwoBody = ""
  const MediaThreeTitle = ""
  const MediaThreeBody = ""
  const MediaFourTitle = ""
  const MediaFourBody = ""

  return (
    <HelmetProvider>
    <>
      <Helmet>
        <title>Media | Carisca Lab</title>
        <meta name="description" content="Media Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title}/>
      <PageWrapper>
        <MediaComponentContainer>
            <MediaComponent MediaOneTitle={MediaOneTitle} MediaOneBody={MediaOneBody} />
            <MediaComponentRight MediaTwoTitle={MediaTwoTitle} MediaTwoBody={MediaTwoBody} />
            <MediaComponent MediaThreeTitle={MediaThreeTitle} MediaThreeBody={MediaThreeBody} />
            <MediaComponentRight MediaFourTitle={MediaFourTitle} MediaFourBody={MediaFourBody} />
        </MediaComponentContainer>
        
        {/* <h1>Media</h1> */}
        <Footer />
      </PageWrapper>
    </>
    </HelmetProvider>
  )
};

export default Media;

const PageWrapper = styled.div`
    /* height: 100%; */
    width: 100%;
    background-color: #403F3E;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    
    /* padding-left: 30px; */
    /* padding-right: 10px; */
`
const MediaComponentContainer = styled.div`
    width: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-top: 20px; */
    padding-bottom: 50px;
    /* border: 1px solid black; */
    
`