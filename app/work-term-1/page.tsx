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
                    During my work term at the University of Guelph's Computing & Communications Services (CCS) department, I served as a Website Training & Support Specialist Co-op. This role provided me with valuable experience in web platform management, client support, and digital accessibility. Throughout my term, I balanced technical responsibilities with user education, focusing on making complex web technologies accessible to non-technical users while ensuring compliance with accessibility standards. My position was instrumental in bridging the gap between technical systems and end-users, ensuring that university departments could effectively manage their digital presence.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">About the Employer</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    The University of Guelph's Computing & Communications Services (CCS) serves as the central IT department, providing essential technology infrastructure and services to the university community. CCS operates under six core values: Service Culture, Integrity, Individual Leadership, Teamwork, Agility, and Communication. The Web & Development Solutions team, where I was placed, specializes in delivering and maintaining websites using Drupal, Content Hub, and SharePoint platforms. The team provides comprehensive services including hosting, support, training, and security maintenance, ensuring all campus websites maintain a standardized, U of G branded, responsive, and AODA-compliant presence. This commitment to excellence in digital services helps maintain the university's reputation as a leading educational institution.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Job Description</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    As a Website Training & Support Specialist Co-op, my primary responsibilities included:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                    <li>Delivering expert training and technical support for Drupal, Content Hub, and SharePoint platforms to enhance client proficiency and platform efficiency</li>
                    <li>Developing comprehensive documentation, release notes, and training materials to ensure clarity and accessibility for users</li>
                    <li>Conducting thorough accessibility audits and collaborating with developers to resolve issues, ensuring compliance with AODA standards</li>
                    <li>Providing comprehensive website and content management support to campus clients</li>
                    <li>Participating in weekly Agile Scrum development processes to streamline workflows and improve system usability</li>
                    <li>Managing client design and customization requests efficiently within the Agile framework</li>
                    <li>Handling client queries and resolving technical issues promptly</li>
                    <li>Collaborating with developers to identify and fix bugs in the tracking system</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    A typical day might involve conducting one-on-one or group training sessions, updating documentation to reflect new features, assisting with website layouts and accessibility compliance, and documenting bugs in the tracking system. The role required a balance of technical knowledge and excellent communication skills to effectively support clients with varying levels of technical expertise.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Goals</h3>
                <div className="prose prose-invert max-w-none">
                  <h4 className="text-xl font-semibold mb-2">Learning Goals</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Develop public speaking and teaching skills through leading client training sessions on Content Hub, Drupal, and SharePoint</li>
                    <li>Enhance problem-solving abilities by handling complex support tickets and collaborating with team members</li>
                    <li>Improve time management and organizational skills while managing multiple client requests across different platforms</li>
                    <li>Strengthen interpersonal communication skills in managing client expectations and handling complex website changes</li>
                    <li>Master the Content Hub migration process and best practices for maintaining data integrity and accessibility</li>
                    <li>Develop expertise in web accessibility standards and implementation</li>
                    <li>Enhance documentation and technical writing skills</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-2">Achievements</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Successfully delivered multiple training sessions, receiving positive feedback from clients</li>
                    <li>Created and maintained comprehensive documentation for platform features and updates</li>
                    <li>Conducted accessibility audits and implemented solutions to ensure AODA and WCAG 2.0 compliance</li>
                    <li>Successfully completed multiple website migrations while maintaining data integrity</li>
                    <li>Developed strong client relationships through effective communication and support</li>
                    <li>Streamlined workflows and improved system usability through Agile Scrum participation</li>
                    <li>Enhanced platform efficiency through expert training and technical support</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Learning Goals Achievement</h3>
                <div className="prose prose-invert max-w-none">
                  <h4 className="text-xl font-semibold mb-2">Oral Communication – Leading Client Training Sessions</h4>
                  <p className="text-gray-300 mb-4">
                    I successfully developed my public speaking and teaching skills by conducting numerous training sessions for clients on Drupal, Content Hub, and SharePoint platforms. Through careful preparation and clear communication, I made complex technical concepts accessible to non-technical users. The positive feedback received from multiple client sessions and the increased confidence shown by clients in managing their websites independently demonstrated the effectiveness of my training approach.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Problem-Solving – Handling Complex Tickets</h4>
                  <p className="text-gray-300 mb-4">
                    I significantly improved my problem-solving abilities by actively seeking out and successfully resolving challenging tickets in FootPrints. By stepping outside my comfort zone and utilizing resources like the wiki, I developed effective solutions for unfamiliar issues. Collaboration with team members enhanced my ability to tackle complex problems, and I gained confidence in handling similar issues independently.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Time Management – Managing Multiple Client Requests</h4>
                  <p className="text-gray-300 mb-4">
                    I strengthened my time management skills by efficiently handling multiple client requests across Drupal, SharePoint, and Content Hub platforms. Through effective prioritization and organization, I maintained consistent progress on all projects while meeting deadlines. The positive feedback received from both clients and team members validated my improved ability to manage multiple responsibilities effectively.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Client Communication – Managing Expectations</h4>
                  <p className="text-gray-300 mb-4">
                    I enhanced my interpersonal communication skills by effectively managing client expectations, particularly during complex website changes and issue resolution. By setting clear timelines and maintaining transparent communication, I ensured clients felt supported throughout their projects. The positive feedback received from clients on my communication approach demonstrated my growth in this area.
                  </p>

                  <h4 className="text-xl font-semibold mb-2">Content Hub Migration Process</h4>
                  <p className="text-gray-300 mb-4">
                    I developed comprehensive expertise in the Content Hub migration process, successfully guiding multiple departments through their transitions from Drupal. By implementing best practices and maintaining strict attention to data integrity and accessibility standards, I ensured smooth migrations. The successful completion of multiple full-site migrations, along with positive client feedback, demonstrated my mastery of this complex process.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Conclusions</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    This work term significantly enhanced my technical and professional skills. I developed expertise in web accessibility, content management systems, and technical communication. The experience taught me the importance of balancing technical knowledge with user-friendly communication, especially when working with non-technical clients. I learned to manage multiple priorities effectively while maintaining high-quality service standards. The exposure to Agile methodologies and team collaboration has prepared me well for future roles in technology and client support. This experience has reinforced my interest in web development and accessibility, and I look forward to applying these skills in future opportunities. The role provided valuable insights into the intersection of technology and user experience, emphasizing the importance of making complex systems accessible and user-friendly.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-[#1ca0f4]">Acknowledgements</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">
                    I would like to express my sincere gratitude to Vinod, my supervisor and the entire Developers Team at CCS for their guidance and support throughout my work term. Special thanks to the Manager of CCS Web & Development Solutions for providing valuable mentorship and opportunities for growth. I also appreciate the support from my co-op coordinator and the University of Guelph's Co-op Office for facilitating this valuable learning experience. The collaborative environment and commitment to excellence at CCS have been instrumental in my professional development.
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