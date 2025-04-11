import GradientBackground from '../components/GradientBackground'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen text-white relative">
      <GradientBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                I am a third-year Computer Science student at the University of Guelph with a minor in Project Management, passionate about building innovative digital solutions that bridge technology and user needs. As a Full-stack Developer, I&apos;ve led teams to redesign and develop dynamic websites for organizations like More Than Circumstance and Evstry, leveraging tools like React, Next.js, and Webflow to enhance functionality and user engagement. My work spans integrating RESTful APIs, optimizing SEO strategies, and ensuring accessibility compliance, all while collaborating closely with cross-functional teams to deliver impactful results.
              </p>
              
              <p>
                Beyond my professional projects, I run a side business building custom computer setups and troubleshooting hardware-software challenges, which has honed my technical problem-solving skills and deepened my understanding of system optimization. Whether crafting gaming rigs or workstations for demanding software like SolidWorks, I thrive on creating efficient, aesthetically pleasing solutions tailored to client needs. My curiosity extends to sim racing, where I&apos;m designing my own racing simulator—a testament to my love for blending creativity with technology.
              </p>
              
              <p>
                Driven by a hands-on approach, I enjoy tackling projects that demand both technical precision and collaborative innovation, from developing a 3D Pong game in Python to constructing full-stack e-commerce platforms. With a graduation date set for 2027, I&apos;m eager to apply my skills in software development, team leadership, and project management to new challenges—especially those that push me to learn and grow alongside industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 