import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function WorkTerm1() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Work Term 1 Report</h1>
          
          {/* Collapsible Introduction Section */}
          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-[#1ca0f4]">
                <Image
                  src="/UOGlogo.jpeg"
                  alt="University of Guelph Logo"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">University of Guelph</h2>
                <h3 className="text-xl text-[#1ca0f4] mb-2">Website Training & Support Specialist</h3>
                <p className="text-gray-300 mb-2">January 2025 - April 2025</p>
                <p className="text-gray-300">Co-op Work Term 1</p>
              </div>
            </div>
          </div>

          {/* Main Report Content */}
          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg">
            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Introduction</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    [Your introduction text will go here. This should provide an overview of your work term experience and what readers can expect from this report.]
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">About the Employer</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    [Information about the University of Guelph, including:
                    - Brief history and mission
                    - Department/team structure
                    - Key projects and initiatives
                    - Your specific team's role]
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Job Description</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    [Detailed job description including:
                    - Primary responsibilities
                    - Daily tasks and activities
                    - Tools and technologies used
                    - Team collaboration aspects]
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Goals</h3>
                <div className="prose prose-invert max-w-none">
                  <h4 className="text-xl font-semibold mb-2">Learning Goals</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>[Goal 1]</li>
                    <li>[Goal 2]</li>
                    <li>[Goal 3]</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-2">Achievements</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>[Achievement 1]</li>
                    <li>[Achievement 2]</li>
                    <li>[Achievement 3]</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Conclusions</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    [Your conclusions and reflections on:
                    - Skills developed
                    - Challenges overcome
                    - Lessons learned
                    - Future career impact]
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Acknowledgements</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    [Your acknowledgements to:
                    - Supervisor and team members
                    - University support staff
                    - Any other significant contributors]
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 