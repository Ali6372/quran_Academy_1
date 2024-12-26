import React from 'react';
import { useState, useEffect } from 'react';
import ScrollAnimationWrapper from '../../ScrollAnimationWrapper';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the footer is in view
  const handleScroll = () => {
    const footerElement = document.getElementById("footer");
    const footerPosition = footerElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (footerPosition <= screenPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollAnimationWrapper direction="bottom">
    <footer
      id="footer"
      className={`bg-dark text-white py-4 ${isVisible ? "animate-footer" : ""}`}
    >
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">Quran Services</h5>
            <p className="text-muted">
              We offer a range of Quranic services, including Tajweed, Tafseer, Arabic Classes, and more.
            </p>
          </div>

          {/* Center Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold test-start">Quick Links</h5>
            <ul className="list-unstyled gap-3">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/service" className="text-white">Services</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" className="text-white me-3">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="https://www.instagram.com" className="text-white me-3">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <p className="text-muted">&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </ScrollAnimationWrapper>
  );
}

export default Footer;
