import React from 'react';
import Myimage from '../assets/myimage.jpg';
import CAPABL from '../assets/capabl.jpeg';
import HIREME from '../assets/hireme.jpeg';
import styled from 'styled-components';
import Navbar from '../components/navbar'

// Define keyframes for fade-in animation
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// Styled components
const StyledIntro = styled.i`
  font-family: 'roboto-light';
  // font-weight: bold;
  font-size: 22px;
  color: white;
  width: 65%;
`;

// const StyledHomeName = styled.div`
//   .name {
//     font-size: 150px;
//     color: #242629;
//     text-shadow: 3px 5px 0 rgb(104, 255, 104), 2px -3px 0 green, -3px 4px 0 green, 1px 2px 0 green;
//     opacity: 0;
//     animation: ${fadeIn} 1s ease-in-out forwards; 
//   }
// `;

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='home-container'>

        <div className="home-header">
          
          <div className="circle">
            <div className="image">
              <img src={Myimage} alt="loading" />
            </div>
          </div>
          <div className="home-name">
            <p className='name'>Ritik Raj</p>
          </div>
          <div className="home-content">
            <StyledIntro>
              Hello, I am Ritik Raj, a former Software Engineer at CERN, and I'm currently working on something exciting that's still under wraps! I designed & developed this web page and it lists brief highlights of my professional journey. Apart from technology, I like to talk about finance (investing, fintech), business, education and baking.
            </StyledIntro>
          </div>
        </div>

        <div className="background__wave">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <br />
          <br />
          
          </div>

          <div className="container-fluid">
            <br /><br /><br /><br />
          <div className="headings">Internship And Experience</div>

          <div className="experience-container">
            <div className="card-img">
              <img src={HIREME} alt="company name" />
            </div>
            <div className="card">
              <div className="card-head">HireME</div>
              <div className="card-description">
                <div className="card-job-name">
                  FULL Stack Developer <span>June 2023 - sept 2023</span>
                  </div>
                  <p>Worked as part of the front-end team, with an invaluable opportunity to
                    enhance my skills and gain hands-on experience in developing robust and
                      scalable web Applications.</p>
                  <p>Created several interactive pages with solid functionality  </p>
                  <p>skills used: HTML, CSS, JS, REACT, BOOTSTRAP</p>
              </div>
            </div>
          </div>
          <div className="experience-container">
            <div className="card-img">
              <img src={CAPABL} alt="company name" />
            </div>
            <div className="card">
              <div className="card-head">CAPABL</div>
              <div className="card-description">
                <div className="card-job-name">
                  FULL Stack Developer <span>June 2023 - sept 2023</span>
                  </div>
                  <p>Worked as part of the front-end team, with an invaluable opportunity to
                    enhance my skills and gain hands-on experience in developing robust and
                      scalable web Applications.</p>
                  <p>Developed a website</p>
                  <p>Worked with a team</p>
                  


              </div>
            </div>
          </div>
          
          
        </div>

        <div className="projects-container">
          <h1>Projects</h1>
          <div className="proj">

            <div className="project-box">
              <div className="box-item-img">
                <img src={Myimage} alt="project_image" />
              </div>
              <div className="box-item-description">
                <h1>News2You</h1>
                <p>This is a news website, which gather all the top, or the latest news in the world, 'made with react '</p>
                <p>link will be available soon ! </p>
              </div>
            </div>

            <div className="project-box">
              <div className="box-item-img">
                <img src={Myimage} alt="project_image" />
              </div>
              <div className="box-item-description">
                <h1>Social Medial Platform</h1>
                <p>Social media platform similar to other platform but offering a simpler </p>
                <p>link will be available soon ! </p>
              </div>
            </div>

            <div className="project-box">
              <div className="box-item-img">
                <img src={Myimage} alt="project_image" />
              </div>
              <div className="box-item-description">
                <h1>Emotion Detection Using OpenCV</h1>
                <p>Emotion detection using OpenCV involves capturing video frames from the webcam, detecting faces within those frames, and classifying emotions using a pre-trained deep learning model like FER2013. The results are displayed in real-time by drawing rectangles around detected faces and annotating them with the predicted emotion.</p>
                <p>link will be available soon ! </p>
              </div>
            </div>


            
            
          </div>
        </div>
        

        
      
      </div>
    </>
  );
}

