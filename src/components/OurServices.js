import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components"
// import SwiperCore, { Autoplay, Navigation, Pagination, EffectCoverflow} from "swiper"
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "../styles/globals.css"


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation, } from "swiper";
// SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

const OurServices = ({services}) => {


  // const [checkMobile, setCheckMobile] = useState(false)

  return (
    <ServicesCarousel>
        <OurServicesTextContainer>
          <h2>Our Services</h2>
          <p>Carisca Lab is an innovative hub that excels in research, design, and development. With a multidisciplinary approach and advanced technology, we provide services in research and knowledge creation, design and prototyping, ideation and concept development, mobile and web development, visualization and data science, and robotics and hardware development. Our solutions are transformative, enabling businesses to optimize processes and overcome complex problems. At Carisca Lab, our focus is on pushing the boundaries of innovation to drive problem-solving and help businesses achieve their goals.</p>
        </OurServicesTextContainer>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 600,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
              delay: 2800,
              disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              // width: 640,
              slidesPerView: 2,
              
            },
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            // when window width is >= 1024px
            
          }}
          // modules={[Autoplay, Pagination, Navigation]}
          
          centeredSlides={true}
          style={{ height: "360px", width: "100%", position: 'relative', zIndex: 1}}
          className="sliderContainer"
        >
          {services.map(({icon, title, description}) => (<SwiperSlide className="theSwiper"
            // style={{backgroundImage:"url(https://swiperjs.com/demos/images/nature-1.jpg)", }}
          >
            <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {icon}
              </div>
              <div className="ServiceHeading">
                <p style={{color: 'black', textAlign: 'center'}}>{title}</p>
              </div>
              <div>
                <p style={{color: 'black', textAlign: 'center'}}>{description}</p>
              </div>
            </div>
          </SwiperSlide>))}
          {/* <SwiperSlide className="theSwiper"
            // style={{backgroundImage:"url(https://swiperjs.com/demos/images/nature-2.jpg)",}}
          >
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            // style={{backgroundImage:"url(https://swiperjs.com/demos/images/nature-3.jpg)"}}
          >
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            // style={{ backgroundImage: "url(https://swiperjs.com/demos/images/nature-4.jpg)"}}
          >
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            // style={{backgroundImage:"url(https://swiperjs.com/demos/images/nature-5.jpg)"}}
          >
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="theSwiper"
            // style={{backgroundImage:"url(https://swiperjs.com/demos/images/nature-6.jpg)"}}
          >
            Slide 6
          </SwiperSlide> */}
        </Swiper>
  </ServicesCarousel>
  )
}

export default OurServices;


const ServicesCarousel = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 120vh; */
    /* padding: 30px; */
    /* justify-content: space-between; */
    align-items: center;
    /* padding-bottom: 80px; */
    /* padding-right: 80px; */
    /* margin: 0 auto; */
    padding: 20vh;

    /* width: 100%; */
    background-color:  #f63309;

    background-image: linear-gradient(rgba( 246, 51, 9, 0.8), rgba( 246, 51, 9, 0.5)), url("/images/tech.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
     /* border: 1px solid black; */

    /* @media (max-width: 768px) {
      ${props => props.setCheckMobile === true ? '2' : '1'}
    } */
    @media (max-width: 768px) {
      background-attachment: scroll !important;
      padding: 5vh;
    }

    `
const OurServicesTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    /* padding-left: 70px;
    padding-right: 70px; */
    /* border: 2px solid white; */


    > h2 {
        color: #FFB733;
        font-size: 30px;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
    }

    > p {
        color: white;
        font-size: 18px;
        /* font-weight: 300; */
        line-height: 25px;
        font-family: 'Open Sans', sans-serif;
    }
`






