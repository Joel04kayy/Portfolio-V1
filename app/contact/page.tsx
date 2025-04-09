'use client';

import { FormEvent, useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:joel04kayy@gmail.com?subject=Portfolio Contact - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <main className="min-h-screen text-white relative flex flex-col">
      <AnimatedBackground />
      <Navbar />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
      </div>
      
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 -mt-20">
        <div className="max-w-2xl w-full">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700/50 border-gray-600 text-white p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700/50 border-gray-600 text-white p-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700/50 border-gray-600 text-white p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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