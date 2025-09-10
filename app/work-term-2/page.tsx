import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function WorkTerm2() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Work Term 2 Report</h1>
          
          {/* Collapsible Introduction Section */}
          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-[#1ca0f4] hover:border-[#1ca0f4] hover:shadow-[0_0_15px_#1ca0f4] transition-all duration-300">
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
                <p className="text-gray-300 mb-2">May 2025 - August 2025</p>
                <p className="text-gray-300">Co-op Work Term 2</p>
              </div>
            </div>
          </div>

          {/* Main Report Content */}
          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg">
            <div className="space-y-8">
              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Introduction</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    During my second work term at the University of Guelph's Computing & Communications Services (CCS) department, I once again served as a Website Training & Support Specialist Co-op. While my position remained the same as my first placement, my responsibilities and contributions expanded significantly. This term, I took on greater leadership within Agile processes, delivering over 100 training sessions, running Scrum meetings, and playing a key role in the ongoing migration from Drupal 7 to Content Hub. I also created AODA-compliant video tutorials, updated training structures, and supported new website launches. This experience allowed me to strengthen my technical, communication, and leadership skills while continuing to bridge the gap between technical systems and end-users.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">About the Employer</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    The University of Guelph's Computing & Communications Services (CCS) serves as the central IT department, providing essential technology infrastructure and services to the university community. CCS operates under six core values: Service Culture, Integrity, Individual Leadership, Teamwork, Agility, and Communication. The Web & Development Solutions team, where I was placed, specializes in delivering and maintaining websites using Drupal, Content Hub, and SharePoint platforms. The team provides comprehensive services including hosting, support, training, and security maintenance, ensuring all campus websites maintain a standardized, U of G branded, responsive, and AODA-compliant presence. This commitment to excellence in digital services helps maintain the university's reputation as a leading educational institution.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Job Description</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    As a Website Training & Support Specialist Co-op, my primary responsibilities this term included:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                    <li>Delivering comprehensive training sessions and technical support for Drupal, Content Hub, and SharePoint platforms to enhance client proficiency</li>
                    <li>Creating and maintaining AODA-compliant training materials, including video tutorials and documentation for platform features</li>
                    <li>Conducting accessibility audits and collaborating with developers to resolve compliance issues and ensure AODA standards</li>
                    <li>Supporting website migration projects from legacy systems to modern platforms while maintaining data integrity</li>
                    <li>Facilitating Agile Scrum meetings and participating in development processes to improve team collaboration and workflow efficiency</li>
                    <li>Managing client requests for website design, customization, and content management support</li>
                    <li>Handling technical support tickets and client queries through the FootPrints system</li>
                    <li>Collaborating with developers to identify, troubleshoot, and resolve bugs across ContentHub, Drupal, and SharePoint systems</li>
                    <li>Updating training structures and materials to reflect evolving platform features and client needs</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    A typical day often involved facilitating or attending Scrum meetings, reviewing FootPrints tickets, conducting training sessions, creating video tutorials and documentation, and working on migration or accessibility projects. This required a strong balance of technical knowledge, leadership skills, and effective communication to support both clients and internal development teams.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Goals</h3>
                <div className="prose prose-invert max-w-none">
                  <h4 className="text-xl font-semibold mb-2">Learning Goals</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Build on problem-solving skills by analyzing recurring client issues and creating long-term solutions</li>
                    <li>Ensure accessibility and inclusivity in training by adapting materials for clients with varying technical backgrounds</li>
                    <li>Improve oral communication by creating AODA-compliant training videos for Drupal 7</li>
                    <li>Strengthen teamwork by collaborating more closely with developers through meetings, shadowing, and assisting with dev-related tasks</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-2">Achievements</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Delivered over 100 training sessions with consistently positive client feedback</li>
                    <li>Created multiple AODA-compliant training videos, including updated Content Hub tutorials and a Drupal 7 walkthrough</li>
                    <li>Eliminated the need for Drupal 7 live trainings by offering video-based resources instead</li>
                    <li>Redesigned Content Hub training into a two-part series (basic and advanced), making it easier for clients to learn progressively</li>
                    <li>Supported the launch of new websites such as Real Estate and GFIC</li>
                    <li>Assisted in migrations from Drupal 7 to Content Hub</li>
                    <li>Ran Scrum meetings, improving leadership and Agile team collaboration</li>
                    <li>Improved documentation and training resources, reducing repeat client issues</li>
                    <li>Built stronger collaboration with developers by participating in meetings and shadowing their work</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Learning Goals Achievement</h3>
                <div className="prose prose-invert max-w-none">
                  <h4 className="text-xl font-semibold mb-2">Critical & Creative Thinking – Problem Solving</h4>
                  <p className="text-gray-300 mb-4">
                    I strengthened my problem-solving skills by identifying root causes in recurring client issues and updating documentation and training materials to address them. Instead of just resolving tickets at face value, I focused on uncovering patterns and eliminating repeated barriers for clients. These long-term improvements reduced repeated support requests, improved overall efficiency, and helped clients feel more confident in using the platforms. I also learned to approach challenges more strategically by weighing short-term fixes against sustainable solutions, which improved both my technical and analytical thinking.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Global Understanding – Intercultural Competence</h4>
                  <p className="text-gray-300 mb-4">
                    I adapted training materials to meet the needs of both highly technical and less experienced users. By simplifying language, adding visuals, and restructuring longer sessions, I made training more accessible and inclusive for diverse audiences. This approach ensured that clients of varying experience levels could follow along more confidently. Feedback collected from surveys and individual conversations confirmed that the sessions were easier to understand and more engaging, particularly for clients who initially struggled with the platforms. This experience also helped me recognize the importance of cultural and experiential differences in learning styles, reinforcing the need for flexible communication strategies.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Communicating – Oral Communication</h4>
                  <p className="text-gray-300 mb-4">
                    I produced three comprehensive, AODA-compliant Drupal 7 training videos covering both basic and advanced features. These resources supported clients while also serving as onboarding material for future co-op students, ensuring continuity in training delivery. Creating the videos challenged me to simplify technical concepts without losing accuracy and to present them in a clear, approachable way. I also gained confidence in using video as a medium for technical training, which required balancing technical depth with strong presentation and communication skills. The positive feedback on the videos highlighted their effectiveness as both client-facing tools and internal resources.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Professional & Ethical Behaviour – Teamwork</h4>
                  <p className="text-gray-300 mb-4">
                    By attending developer meetings, shadowing colleagues, and assisting with smaller dev-related tasks, I developed a deeper understanding of the development side of the team. This allowed me to better align training resources with ongoing technical work and strengthened collaboration across roles. Building these connections helped me bridge the gap between developers and clients, ensuring that user-facing documentation and training reflected the latest updates and fixes. I also became more comfortable contributing in team discussions, asking questions, and offering input, which improved my ability to collaborate in a professional and respectful way. Overall, this goal helped me recognize the value of cross-functional teamwork and the importance of supporting coworkers in achieving shared objectives.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Conclusions</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    This work term allowed me to build on my first placement while taking on more advanced responsibilities and leadership opportunities. I developed greater expertise in training delivery, accessibility, and web platform management while also gaining valuable experience running Scrum meetings, creating training videos, and supporting new website launches. The term reinforced the importance of collaboration between technical and non-technical roles, as well as the need to make complex systems approachable for all users. Overall, this placement has further prepared me for future opportunities in web development, accessibility, and client support while strengthening both my technical and professional skills.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Acknowledgements</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    I would like to express my gratitude to the entire Developers Team at CCS for their continued guidance and support throughout my first and second work terms. Special thanks to my supervisor, Vinod, for providing mentorship and encouraging me to take on new leadership responsibilities. I would also like to thank my co-op coordinator and the University of Guelph's Co-op Office for facilitating this opportunity. The collaborative and supportive environment at CCS has once again been instrumental in my professional growth.
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
