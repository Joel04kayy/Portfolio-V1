'use client';

import { useEffect, useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'
import ProjectTile from '../components/ProjectTile'
import { getRepositories, GitHubRepo } from '../services/github'

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const repositories = await getRepositories('Joel04kayy');
      setRepos(repositories);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const tiles = document.querySelectorAll('.project-tile');
    
    const handleMouseMove = (e: MouseEvent, tile: Element) => {
      const rect = (tile as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const relX = (x - centerX) / centerX;
      const relY = (y - centerY) / centerY;
      
      (tile as HTMLElement).style.setProperty('--rotate-x', `${relY * 15}deg`);
      (tile as HTMLElement).style.setProperty('--rotate-y', `${-relX * 15}deg`);
    };
    
    const handleMouseLeave = (tile: Element) => {
      (tile as HTMLElement).style.setProperty('--rotate-x', '0deg');
      (tile as HTMLElement).style.setProperty('--rotate-y', '0deg');
    };
    
    tiles.forEach(tile => {
      tile.addEventListener('mousemove', (e) => handleMouseMove(e, tile));
      tile.addEventListener('mouseleave', () => handleMouseLeave(tile));
    });
    
    return () => {
      tiles.forEach(tile => {
        tile.removeEventListener('mousemove', (e) => handleMouseMove(e, tile));
        tile.removeEventListener('mouseleave', () => handleMouseLeave(tile));
      });
    };
  }, [repos]);

  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-24">Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg p-8">
            {loading ? (
              <div className="text-center text-gray-300">Loading projects...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map((repo) => (
                  <ProjectTile key={repo.name} repo={repo} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-24">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e2538]/80 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">JavaScript</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">TypeScript</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">React</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">Next.js</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">HTML</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">CSS</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">Tailwind CSS</p>
              </div>
              <div className="skill-tile rounded-lg p-4 text-center">
                <p className="text-gray-300">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .button {
          position: relative;
          overflow: hidden;
          height: 3rem;
          padding: 0 2rem;
          border-radius: 1.5rem;
          background: #304cfc;
          background-size: 400%;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: var(--font-comfortaa);
          font-weight: 500;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button:hover::before {
          transform: scaleX(1);
        }

        .button-content {
          position: relative;
          z-index: 1;
        }

        .button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: 0 50%;
          width: 100%;
          height: inherit;
          border-radius: inherit;
          background: linear-gradient(
            82.3deg,
            rgba(17, 254, 255, 1) 10.8%,
            rgba(45, 73, 255, 1) 94.3%
          );
          transition: all 0.475s;
        }

        .project-tile {
          transition: transform 0.3s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
          position: relative;
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-tile:hover {
          transform: perspective(1000px) 
            rotateX(var(--rotate-x)) 
            rotateY(var(--rotate-y))
            translateZ(20px);
        }
      `}</style>
    </main>
  );
} 