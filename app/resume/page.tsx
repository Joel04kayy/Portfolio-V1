import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function Resume() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 