import GradientBackground from '../components/GradientBackground'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen text-white relative">
      <GradientBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 text-lg">
              I&apos;m a passionate Computer Science student with a strong interest in software development and problem-solving. 
              I enjoy building web applications and exploring new technologies.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 