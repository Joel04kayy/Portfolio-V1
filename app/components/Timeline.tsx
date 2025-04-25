'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const Timeline = () => {
  // Animation effect for timeline items
  useEffect(() => {
    const containers = document.querySelectorAll<HTMLElement>('.timeline-container-item');
    containers.forEach((container, index) => {
      setTimeout(() => {
        container.style.opacity = '1';
      }, 500 * (index + 1));
    });
  }, []);

  const timelineData = [
    {
      company: "University of Guelph",
      position: "Website Training & Support Specialist · Co-op",
      period: "Jan 2025 - Aug 2025",
      description: "At the University of Guelph, I acted as a Website Training & Support Specialist Co-op, delivering expert training and technical support for Drupal, Content Hub, and SharePoint to enhance client proficiency and platform efficiency. I developed comprehensive documentation, release notes, and training materials, ensuring clarity and accessibility for users. Additionally, I performed accessibility audits, collaborated with developers to resolve issues, and efficiently managed client design and customization requests within Agile Scrum frameworks—streamlining workflows and improving system usability.",
      skills: "Drupal · SharePoint · Content Hub · Technical Documentation · Training & Development · Accessibility Testing · Technical Support · Agile Scrum · Content Management Systems (CMS) · Project Management · User Experience (UX)",
      side: "left"
    },
    {
      company: "More Than Circumstance",
      position: "Software Developer · Freelance",
      period: "May 2024 - Sep 2024",
      description: "At More Than Circumstance, I supported the nonprofit's mission by leading a full website redesign to enhance user experience and engagement. Using Figma, I translated the manager's vision into wireframes and prototypes before bringing the design to life with Webflow and React. While guiding a team to execute tasks efficiently, I improved critical features including donations, e-commerce, blogs, and event updates, strengthening the platform's functionality. Through this process, I deepened my expertise in content management, site mapping, and accessibility compliance, ensuring the final product met AODA standards for an inclusive user experience.",
      skills: "Search Engine Optimization (SEO) · Front-End Development · Web Development · Webflow · Project Management · Cascading Style Sheets (CSS) · Content Management Systems (CMS) · React.js · Figma (Software) · Responsive Web Design",
      side: "right"
    },
    {
      company: "Evstry",
      position: "Full-stack Developer · Internship",
      period: "Jan 2024 - Aug 2024",
      description: "At Evstry, I played a key role in revamping the cash gift registry platform by leading website redesign efforts using Figma, CMS, Webflow, and React in close collaboration with the manager. I managed a team of five, ensuring efficient and timely task completion, while also overseeing ad campaigns, including SEO and pixel placement for YouTube, TikTok, and Instagram ads. Additionally, I enhanced user engagement by creating and managing email newsletters and facilitated smooth project execution by conducting regular team meetings to gather requirements, demo progress, and collect feedback—significantly improving platform performance and laying the groundwork for future app development.",
      skills: "Search Engine Optimization (SEO) · Front-End Development · Web Development · Webflow · Project Management · Cascading Style Sheets (CSS) · HTML · Content Management Systems (CMS) · React.js · Figma (Software) · JavaScript · Responsive Web Design",
      side: "left"
    },
    {
      company: "Spice Mart",
      position: "Full-stack Developer · Freelance",
      period: "Jun 2023 - Aug 2023",
      description: "As a Freelance Full-stack Developer for Spice Mart, I helped elevate Barrie's premier South Indian store by building a dynamic, full-stack website using Tailwind CSS, Next.js, MongoDB, and React. Collaborating with a peer, I integrated a RESTful API to optimize data management and implemented secure CRUD operations via Auth0 for enhanced security. The project empowered the client with easy self-updates for products, pricing, and weekly flyers—streamlining their digital operations. Through hands-on development, client meetings, and iterative research, I refined my project management, teamwork, and full-stack problem-solving skills while delivering a responsive, user-friendly platform.",
      skills: "Search Engine Optimization (SEO) · Tailwind CSS · Front-End Development · HTML · Content Management Systems (CMS) · React.js · Responsive Web Design",
      side: "right"
    }
  ];

  return (
    <div className="timeline-wrapper">
      <style>{`
        .timeline-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          flex-direction: column;
        }
        
        .timeline-main {
          position: relative;
          max-width: 1200px;
          margin: 100px auto;
          width: 100%;
        }
        
        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 100%;
          background: #1e2538;
          border: 1px solid #1e2538;
          animation: timeline-lineGrow 2s ease-out forwards;
          border-radius: 6px;
          top: 0;
        }
        
        @keyframes timeline-lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        
        .timeline-container-item {
          padding: 10px 80px;
          position: relative;
          width: 50%;
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
        
        .timeline-text-box {
          padding: 20px 30px;
          background: #1e2538;
          position: relative;
          border-radius: 6px;
          font-size: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
          transition: transform 0.3s ease, background 0.3s ease, scale 0.3s ease;
        }
        
        .timeline-text-box:hover {
          background: #232b42;
          transform: translateY(-5px) scale(1.05);
        }
        
        .timeline-text-box h2 {
          font-weight: 600;
          color: #1ca0f4;
          font-size: 1.35rem;
        }
        
        .timeline-text-box h4 {
          font-weight: 500;
          color: #ffffff;
          margin: 5px 0 10px;
        }
        
        .timeline-text-box small {
          display: inline-block;
          margin-bottom: 15px;
          color: #1ca0f4;
        }
        
        .timeline-text-box p {
          color: #ffffff;
        }
        
        .timeline-left-container {
          left: 0;
        }
        
        .timeline-right-container {
          left: 50%;
        }
        
        .timeline-left-arrow {
          height: 0;
          width: 0;
          position: absolute;
          top: 28px;
          right: -15px;
          z-index: 1;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid #1e2538;
        }
        
        .timeline-right-arrow {
          height: 0;
          width: 0;
          position: absolute;
          top: 28px;
          left: -15px;
          z-index: 1;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 15px solid #1e2538;
        }
        
        .timeline-container-item::after {
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          right: -40px;
          background-color: #1e2538;
          border: 4px solid #1ca0f4;
          top: 12px;
          border-radius: 50%;
          z-index: 1;
          animation: timeline-pulse 4s infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timeline-circle-image {
          position: absolute;
          width: 72px;
          height: 72px;
          right: -36px;
          top: 16px;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #1e2538;
          border-radius: 50%;
          overflow: hidden;
        }

        .timeline-circle-image img {
          max-width: 80%;
          max-height: 80%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        /* Specific adjustments for UOG logo */
        .timeline-circle-image img[alt="University of Guelph Logo"] {
          max-width: 110%;
          max-height: 110%;
          margin-top: -5px;
        }

        /* Specific adjustments for Evstry logo */
        .timeline-circle-image img[alt="Evstry Logo"] {
          max-width: 110%;
          max-height: 110%;
          margin-left: 5px;
        }

        /* Specific adjustments for MTC logo */
        .timeline-circle-image img[alt="More Than Circumstance Logo"] {
          max-width: 135%;
          max-height: 135%;
        }

        /* Specific adjustments for Spice Mart logo */
        .timeline-circle-image img[alt="Spice Mart Logo"] {
          max-width: 100%;
          max-height: 100%;
        }
        
        .timeline-right-container::after {
          left: -40px;
        }
        
        .timeline-right-container .timeline-circle-image {
          left: -36px;
          right: auto;
        }
        
        @keyframes timeline-pulse {
          0% { 
            box-shadow: 0 0 0 0 rgba(28, 160, 244, 0.7);
            border: 4px solid #1ca0f4;
          }
          30% { 
            box-shadow: 0 0 0 20px rgba(28, 160, 244, 0);
            border: 4px solid #1ca0f4;
          }
          100% { 
            box-shadow: 0 0 0 0 rgba(28, 160, 244, 0);
            border: 4px solid #1ca0f4;
          }
        }
        
        /* Add sequential animation delays with infinite loop */
        .timeline-container-item:nth-child(1)::after {
          animation: timeline-pulse 4s infinite;
          animation-delay: 0s;
        }
        
        .timeline-container-item:nth-child(2)::after {
          animation: timeline-pulse 4s infinite;
          animation-delay: 1s;
        }
        
        .timeline-container-item:nth-child(3)::after {
          animation: timeline-pulse 4s infinite;
          animation-delay: 2s;
        }
        
        .timeline-container-item:nth-child(4)::after {
          animation: timeline-pulse 4s infinite;
          animation-delay: 3s;
        }
        
        .timeline-description-container {
          position: relative;
          overflow: hidden;
          max-height: 100px;
          transition: max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-text-box:hover .timeline-description-container {
          max-height: 500px;
          transition: max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-text-box:not(:hover) .timeline-description-container {
          max-height: 100px;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-description-preview {
          display: block;
          margin-bottom: 10px;
          transition: opacity 0.5s ease;
        }

        .timeline-description-full {
          display: none;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-text-box:hover .timeline-description-preview {
          display: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .timeline-text-box:hover .timeline-description-full {
          display: block;
          opacity: 1;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-text-box:not(:hover) .timeline-description-full {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .timeline-fade-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: linear-gradient(to bottom, transparent, #1e2538);
          pointer-events: none;
          transition: opacity 0.5s ease;
        }

        .timeline-text-box:hover .timeline-fade-gradient {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .timeline-text-box:not(:hover) .timeline-fade-gradient {
          opacity: 1;
          transition: opacity 0.5s ease;
        }
        
        @media screen and (max-width: 768px) {
          .timeline-line {
            left: 40px;
            width: 10px;
          }
          
          .timeline-container-item {
            width: 100%;
            padding-left: 80px;
            padding-right: 25px;
          }
          
          .timeline-right-container {
            left: 0;
          }
          
          .timeline-left-arrow, .timeline-right-arrow {
            border-right: 15px solid #fff;
            border-left: 0;
            left: -15px;
          }
        
          .timeline-right-container::after, .timeline-left-container::after {
            left: 17px;
          }
        }

        .work-term-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .work-term-button {
          align-items: center;
          background-image: linear-gradient(144deg, rgba(28, 160, 244, 1), rgba(45, 73, 255, 1) 50%, rgba(28, 160, 244, 1));
          border: 0;
          border-radius: 8px;
          box-shadow: rgba(28, 160, 244, 0.2) 0 15px 30px -5px;
          box-sizing: border-box;
          color: #ffffff;
          display: flex;
          font-size: 18px;
          justify-content: center;
          line-height: 1em;
          max-width: 100%;
          min-width: 140px;
          padding: 3px;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s;
        }

        .work-term-button span {
          background-color: #1e2538;
          padding: 8px 24px;
          border-radius: 6px;
          width: 100%;
          height: 100%;
          transition: 300ms;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 35px;
          min-width: 200px;
        }

        .work-term-button:hover span {
          background: none;
        }

        .work-term-button .hover-text {
          display: none;
          text-align: center;
          width: 100%;
          min-height: 35px;
          min-width: 200px;
          align-items: center;
          justify-content: center;
        }

        .work-term-button .default-text {
          min-height: 35px;
          min-width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .work-term-button:hover .default-text {
          display: none;
        }

        .work-term-button:hover .hover-text {
          display: flex;
        }

        @media screen and (max-width: 768px) {
          .work-term-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .work-term-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="timeline-main">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-container-item timeline-${item.side}-container`}>
            <div className="timeline-text-box">
              <h2>{item.company}</h2>
              <h4>{item.position}</h4>
              <small>{item.period}</small>
              <div className="timeline-description-container">
                <p className="timeline-description-preview">
                  {item.description.split(' ').slice(0, 30).join(' ')}...
                </p>
                <p className="timeline-description-full">
                  {item.description}
                </p>
                <div className="timeline-fade-gradient"></div>
              </div>
              {item.skills && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400">Skills: {item.skills}</p>
                </div>
              )}
              <span className={`timeline-${item.side}-arrow`}></span>
            </div>
            {index === 0 && (
              <div className="timeline-circle-image">
                <Image 
                  src="/UOGlogo.jpeg" 
                  alt="University of Guelph Logo"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {index === 1 && (
              <div className="timeline-circle-image">
                <Image 
                  src="/MTClogo.png" 
                  alt="More Than Circumstance Logo"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {index === 2 && (
              <div className="timeline-circle-image">
                <Image 
                  src="/Elogo.png" 
                  alt="Evstry Logo"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {index === 3 && (
              <div className="timeline-circle-image">
                <Image 
                  src="/SMlogo.png" 
                  alt="Spice Mart Logo"
                  width={100}
                  height={100}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="work-term-buttons">
        <a href="/work-term-1" className="work-term-button">
          <span>Work Term 1 Report</span>
        </a>
        <div className="work-term-button">
          <span>
            <span className="default-text">Work Term 2 Report</span>
            <span className="hover-text">Not available yet</span>
          </span>
        </div>
        <div className="work-term-button">
          <span>
            <span className="default-text">Work Term 3 Report</span>
            <span className="hover-text">Not available yet</span>
          </span>
        </div>
        <div className="work-term-button">
          <span>
            <span className="default-text">Work Term 4 Report</span>
            <span className="hover-text">Not available yet</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 