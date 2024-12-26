import React from "react";
import './service.css';
import ScrollAnimationWrapper from '../../ScrollAnimationWrapper';

function Services() {
  const services = [
    {
      name: "Quran with Tajweed",
      icon: "🕋",
      details:
        "Learn Quran with Tajweed to ensure proper pronunciation and understanding of the Holy Quran.",
    },
    {
      name: "Tafseer and Translation",
      icon: "📖",
      details:
        "Understand the deeper meanings of Quranic verses through Tafseer and translation in various languages.",
    },
    {
      name: "Quran Translate in English",
      icon: "🌐",
      details:
        "Get a comprehensive English translation of the Quran for non-Arabic speakers.",
    },
    {
      name: "Arabic Classes",
      icon: "🕊️",
      details:
        "Master the Arabic language to enhance your understanding of the Quran and Hadith.",
    },
  ];

  return (
    <div className="container-fluid my-5 mt-5 px-4 py-3" id="services" style={{background:'#F8F9FA'}}>
      <ScrollAnimationWrapper direction="bottom">
      <h1 className="col-8 text-center m-auto display-4 fw-bold mb-3 text-primary cursor-pointer text-center my-5 mt-3">Our Services</h1>
      </ScrollAnimationWrapper>
      <p className="text-secondary text-center lead text-muted" style={{fontWeight:'500'}}>
      Welcome to <strong>Online Quran Institue</strong>, where we are dedicated to providing unparalleled services to nurture your spiritual and intellectual growth.
      </p>
      <p className="text-secondary text-center lead text-muted" style={{fontWeight:'500'}}>
      We are providing our best services to help you connect deeply with the Holy Quran and the Arabic language.
      </p>
      <div className="container">
      <div className="row mt-5">
        {services.map((service, index) => (
          <div className="col-12 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm border-0 h-100 cursor-pointer m-auto">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="fs-1 me-3">{service.icon}</span>
                  <h2 className="card-title mb-0">{service.name}</h2>
                </div>
                <p className="card-text mt-3">{service.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="styled-hr cursor-pointer"/>

      <div className="container my-2">
  <div className="row d-flex align-items-center">
    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
      <h4 className="fw-bold text-primary cursor-pointer text-start mt-5">Quran with Tajweed</h4>
      <p className="text-secondary text-start lead text-muted cursor-pointer-only">
        Learn the art of proper Quranic recitation with a focus on pronunciation and fluency.
      </p>
      <br />
      <h4 className="fw-bold text-primary cursor-pointer">Tafseer and Translation</h4>
      <p className="text-secondary text-start lead text-muted cursor-pointer-only">
        Unlock the deeper meanings of Quranic verses with expert-led Tafseer and translations.
      </p>
      <br />
      <h4 className="fw-bold text-primary cursor-pointer">Quran Translation in English</h4>
      <p className="text-secondary text-start lead text-muted cursor-pointer-only">
        Gain a clear understanding of the Holy Quran's message in the English language.
      </p>
      <br />
      <h4 className="fw-bold text-primary cursor-pointer">Arabic Classes</h4>
      <p className="text-secondary text-start lead text-muted cursor-pointer-only">
        Immerse yourself in the beauty of the Arabic language, tailored for both beginners and advanced learners.
      </p>
    </div>

    
    <div className="col-12 col-lg-6 mt-5 mt-lg-0 text-center cursor-pointer">
    <ScrollAnimationWrapper direction="right">
      <img
        src="https://play-lh.googleusercontent.com/GJFhOYXbhYwmsCZN6exgGfPrgZiQ1zFbHLeHaylqG-7DLkzarVgrutLjQafp_UhUHIw"
        alt="Quran"
        className="img-fluid rounded"
        style={{ maxWidth: "80%", height: "auto", display: "block", margin: "0 auto" }}
      />
      </ScrollAnimationWrapper>
    </div>
        </div>
       </div>

      </div>
    </div>
  );
}

export default Services;
