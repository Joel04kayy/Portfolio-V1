import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function WorkTerm1() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Work Term 1 Report</h1>
          
          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">University of Guelph - Website Training & Support Specialist</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">Introduction</h3>
                <p className="text-gray-300">
                  [Your introduction text will go here]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">About the Employer</h3>
                <p className="text-gray-300">
                  [Information about the University of Guelph will go here]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Job Description</h3>
                <p className="text-gray-300">
                  [Detailed job description will go here]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Goals</h3>
                <p className="text-gray-300">
                  [Your goals for the work term will go here]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Conclusions</h3>
                <p className="text-gray-300">
                  [Your conclusions and reflections will go here]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Acknowledgements</h3>
                <p className="text-gray-300">
                  [Your acknowledgements will go here]
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 