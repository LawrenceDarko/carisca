import React from 'react';
import styled from 'styled-components';
import MediaComponent from '../components/MediaComponent';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import Footer from '../components/Footer';
import MediaComponentRight from '../components/MediaComponentRight';

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
    <>
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