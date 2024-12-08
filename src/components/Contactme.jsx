import React,  { useRef } from "react";
import "../index.css";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//style={{ backgroundImage: `url(${Bgsvg})` }}

function Contactme() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_9yzsrik', 'template_g7r4i5c', form.current, {
      publicKey: 'FvQXz_lEt-jHZxrYu',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email Sending Successfull!!!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'bg-green-800 bg-opacity-50 text-white text-sm',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Email Sending Fail!!!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'bg-red-800 bg-opacity-50 text-white text-sm',
            progress: undefined,
          });
        },
      );
  };

  return (
    <section className="contact-me contactme" >
      <div className="bgimage">
        <div className="bgplanet pt-12">
          <div className="flex flex-col justify-center mx-6 mt-10 md:mx-16 lg:mx-44 px-4 md:px-16 lg:px-72">
            <motion.form ref={form} onSubmit={sendEmail} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="flex flex-col rounded-lg bg-black/5 backdrop-blur-sm px-6 md:px-10 lg:px-16 pb-10 ">
              <h2 className="mt-8 mb-10 text-center text-2xl md:text-3xl lg:text-4xl text-white">
                Contact Me
              </h2>
              <div className="mb-4">
                <p className="font-serif text-white">
                  Let’s connect! Feel free to reach out for collaborations,
                  inquiries, or just to say hello. I’d love to hear from you!
                </p>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-serif text-sm md:text-base text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="border border-slate-400 w-full h-8 px-2 text-sm md:text-md font-serif rounded-lg bg-white/5 backdrop-blur-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-serif text-sm md:text-base text-white">
                  Your Email
                </label>
                <input
                  type="text"
                  name="user_email"
                  className="border border-slate-400 w-full h-8 px-2 text-sm md:text-md font-serif rounded-lg bg-white/5 backdrop-blur-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-serif text-sm md:text-base text-white">
                  Your Message
                </label>
                <textarea name="message"  className="border border-slate-400 w-full h-24 md:h-32 px-2 text-sm md:text-md font-serif rounded-lg bg-white/5 backdrop-blur-sm" />
              </div>
              <div className="flex flex-row w-full justify-center">
                <motion.button
                value="Send"
                  className="sendbtn rounded-lg font-semibold text-lg py-2 px-6 md:px-8 lg:px-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Send
                </motion.button>
              </div>
            </motion.form>
          </div>
          <ToastContainer/>
        </div>
      </div>
    </section>
  );
}

export default Contactme;
