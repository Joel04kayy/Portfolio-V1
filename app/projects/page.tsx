import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function Projects() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-300">Description of your project goes here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">JavaScript</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">TypeScript</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">React</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">Next.js</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">HTML</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">CSS</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">Tailwind CSS</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-gray-300">Git</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 