import React from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OtherPagesCarousel from '../components/OtherPagesCarousel';
import {Helmet} from 'react-helmet'

const About = () => {
  const Title = "About US"
  return (
    <>
      <Helmet>
        <title>About | Carisca Lab</title>
        <meta name="description" content="About Page of the Carisca Lab"/>
        <meta name="keywords" content="carisca, cariscalab, luminosity, knust, incubation lab, innovation, ksb"/>
        <meta name="author" content="Baah Lawrence Darko"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Navbar />
      <OtherPagesCarousel title ={Title} />
      <PageWrapper>
          <AboutText>
            <h1>Introduction</h1>
            <p>The digital revolution is not only here, but it is also accelerating every day. Advances in automation, the digitisation of information, unprecedented access to data and the democratisation of knowledge are transforming every sector of our economy – from healthcare to transportation to energy and beyond. The scope, scale, and ubiquity of these disruptions are truly unprecedented. As we embrace this tech-driven economy, universities must also change at an equal rate to adequately utilise this transformation. While universities retain their core mission of educating the next generation and cultivating new forms of knowledge, they must however, focus on their everexpanding role in driving innovation and catalysing economic development.</p>
            <p>At the behest of unexampled level of graduate unemployment and an ever-increasing demand for highly skilled labour, it is imperative for University of Science and Technology to churn out befitting graduates who, not only thrive in workplaces, but bring their innovative and creative geniuses to fore while leveraging on entrepreneurship in driving societal transformation. </p>
            <p>The Kwame Nkrumah University of Science and Technology, through its strategic mandate of becoming a premier university of science and technology in Africa has designed an effectual curriculum for instructing students in important disciplines. Notwithstanding, it still remains not far-fetched to conclude that students have no access to platforms to put such skills to the test on concepts that contribute positively to societal development. Though the university houses an incubation center, there still remains the need for students to be able to refine and prototype their ideas with access to manuscripts, learning, and simulation and case development resources to promote research, education and new product ideas.</p>
            <p>It is not surprising that certain renowned innovative tertiary institutions such as Arizona State University are committed to offering their students with a holistic academic experience coupled with fun but mentally stimulating activities. There is, therefore, the need for Kwame Nkrumah University of Science and Technology to present its students with the appropriate environment to participate in intellectually stimulating activities. The achievement of this requirement can be enhanced by an innovation Lab, offering students a live-work-learn-play environment, as is the case in other revolutionary tertiary institutions. </p>
            <p>Entrepreneurship is the primary factor in the growth of economies. Each new business launched has an impact on the economy and affect people around it. The Theory of Kirzner (1973-2005) about entrepreneurship explains how the improvement of economic health affects individuals in the third world. </p>
            <p>All the aforementioned instances establish the need for the Carisca Innovations lab to enable students practically apply their knowledge and skills in solving challenges of societies while creating opportunities for employment after school. </p>
            

            <h1>Our Mission</h1>
            <p>Carisca Innovations lab exists to advance the application of knowledge in science and technology through creating an environment for undertaking relevant research, design, prototyping, entrepreneurship training and community engagement to propel the entrepreneurial aspirations of students, enabling them to learn, engage and launch revolutionary ventures presenting solutions to critical challenges facing today’s world whiles positioning KNUST as the most innovative university in Africa.</p>
            

            <h1>Our Vision</h1>
            <p>To be the brain behind 100 thriving businesses in the next 5 years. 
                To be the premier Lab for innovation in West Africa within a decade of existence. 
                To build a student-led entrepreneurial acumen of youth, thereby reducing the rate of graduate unemployment in Ghana. 
            </p>
            

            <h1>Core Values</h1>
            <p>The Carisca innovations Lab is committed to bringing together students, faculty, alumni, and the community in designing critical systems and creative solutions for the complex challenges of today's world. The following cherished values characterize the work and life of the Lab and are ingrained in all those who pass through or work with the Lab. </p>

            <p>In fulfilling the Vision and Mission of the Lab, the following Core Values would be guiding principles: </p>

            <h2>Leadership in Innovation and Technology:</h2>
            <p>We endeavour to attain, maintain and strengthen our position as the premier Lab for innovation in West Africa, leading in generating and exchanging new knowledge in innovation and technology, research and education, and offering solutions to government, industry, and society at large through viable business ventureship and partnerships. </p>

            <h2>Culture of Excellence:</h2>
            <p>We strive to be the best and maintain a commitment to continuously improve upon our performance in all our undertakings - research, mentorship, entrepreneurship and innovation - attaining the highest level of professionalism. We are committed to being the benchmark in innovation which is reflected in the quality of our ideas and business ventures.</p>

            <h2>Diversity and Equal Opportunity for All:</h2>
            <p>We ensure an environment of understanding and respect for persons of varying ethnic, race, sexuality, religion and cultural backgrounds. We seek to ensure the highest level of diversity and create equal opportunity for students, staff, and alumni across various disciplines and academic backgrounds. We cherish a culture of inclusion that permeates personal and ideological differences.</p>

            <h2>Integrity and Stewardship of Resources:</h2>
            <p>We are dedicated to exhibiting the highest standards of professional ethics and integrity in the efficient utilisation of resources and instilling a culture of accountability and responsibility in all our operations. We pursue the highest return on investment from all ventures birthed by the Lab. </p>

            <h1>Our History</h1>
            <p>In its attempt to contribute to the overarching mission and vision of KNUST, the School of Business seeks to pioneer the establishment of the Carisca Innovations Lab to serve the whole university community. Concept for the Lab emerged in September 2019 when the Dean of the School discovered an interdisciplinary team of students attempting to apply their academic knowledge in solving dire needs in the Kumasi Metropolis but lack the appropriate resources in carrying through with it. The Dean also reckoned the fact that students at the Business School are unable to further develop their ideas after failing to win the KSB Business Idea Challenge organised annually. The tendency of these game-changing ideas going waste presents the impetus for pioneering the establishment of the Lab. </p>
            <p>The Lab, situated at the KNUST School of Business Graduate Building, serves as both an innovation and a maker space. The Lab shall be furnished with necessary logistics for ideation, design thinking, prototyping and assist students in commercialising their business. 
               The Lab shall offer students the appropriate mentorship through industrial partnerships to help students hone their entrepreneurial skills. The lab will also provide an environment for students to write practical cases on their businesses for possible use in teaching and learning in lecture rooms. 
            </p>
            <p>In executing its mandate, the lab builds a vibrant teams of 5 from students with expertise in various disciplines with technical requirements of their respective projects. With a dedication to building the leadership competence of students, the lab is managed by students but overseen by a board of Directors. </p>
            <p>The lab forms partnerships with other innovation hubs, incubation centers, angel investment networks, companies and international bodies with aligned interests to acquire resources necessary for effective transformation of students’ innovative ideas into marketable products and ventures.  </p>

            
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

    > h2 {
        color: #FFF;
        /* font-size: 30px;
        font-weight: 600; */
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

        > h2 {
            font-size: 20px;
        }

        > p {
            font-size: 18px;
        }
    }

`