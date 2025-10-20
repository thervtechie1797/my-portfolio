import React, {useState} from 'react'
import emailjs from "@emailjs/browser"
import Container from '../layout/Container'
import MessageGenerator from '../genAI/MessageGenerator'


const Contact = () => {
  const [message, setMessage] = useState("");
  const maxChars = 300;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

      emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then(()=> {
        alert("Message sent successfully!");
        e.target.reset();
        setMessage("");
      }).catch((err)=> {
        console.error(err);
        alert("Failed to send message. Please try again later.");
      });
  };
  
  return (
     <Container>
     <section className="relative mt-16 py-20 px-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl shadow-xl overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Contact <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-lg text-gray-700 mb-10">
           I'd love to hear from you — whether it’s a project, collaboration, or just a friendly hello!
        </p>

        {/* Contact info */}

        <div className="text-gray-700 mb-10"> 
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a 
              href="mailto:rohitv1797@gmail.com" 
              className="text-blue-600 hover:underline"
            >
              rohitv1797@gmail.com
            </a>
          </p>

          <p>
            <span className="font-medium">Github:</span>{" "}
            <a 
              href="https://github.com/thervtechie1797" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              thervtechie1797
            </a>
          </p>
          <p>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a 
              href="https://www.linkedin.com/in/rohitv1797/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
             rohitv1797 
            </a>
          </p>

       </div> 

       <form className='space-y-6 text-left bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-xl mx-auto' onSubmit={handleSubmit}>
          <div>
            <label className='block text-gray-800 font-medium mb-2' htmlFor='name'>
              Name
            </label>
            <input 
            id='name'
            type='text' 
            name='name'
            placeholder='Enter Your Name' 
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-400 transition' />
          </div>
          
          <div>
            <label className='block text-gray-800 font-medium mb-2' htmlFor='email'>
              Email
            </label>
            <input 
            id='email'
            name='email'
            type='email' 
            placeholder='Enter your email' 
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-400 transition' />
          </div>

          <MessageGenerator onMsgGenerated={(msg)=> setMessage(msg)} />
          
          <div>
            <label className='block text-gray-800 font-medium mb-2' htmlFor='message'>
              Message
            </label>
            <textarea 
            id='message'
            name='message'
            rows="5"
            maxLength={maxChars}
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            placeholder='Write your message here...' 
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-400 transition'
            required ></textarea>
            <p className='text-sm text-gray-500 text-right mt-1'>
              {message.length}/{maxChars} characters
            </p>
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white font-semibold px-3  py-3 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-300'>
            Send Message
          </button>
       </form>

      </div>
     </section>
    </Container>
  )
}

export default Contact