import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <GradientBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-blue-400">Joel Kayyalakam</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Computer Science Student | Full Stack Developer | Tech Enthusiast
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

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 text-lg">
              I&apos;m a passionate Computer Science student with a strong interest in software development and problem-solving. 
              I enjoy building web applications and exploring new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Add your skills here */}
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your projects here */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-300">Description of your project goes here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
