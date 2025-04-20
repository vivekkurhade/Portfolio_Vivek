import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j028q18',
      'template_4pa8wx5',
      e.target,
      'Jn9A9ZUrYUvyvRE7m'
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('Oops! Something went wrong.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 
        className="text-4xl font-bold text-center mb-12 text-white" 
        data-aos="fade-up"
        style={{
          textShadow: '0 0 1px rgba(255,255,255,0.7), 0 0 6px rgba(255,255,255,0.5)',
          fontFamily: '"Special Gothic Expanded One", sans-serif',
        }}
      >
        Contact Me
      </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-indigo-500/50"
          >
            Send Message
          </button>

          <div className="flex justify-center mt-6 space-x-6 text-2xl text-white/80">
            <a href="https://github.com/vivekkurhade" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vivek-kurhade-05a30927b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </form>

        {status && (
          <p className={`mt-6 text-center text-lg font-medium ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
