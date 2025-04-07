import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <GradientBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <section className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight">
                Hey, I&apos;m <span className="font-bold">Joel Kayyalakam</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Computer Science Student at the University of Guelph
              </p>
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
