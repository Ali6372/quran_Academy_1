import React from 'react';
import'./about.css';
import { motion } from 'framer-motion';
import '../../ScrollAnimationWrapper';
import ScrollAnimationWrapper from '../../ScrollAnimationWrapper';


const About = () => {
  return (
    <>
      <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                <ScrollAnimationWrapper direction="bottom">
                    <h1 className="display-4 fw-bold mb-3 text-primary cursor-pointer">About</h1>
                    <p className="lead text-muted" style={{fontWeight:'600'}}>
                        Welcome to <strong>Muja Quran Teaching</strong>, a platform dedicated to providing the best
                        online Quran education for all age groups. Our mission is to spread the light of the Holy
                        Quran by making learning accessible, engaging, and effective.
                    </p>
                </ScrollAnimationWrapper>
                </div>
            </div>
         <ScrollAnimationWrapper direction="bottom">
            <div className="row mt-5">
                <div className="col-md-4 text-center cursor-pointer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEiLl3-gRxVJyXJQckRXNgu2UFqFfWlU3lQ&s" alt="Expert Tutors" className="img-fluid rounded-circle mb-3" />
                    <h3 className="h5">Expert Tutors</h3>
                    <p className="text-muted">
                        Our certified teachers are skilled in guiding students through personalized lessons.
                    </p>
                </div>
                <div className="col-md-4 text-center cursor-pointer">
                    <img width={219} src="https://smartquranacademy.com/wp-content/uploads/2024/09/Learn-Online-Quran-Classes.png" alt="Interactive Learning" className="img-fluid rounded-circle mb-3" />
                    <h3 className="h5">Interactive Learning</h3>
                    <p className="text-muted">
                        Learn Quran with state-of-the-art tools and interactive sessions that keep you engaged.
                    </p>
                </div>
                <div className="col-md-4 text-center cursor-pointer mt-5">
                    <img src="https://www.tarteelequran.com/wp-content/uploads/2021/06/online-quran-teachers-and-tutor-.png" alt="Flexible Schedule" className="img-fluid rounded-circle mb-3" style={{backgroundSize:'cover',width:'80%'}}/>
                    <h3 className="h5">Flexible Schedule</h3>
                    <p className="text-muted">
                        We offer flexible timings to cater to your busy lifestyle and convenience.
                    </p>
                </div> 
            </div>
            </ScrollAnimationWrapper>
            <div className="row mt-5">
                <div className="col text-center">
                <ScrollAnimationWrapper direction="bottom">
                    <h1 className=" join-today h4 text-primary fs-4 cursor-pointer-all m-auto my-2 cursor-pointer">Join Us Today</h1>
                </ScrollAnimationWrapper>
                    <p className="text-muted">
                        Start your journey towards understanding the Holy Quran with Muja Quran Teaching.
                        Together, let’s make learning a meaningful experience.
                    </p>
                    <ScrollAnimationWrapper direction="bottom">
                    <a href="#" className="btn btn-primary btn-lg mt-3">Get Started</a>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    </>
  );
}

export default About;
