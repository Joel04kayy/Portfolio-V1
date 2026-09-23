import Navbar from '../components/Navbar'
import Image from 'next/image'

const learningGoals = [
  {
    title: 'Oral Communication',
    focus: 'Communicating technical concepts to technical and non-technical stakeholders',
    action: 'Actively participate in project meetings, provide status updates, and explain how Power Automate workflows, D365 integrations, OCR solutions, and AI agents function in business terms rather than technical jargon.',
    reflection: 'Throughout the term, I regularly discussed project progress with my manager and coworkers and participated in meetings related to ERP automation and AI solutions. I became more confident explaining technical concepts such as Power Automate workflows, Dynamics 365 integrations, and AI agents to both technical and non-technical stakeholders.',
  },
  {
    title: 'Problem Solving',
    focus: 'Independently troubleshooting ERP integrations, automation, and AI solutions',
    action: 'Develop a deeper understanding of D365 F&O, Dataverse, Power Automate, Copilot Studio, APIs, and data entities to investigate issues in sales order creation, customer account identification, OCR extraction, and system integrations.',
    reflection: 'I spent a significant amount of time troubleshooting Power Automate flows, D365 integrations, OCR processing, and sales order automation issues. These experiences helped me become more independent in identifying root causes, testing solutions, and resolving complex technical problems.',
  },
  {
    title: 'Organization & Time Management',
    focus: 'Managing multiple development projects and deadlines',
    action: 'Use task tracking, calendars, and project notes to break larger initiatives, like the Sales Order Creation Agent, into manageable milestones with clear deliverables.',
    reflection: 'I successfully balanced development, testing, documentation, and support activities across multiple projects throughout the term. Breaking large projects into smaller tasks and staying organized helped me meet deadlines while maintaining the quality of my work.',
  },
  {
    title: 'Written Communication',
    focus: 'Creating professional documentation and technical writing',
    action: 'Write concise emails, Teams messages, process documentation, workflow diagrams, and mapping documents, reviewing communications for clarity before sending.',
    reflection: 'I regularly created technical documentation, process mappings, project summaries, and professional communications through email and Microsoft Teams. Over time, I improved my ability to write clear and concise instructions that could be understood by both technical and business users.',
  },
  {
    title: 'Historical & Global Understanding',
    focus: 'Understanding how enterprise systems and business processes evolve',
    action: 'Learn how D365, ERP processes, and customer workflows have evolved, and identify where automation and AI can add value while respecting established business practices.',
    reflection: 'Working with Dynamics 365 and existing business processes helped me better understand how enterprise systems evolve over time and why current workflows exist. This knowledge allowed me to design automation and AI solutions that aligned with both business requirements and established processes.',
  },
]

const projects = [
  {
    label: 'SO',
    title: 'Sales Order Creation Agent',
    description: 'Designed and iterated on an AI agent that reads a customer purchase order PDF, extracts structured data, and creates an unconfirmed sales order directly in D365 F&O.',
    items: [
      'Wrote and refined strict agent instructions covering validation, HALT conditions, and security boundaries.',
      'Diagnosed a recurring quantity-extraction bug by authoring explicit Quantity Extraction Rules knowledge and enforcing it as authoritative.',
      'Demoed the agent to a stakeholder and followed up on feedback.',
      'Explored reusing the same agent across a second workflow to report daily sales-order creation summaries.',
    ],
  },
  {
    label: 'OCR',
    title: 'OCR & Purchase Order Data Extraction',
    description: 'Built the extraction layer that converts messy OCR text from customer purchase orders into clean, structured JSON for downstream automation.',
    items: [
      'Engineered prompts with strict anti-hallucination and grounding rules so the model never invents values.',
      'Designed Ship-To address extraction rules used later to match customers in D365.',
      'Fixed schema-validation failures by making JSON fields nullable.',
      'Debugged OData filter logic, including eq versus contains, for matching addresses against PartyLocationPostalAddressesV2.',
    ],
  },
  {
    label: 'D3',
    title: 'D365 Entity Mapping for Customer & Location Lookup',
    description: 'Mapped the chain of D365 data entities needed to turn a shipping address into a confirmed customer account.',
    items: [
      'Traced the lookup path from Ship-To Address to PartyLocationPostalAddressesV2, Location ID, Party Number, CustomersV3, and Customer Account.',
      'Built mapping workbooks covering header, line, address, delivery, and pricing FastTabs.',
      'Resolved broken action references and expression errors between Power Automate steps.',
    ],
  },
  {
    label: 'IPA',
    title: 'D365 Intelligent Process Automation Agent',
    description: 'Researched and prototyped a longer-term vision: an AI agent that selects the right Task Recorder script from a library and executes it via Power Automate Desktop.',
    items: [
      'Converted a Task Recorder script for Production Order navigation into a working Power Automate Desktop flow using the Recorder.',
      'Designed the cloud-flow-to-desktop-flow trigger architecture.',
      'Evaluated commercial alternatives such as Elevaite365 and Leapwork for AI-driven D365 test automation and summarized the findings for my manager.',
    ],
  },
]

export default function WorkTerm3() {
  return (
    <main className="min-h-screen text-white relative">
      <Navbar />

      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Work Term 3 Report</h1>

          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 shrink-0 flex items-center justify-center overflow-hidden rounded-full border-4 border-[#1ca0f4] bg-white p-4 hover:shadow-[0_0_15px_#1ca0f4] transition-all duration-300">
                <Image
                  src="/HPSlogo.jpeg"
                  alt="Hammond Power Solutions logo"
                  width={112}
                  height={112}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">Hammond Power Solutions</h2>
                <h3 className="text-xl text-[#1ca0f4] mb-2">Business Systems IT Co-op</h3>
                <p className="text-gray-300 mb-2">May 2026 - August 2026</p>
                <p className="text-gray-300">Co-op Work Term 3</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1e2538] rounded-lg p-8 shadow-lg">
            <div className="space-y-8">
              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Introduction</h3>
                <p className="text-gray-300">During this work term, I joined Hammond Power Solutions (HPS) as a Business Systems IT Co-op, working alongside the Business Systems Team on enterprise automation initiatives built around Dynamics 365 Finance & Operations (D365 F&O), the Microsoft Power Platform, and applied AI. Over the course of the term, I moved from writing individual Power Automate expressions to shaping the architecture of an AI-driven automation agent. This journey provided valuable lessons in technology, communication, problem-solving, and professional growth.</p>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Information About the Employer</h3>
                <p className="text-gray-300">Hammond Power Solutions is a Canadian manufacturer of dry-type transformers and power quality equipment, serving industrial, commercial, renewable energy, and infrastructure customers. Behind the manufacturing floor, HPS runs on a modern enterprise technology stack including Dynamics 365 Finance & Operations, the Power Platform, and Copilot-based AI tools to manage sales orders, production, and customer data at scale.</p>
                <p className="text-gray-300 mt-4">I worked within the Business Systems Team, reporting to Vikas Mishra, alongside colleagues including Navdeep Singh, Daunte Aboubakar, Antonio Gonzalez, Chris Mara, Jay Srinivasan, Danny Chung, and others who supported my onboarding and project work throughout the term.</p>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Goals & Reflections</h3>
                <div className="space-y-6">
                  {learningGoals.map((goal) => (
                    <div key={goal.title}>
                      <h4 className="text-xl font-semibold mb-2">{goal.title}</h4>
                      <p className="text-[#1ca0f4] font-medium mb-2">{goal.focus}</p>
                      <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Action plan:</span> {goal.action}</p>
                      <p className="text-gray-300"><span className="font-semibold text-white">Reflection:</span> {goal.reflection}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Job Description & Key Projects</h3>
                <p className="text-gray-300 mb-6">My work centred on one central problem: reducing manual data entry in D365 by teaching systems to read, understand, and act on business documents. Four projects captured the arc of that work.</p>
                <div className="space-y-6">
                  {projects.map((project) => (
                    <div key={project.label}>
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-gray-300 mb-3">{project.description}</p>
                      <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        {project.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-white/10 bg-slate-950/20 p-5">
                  <h4 className="text-xl font-semibold mb-3">How It Fits Together</h4>
                  <p className="text-gray-300">Customer PO (PDF/Email) &rarr; OCR + AI Extraction &rarr; D365 Entity Lookup &rarr; Sales Order Agent &rarr; Sales Order Created in D365</p>
                  <p className="text-gray-400 mt-3">Power Automate Cloud, Power Automate Desktop, Dynamics 365 F&O, Copilot Studio and AI Agents, OData/API Integration, AI Builder OCR, Prompt Engineering, and Excel Data Mapping.</p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Current Project Status</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2"><span className="text-[#1ca0f4]">IN PROGRESS</span> Sales Order Creation Agent</h4>
                    <p className="text-gray-300">The agent went live for UAT testing in June, shared with stakeholders through Copilot Studio and Teams, and was actively used to generate automated rejection notices for purchase orders exceeding its current five-line-item limit. The next phase is rebuilding the data path with Navdeep Singh so that Power Apps tables stage extracted purchase-order data and Power Automate inserts records into D365 through OData rather than UI automation. Customer matching is also being refined by extracting the customer name, querying D365 customers, and resolving the correct ship-to address.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2"><span className="text-[#1ca0f4]">THIS WEEK</span> D365 Intelligent Process Automation & Validation Agent</h4>
                    <p className="text-gray-300">The architecture is defined end to end: Task Recorder script, SharePoint or OneDrive repository, parser and normalizer, Dataverse process repository, Copilot Studio agent, Power Automate or Power Automate Desktop execution, validation engine, and Dataverse logs with Teams and Power BI reporting. Phase 1 focuses on collecting five to ten high-value process recordings and connecting them to Copilot Studio as an approved, closed knowledge source.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2"><span className="text-[#1ca0f4]">SCOPING</span> PO Line-Received Notifications</h4>
                    <p className="text-gray-300">A newer request involved automatically notifying the purchase-order buyer whenever one or more PO lines are received in D365. After clarifying that the goal was an internal buyer notification rather than a customer-facing acknowledgement, I began investigating whether D365 Business Events could trigger the notification.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Conclusions</h3>
                <p className="text-gray-300">This work term gave me hands-on experience turning a real business problem, manual sales-order entry, into an end-to-end automated pipeline spanning OCR, AI agents, and enterprise ERP data. Along the way I strengthened my ability to troubleshoot independently, communicate technical work clearly to non-technical stakeholders, and stay organized across several concurrent projects. This term helped me design an AI-driven automation pipeline that turns a customer purchase order into a sales order in Dynamics 365 while growing significantly as a communicator and problem-solver.</p>
              </section>

              <section>
                <h3 className="text-3xl font-semibold mb-4 text-[#1ca0f4]">Acknowledgements</h3>
                <p className="text-gray-300">I would like to thank my manager, Vikas Mishra, and the entire Business Systems Team at Hammond Power Solutions, including Navdeep Singh and my broader coworkers, for their mentorship, patience, and willingness to answer every question as I learned Dynamics 365, Power Automate, and applied AI on the job.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
