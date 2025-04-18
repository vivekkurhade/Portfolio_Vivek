import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j028q18', // Your Service ID
        'template_4pa8wx5', // Your Template ID
        e.target,
        'Jn9A9ZUrYUvyvRE7m' // Your User ID
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Oops! Something went wrong.');
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Contact Me</h2>

        <form
          className="flex flex-col space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Send Message
          </button>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-6 text-xl sm:text-2xl text-gray-700">
            <a
              href="https://github.com/vivekkurhade"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-kurhade-05a30927b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            {/* Uncomment if needed
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            */}
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <div
            className={`mt-6 text-center text-sm sm:text-lg font-semibold ${
              status === 'Message sent successfully!'
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
