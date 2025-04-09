'use client';

import React, { useEffect } from 'react';

const Timeline = () => {
  // Animation effect for timeline items
  useEffect(() => {
    const containers = document.querySelectorAll('.timeline-container-item');
    containers.forEach((container, index) => {
      setTimeout(() => {
        container.style.opacity = '1';
      }, 500 * (index + 1));
    });
  }, []);

  const timelineData = [
    {
      company: "Spice Mart",
      position: "Full-stack Developer · Freelance",
      period: "Jun 2023 - Aug 2023",
      description: "As a Freelance Full-stack Developer for Spice Mart, I helped elevate Barrie's premier South Indian store by building a dynamic, full-stack website using Tailwind CSS, Next.js, MongoDB, and React. Collaborating with a peer, I integrated a RESTful API to optimize data management and implemented secure CRUD operations via Auth0 for enhanced security. The project empowered the client with easy self-updates for products, pricing, and weekly flyers—streamlining their digital operations. Through hands-on development, client meetings, and iterative research, I refined my project management, teamwork, and full-stack problem-solving skills while delivering a responsive, user-friendly platform.",
      skills: "Search Engine Optimization (SEO) · Tailwind CSS · Front-End Development · HTML · Content Management Systems (CMS) · React.js · Responsive Web Design",
      side: "left"
    },
    {
      company: "Evstry",
      position: "Full-stack Developer · Internship",
      period: "Jan 2024 - Aug 2024",
      description: "At Evstry, I played a key role in revamping the cash gift registry platform by leading website redesign efforts using Figma, CMS, Webflow, and React in close collaboration with the manager. I managed a team of five, ensuring efficient and timely task completion, while also overseeing ad campaigns, including SEO and pixel placement for YouTube, TikTok, and Instagram ads. Additionally, I enhanced user engagement by creating and managing email newsletters and facilitated smooth project execution by conducting regular team meetings to gather requirements, demo progress, and collect feedback—significantly improving platform performance and laying the groundwork for future app development.",
      skills: "Search Engine Optimization (SEO) · Front-End Development · Web Development · Webflow · Project Management · Cascading Style Sheets (CSS) · HTML · Content Management Systems (CMS) · React.js · Figma (Software) · JavaScript · Responsive Web Design",
      side: "right"
    },
    {
      company: "More Than Circumstance",
      position: "Software Developer · Freelance",
      period: "May 2024 - Sep 2024",
      description: "At More Than Circumstance, I supported the nonprofit's mission by leading a full website redesign to enhance user experience and engagement. Using Figma, I translated the manager's vision into wireframes and prototypes before bringing the design to life with Webflow and React. While guiding a team to execute tasks efficiently, I improved critical features including donations, e-commerce, blogs, and event updates, strengthening the platform's functionality. Through this process, I deepened my expertise in content management, site mapping, and accessibility compliance, ensuring the final product met AODA standards for an inclusive user experience.",
      skills: "Search Engine Optimization (SEO) · Front-End Development · Web Development · Webflow · Project Management · Cascading Style Sheets (CSS) · Content Management Systems (CMS) · React.js · Figma (Software) · Responsive Web Design",
      side: "left"
    },
    {
      company: "University of Guelph",
      position: "Website Training & Support Specialist · Co-op",
      period: "Jan 2025 - Aug 2025",
      description: "At the University of Guelph, I acted as a Website Training & Support Specialist Co-op, delivering expert training and technical support for Drupal, Content Hub, and SharePoint to enhance client proficiency and platform efficiency. I developed comprehensive documentation, release notes, and training materials, ensuring clarity and accessibility for users. Additionally, I performed accessibility audits, collaborated with developers to resolve issues, and efficiently managed client design and customization requests within Agile Scrum frameworks—streamlining workflows and improving system usability.",
      skills: "Drupal · SharePoint · Content Hub · Technical Documentation · Training & Development · Accessibility Testing · Technical Support · Agile Scrum · Content Management Systems (CMS) · Project Management · User Experience (UX)",
      side: "right"
    },
    {
      company: "Tesla Inc.",
      position: "Position · Employment Type",
      period: "2020 – 2021",
      description: "The success of every website depends on search engine optimization and digital marketing strategy. If you are on first page of all major search engines, then you are ahead among your competitors.",
      side: "left"
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
          width: 6px;
          height: 100%;
          background: #1e2538;
          border: 1px solid #1e2538;
          animation: timeline-lineGrow 2s ease-out forwards;
          border-radius: 6px;
        }
        
        @keyframes timeline-lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        
        .timeline-container-item {
          padding: 10px 50px;
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
        
        .timeline-left-container .timeline-text-box:hover {
          transform: translateY(-5px) scale(1.05) translateX(-10px);
        }
        
        .timeline-right-container .timeline-text-box:hover {
          transform: translateY(-5px) scale(1.05) translateX(10px);
        }
        
        .timeline-text-box h2 {
          font-weight: 600;
          color: #1ca0f4;
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
          width: 30px;
          height: 30px;
          right: -15px;
          background-color: #1e2538;
          border: 4px solid #1ca0f4;
          top: 32px;
          border-radius: 50%;
          z-index: 1;
          animation: timeline-pulse 4s infinite;
        }
        
        .timeline-right-container::after {
          left: -15px;
        }
        
        @keyframes timeline-pulse {
          0% { box-shadow: 0 0 0 0 rgba(28, 160, 244, 0.7); }
          30% { box-shadow: 0 0 0 10px rgba(28, 160, 244, 0); }
          100% { box-shadow: 0 0 0 0 rgba(28, 160, 244, 0); }
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
        
        @media screen and (max-width: 768px) {
          .timeline-line {
            left: 40px;
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
      `}</style>

      <div className="timeline-main">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-container-item timeline-${item.side}-container`}>
            <div className="timeline-text-box">
              <h2>{item.company}</h2>
              <h4>{item.position}</h4>
              <small>{item.period}</small>
              <p className="mt-4">{item.description}</p>
              {item.skills && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400">Skills: {item.skills}</p>
                </div>
              )}
              <span className={`timeline-${item.side}-arrow`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 