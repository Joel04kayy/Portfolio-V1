import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function Experience() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Job Title</h3>
              <p className="text-gray-300">Company Name</p>
              <p className="text-gray-400 text-sm">Duration</p>
              <ul className="mt-4 list-disc list-inside text-gray-300">
                <li>Key responsibility or achievement</li>
                <li>Another key responsibility or achievement</li>
                <li>One more key responsibility or achievement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 