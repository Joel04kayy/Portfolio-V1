'use client';

import { useTileAnimation } from '../hooks/useTileAnimation';
import { GitHubRepo } from '../services/github';

interface ProjectTileProps {
  repo: GitHubRepo;
}

export default function ProjectTile({ repo }: ProjectTileProps) {
  const tileRef = useTileAnimation();

  return (
    <div ref={tileRef} className="project-tile bg-[#232b42] rounded-lg p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
      <p className="text-gray-300 mb-4">{repo.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.topics.map((topic) => (
          <span key={topic} className="px-2 py-1 bg-blue-900/50 rounded-full text-sm">
            {topic}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 relative z-10">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button w-full"
        >
          <span className="button-content">View on GitHub</span>
        </a>
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
          transition: all 0.3s ease;
          transform: translateZ(0);
        }

        .button:hover {
          transform: translateZ(0) translateY(-2px);
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
    </div>
  );
} 