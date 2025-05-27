import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function SnoozyFlickz() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Snoozy Flickz</h2>
          {/* Add your content here */}
        </div>
      </section>
    </main>
  )
} 