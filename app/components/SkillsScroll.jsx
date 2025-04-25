'use client';

const skills = [
  // Programming Languages
  { name: 'JavaScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'C#', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  
  // Frontend Technologies
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Webflow', category: 'Frontend' },
  
  // Design & Tools
  { name: 'Figma', category: 'Design' },
  { name: 'SOLIDWORKS', category: 'Design' },
  { name: 'AutoCAD', category: 'Design' },
  { name: 'Arduino', category: 'Tools' },
  { name: 'Auth0', category: 'Tools' },
  
  // Project Management
  { name: 'JIRA', category: 'Management' },
  { name: 'Miro', category: 'Management' },
  
  // Other Skills
  { name: 'SEO', category: 'Marketing' }
];

export default function SkillsScroll() {
  // Split skills into two groups
  const halfLength = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfLength);
  const secondHalf = skills.slice(halfLength);

  // Duplicate each half multiple times for smoother scrolling
  const extendedFirstHalf = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
  const extendedSecondHalf = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div className="w-full py-8">
      <h3 className="text-4xl font-bold text-center mb-12">Skills</h3>
      <div className="space-y-8">
        {/* First Row */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll-left flex gap-4 whitespace-nowrap">
            {extendedFirstHalf.map((skill, index) => (
              <div
                key={`${skill.name}-${index}-first`}
                className="inline-flex flex-col items-center rounded-lg p-4 min-w-[120px]"
              >
                <span className="text-blue-400 text-sm mb-1">{skill.category}</span>
                <span className="text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll-right flex gap-4 whitespace-nowrap">
            {extendedSecondHalf.map((skill, index) => (
              <div
                key={`${skill.name}-${index}-second`}
                className="inline-flex flex-col items-center rounded-lg p-4 min-w-[120px]"
              >
                <span className="text-blue-400 text-sm mb-1">{skill.category}</span>
                <span className="text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
} 