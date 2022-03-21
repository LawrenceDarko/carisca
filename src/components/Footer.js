import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Footer = () => {
  return (
      <>
        <FooterContainer>
            <FooterOne>
                <h2>Carisca Innovation Lab</h2>
                <FooterLogoContainer>
                    <img priority={true} src="/hatchlogo.png" width="260px" height="60px" alt='footer' />
                </FooterLogoContainer>
                <p>We help companies focus on growth through innovation and disruptive technologies </p>
            </FooterOne>
            <FooterTwo>
                <h2>Quick Links</h2>
                <Link to="/">◃Home</Link>
                <Link to="/about">◃About</Link>
                <Link to="/projects">◃Projects</Link>
                <Link to="/media">◃Media</Link>
                <Link to="/partnerships">◃Partnerships</Link>
                <Link to="/team">◃Our Team</Link>
            </FooterTwo>
            <FooterThree>
                <h2>Get in Touch</h2>
                <p>KNUST School of Business,<br/>
                    University Post Office,<br/>
                    KNUST-Kumasi Ghana.<br/><br/>
                    Email: <Link to="mailto:" target="_blank" rel="noopener noreferrer">knustksb@knust.edu.gh</Link>
                    </p>
            </FooterThree>
        </FooterContainer>
        <FinalFooter>
            <p>©Copyright 2022, CARISCA - All Rights Reserved</p>
        </FinalFooter>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* height: 60vh; */
    background-color: #333;
    bottom: 0;
    left: 0;
    /* right: 0; */
    position: relative;
    padding: 50px;

    @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
        flex-direction: column;
        align-items: left;
        align-content: left;
        justify-content: space-around;
        /* padding: 50px; */
        
    }


`
const FooterOne = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* width: 350px; */
    flex: 0.3;

    > h2 {
        color: #FFB733;
        font-size: 27px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #bebebe;
        letter-spacing: 1px;
    }

    
    /* align-items: center; */

`
const FooterTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    /* justify-content: center; */
    /* align-items: center; */
    flex: 0.4;

    > h2 {
        color: #FFB733;
        font-size: 27px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        /* align-items: center; */
    }

    > a {
        color: #bebebe;
        letter-spacing: 1px;
        text-decoration: none;
    }
`
const FooterThree = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    flex: 0.3;

    > h2 {
        color: #FFB733;
        font-size: 27px;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
    }

    > p {
        color: #bebebe;
    }

    > p > a {
        color: #bebebe;
        letter-spacing: 1px;
        text-decoration: none;
    }
`
const FooterLogoContainer = styled.div`
    width: 70%;
`
const FinalFooter = styled.div`
    display: flex;
    height: 55px;
    background-color: #242424;
    bottom: 0;
    left: 0;
    /* right: 0; */
    position: relative;
    padding-left: 50px;

    > p {
        color: #bebebe;
        font-size: 15px;
        /* font-weight: 300; */
        font-family: 'Open Sans', sans-serif;
        /* padding-left: 20px; */
    }

    @media only screen and (min-device-width : 50px) and (max-device-width : 768px){
        /* padding-left: 20px; */
        > p {
            font-size: 13px;
        }
        /* padding: 50px; */
        
    }
`