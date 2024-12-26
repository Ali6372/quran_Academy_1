import React from 'react';
import './program.css';
import ScrollAnimationWrapper from '../../ScrollAnimationWrapper';


const programs = [
    { name: "Islamic University of Madinah", location: "Madinah, Saudi Arabia", details: "Famous for Quran and Islamic studies programs." },
    { name: "Imam Muhammad bin Saud University", location: "Riyadh, Saudi Arabia", details: "Offers degrees in Sharia, Quran, and Hadith." },
    { name: "Umm Al-Qura University", location: "Makkah, Saudi Arabia", details: "Specializes in Quran and Sunnah sciences." },
    { name: "Medina Quran Academy", location: "Online", details: "Offers online Quran, Tajweed, and Arabic language courses." },
    { name: "Riyadh Al-Quran", location: "Online", details: "Provides Quran, Arabic language, and Islamic education online." },
    { name: "E-Quran School", location: "Online", details: "Online Quran teaching for all ages." }
];

function QuranPrograms() {
    return (
        <div className="container mt-5 p-3 py-5">
          <ScrollAnimationWrapper direction="bottom">
            <h1 className="programText text-center m-auto cursor-pointer display-4 fw-bold mb-5 text-primary">Teaching Programs</h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper direction="bottom">
            <div className="row">
                {programs.map((program, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-sm border-0 h-100 cursor-pointer">
                            <div className="card-body">
                                <h5 className="card-title">{program.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{program.location}</h6>
                                <p className="card-text">{program.details}</p>
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
            </ScrollAnimationWrapper>
             <hr className='animated-hr cursor-pointer'/>
            <div className="d-flex justify-content-between align-items-center p-3 gap-3 mt-5">
               <div className="program-text col-7 col-md-6">
                <p className="text-secondary text-start lead text-muted cursor-pointer-only">
                The <strong className='fs-4 cursor-pointer' style={{fontWeight:'600'}}>Online teaching program</strong> is an excellent initiative aimed at creating an active and interactive educational environment between students and teachers. Special emphasis is placed on training and developing teachers, enabling them to enhance their teaching skills.
                </p>
             </div>
            <div className="programImage col-5 col-md-6 text-center cursor-pointer">
            <ScrollAnimationWrapper direction="right">
            <img 
            src="https://play-lh.googleusercontent.com/MTLx8eHAwbNZzQ5LsrCsl0cgXhrrgkZTJmERrz8alWvjzLb1d9o38mEzqwpcZUqaIfI" 
            alt="Teaching program illustration" 
            style={{ maxWidth: '100%' }} 
            />
            </ScrollAnimationWrapper>
             </div>
             </div>

            {/* <div className="d-flex justify-content-between gap-5 align-items-center p-3">
                <div className="program-text col-6 col-md-12 col-sm-12">
                  <p className='text-secondary text-start lead text-muted cursor-pointer-only'>
                   The Muja teaching program is an excellent initiative aimed at creating an active and interactive educational environment between students and teachers. The program focuses on utilizing modern technology and teaching methods to make the learning process easier and more engaging. Special emphasis is placed on training and developing teachers, enabling them to enhance their teaching skills. This program goes beyond imparting textbook knowledge, fostering creative and critical thinking skills in students so they can achieve their goals and excel in their pursuits.
                  </p>
                </div>
                <div className="programImage col-6 col-md-12 col-sm-12">
                    <img src="https://userphotos2.teacheron.com/2028031-62808.png" alt="" style={{ maxWidth: '80%' }}/>
                </div>
            </div> */}

        </div>
    );
}

export default QuranPrograms;