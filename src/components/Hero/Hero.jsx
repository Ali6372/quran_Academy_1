import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../../ScrollAnimationWrapper';

const Hero = () => {
  return (
    <>
      <section className="bg-light position-relative overflow-hidden background">
      <div 
        className="position-absolute w-100 h-100 bg-cover bg-center cursor-pointer-only" 
        style={{
          backgroundImage: "url('https://your-image-url.com/quran-bg.jpg')",
          opacity: 0.6,
          backgroundSize: 'cover',
          zIndex: '-1'
        }}
      ></div>

      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Empowering You with the <span className="text-primary cursor-pointer cursor-pointer-only">Light of Quran</span>
            </h1>
            <p className="lead text-muted mb-4">
              Learn Quran with Tajweed, Tafseer, English Translation, and Arabic Classes – From the Comfort of Your Home.
            </p>
            <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start gap-3">
              <a 
                href="/contact" 
                className="btn btn-primary btn-lg px-4"
              >
                Start Your Free Trial
              </a>
              <a 
                href="/Service" 
                className="btn btn-outline-dark btn-lg px-4"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 text-center cursor-pointer cursor-pointer-only">
               <motion.div
                 initial={{ x: '100vw', opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
                 style={{ padding: '20px', borderRadius: '5px' }}
               >
            <img 
              src="https://www.ilmulquran.com/Images/Logo/updated-logo.webp"
              alt="Quran Tutor" 
              className="img-fluid rounded"
              style={{ maxWidth: '65%' }}
            />
             </motion.div>
          </div>

        </div>

        <motion.div
                 initial={{ y: '100vw', opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
                 style={{ padding: '20px', borderRadius: '5px' }}
               >
       
        <div className="row text-center mt-5">
          <div className="col-6 col-md-3 slide-in">
            <div className="py-3 cursor-pointer cursor-pointer-only">
              <span className="fs-1">🕋</span>
              <p className="mt-2">Quran with Tajweed</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="py-3 cursor-pointer cursor-pointer-only">
              <span className="fs-1">📖</span>
              <p className="mt-2">Tafseer and Translation</p>
            </div>
          </div>
          <div className="col-6 col-md-3 slide-in">
            <div className="py-3 cursor-pointer cursor-pointer-only">
              <span className="fs-1">🌐</span>
              <p className="mt-2">Quran Translate In English</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="py-3 cursor-pointer cursor-pointer-only">
              <span className="fs-1">🕊️</span>
              <p className="mt-2">Arabic Classes</p>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default Hero;

