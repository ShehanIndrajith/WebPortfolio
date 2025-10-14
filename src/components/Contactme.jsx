import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SendIcon, CheckCircleIcon, AlertCircleIcon, MailIcon } from "lucide-react";

export function Contactme() {
  const form = useRef();
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputClasses =
    "w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300";

  const sendEmail = (e) => {
  e.preventDefault();
  setSubmitting(true);

  const currentTime = new Date().toLocaleString();
  const timeInput = document.createElement("input");
  timeInput.type = "hidden";
  timeInput.name = "time";
  timeInput.value = currentTime;
  form.current.appendChild(timeInput);

  // Send main email to yourself
  emailjs
    .sendForm("service_x6aqc89", "template_ol5gl6a", form.current, {
      publicKey: "3KuHZIW4CF_MD5qFM",
    })
    .then(() => {
      // Send auto-reply to user
      emailjs.sendForm("service_x6aqc89", "template_0nay7xl", form.current, {
        publicKey: "3KuHZIW4CF_MD5qFM",
      }).then(() => {
        toast.success("Email Sent & Auto-reply Sent!", {
          position: "top-right",
          autoClose: 3000,
          className: "bg-green-800 bg-opacity-50 text-white text-sm",
        });
        setSubmitted(true);
        setSubmitting(false);
        timeInput.remove();
      });
    })
    .catch((error) => {
      console.log("FAILED...", error.text);
      toast.error("Email Sending Failed!", {
        position: "top-right",
        autoClose: 3000,
        className: "bg-red-800 bg-opacity-50 text-white text-sm",
      });
      setSubmitting(false);
      timeInput.remove();
    });
};

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Full-width Background elements */}
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
    <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-pink-600/20 blur-3xl"></div>
    <div className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]">
      <motion.div
        className="absolute inset-0 bg-slate-900/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  </div>


      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <MailIcon className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="inline-block relative">
              Get In Touch
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </span>
          </h2>
        </div>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Send me a message!
        </p>
      </motion.div>

      {/* Form Card */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-indigo-500/30 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 border border-purple-500/30 rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="backdrop-blur-xl bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-1">
            <div className="bg-slate-800/90 py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-sm text-slate-400">shehanindrajith06@gmail.com</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 md:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-300 mb-6">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium"
                  onClick={() => window.location.reload()}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-sm font-medium text-slate-300 mb-1"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          id={field}
                          required
                          className={inputClasses}
                          placeholder={field === "email" ? "your.email@example.com" : "Your name"}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                        />
                        <AnimatedBorder active={focused === field} />
                      </motion.div>
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={inputClasses + " resize-none"}
                      placeholder="Tell me about your project or opportunity..."
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                    <AnimatedBorder active={focused === "message"} />
                  </motion.div>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-medium flex items-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {submitting ? (
                      <>
                        Processing...
                        <LoadingSpinner />
                      </>
                    ) : (
                      <>
                        Send Message <SendIcon className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
}

function AnimatedBorder({ active }) {
  return (
    <motion.span
      className="absolute inset-0 rounded-lg pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: active ? 1 : 0,
        boxShadow: active ? "0 0 0 2px rgba(99, 102, 241, 0.6)" : "none",
      }}
      transition={{ duration: 0.2 }}
    />
  );
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export default Contactme;
