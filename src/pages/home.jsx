import React from 'react';
import Myimage from '../assets/myimage.jpg';
import CAPABL from '../assets/capabl.jpeg';
import HIREME from '../assets/hireme.jpeg';
import NEWS2YOU from '../assets/News2You.png';
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
      <Navbar />
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

          <div className="project-box bg-gray-800 p-4 rounded-lg m-4">
              <div className="box-item-img mb-4">
                <img src={NEWS2YOU} alt="News2You" className="rounded-lg" />
              </div>
              <div className="box-item-description">
                <h1 className="text-3xl font-bold mb-2">News2You</h1>
                <p className="mb-4">
                  This is an advanced news website, which has all the top and latest news of India and the world.
                </p>
                <div className="text-center">
                  <a href="https://github.com/RITIK8873/NEWS2YOU.git" target="_blank" rel="noopener noreferrer" className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block mt-4">
                    View Project on GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-box bg-gray-800 p-4 rounded-lg m-4">
              <div className="box-item-img mb-4">
                <img src={Myimage} alt="Social Media Platform" className="rounded-lg" />
              </div>
              <div className="box-item-description">
                <h1 className="text-3xl font-bold mb-2">Social Media Platform</h1>
                <p className="mb-4">
                  Social media platform similar to others but offering a simpler approach.
                </p>
                <div className="text-center">
                  <a href="https://github.com/RITIK8873/NEWS2YOU.git" target="_blank" rel="noopener noreferrer" className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block mt-4">
                    View Project on GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-box bg-gray-800 p-4 rounded-lg m-4">
              <div className="box-item-img mb-4">
                <img src={Myimage} alt="Emotion Detection" className="rounded-lg" />
              </div>
              <div className="box-item-description">
                <h1 className="text-3xl font-bold mb-2">Emotion Detection Using OpenCV</h1>
                <p className="mb-4">
                  Emotion detection using OpenCV involves capturing video frames from the webcam, detecting faces within those frames, and classifying emotions using a pre-trained deep learning model like FER2013.
                </p>
                <div className="text-center">
                  <a href="https://github.com/RITIK8873/NEWS2YOU.git" target="_blank" rel="noopener noreferrer" className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block mt-4">
                    View Project on GitHub
                  </a>
                </div>
              </div>
            </div>




          </div>
        </div>




      </div>
    </>
  );
}

