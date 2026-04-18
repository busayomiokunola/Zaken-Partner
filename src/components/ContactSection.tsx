import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const ContactSection = () => {
  const [result, setResult] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ff1dd679-bd74-4ec5-b69a-b482916b5b61");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult({
        message: "Your message has been sent. We'll be in touch shortly.",
        type: "success",
      });
      event.target.reset();
    } else {
      setResult({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => setResult({ message: "", type: null }), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Toast */}
      <AnimatePresence>
        {result.type && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`pointer-events-auto flex items-center gap-3 px-6 py-6 rounded-md shadow-lg border text-xs md:text-sm font-medium max-w-md w-[90%]
        ${
          result.type === "success"
            ? "border-[#5b7158] text-[#76ac6f] bg-black/90"
            : "bg-white border-red-500 text-red-500"
        }`}
            >
              {result.type === "success" ? (
                <CheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 shrink-0" />
              )}
              <span>{result.message}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-white text-black">
        <div>
          <div className="flex-col relative bg-contact-bg w-full md:h-[300px] h-[200px] bg-cover bg-center flex items-center justify-center mt-16">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-lg tracking-widest"
            >
              CONTACT US
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-inter relative z-10 font-medium tracking-wide text-white text-3xl md:text-4xl"
            >
              Get in touch with us
            </motion.h1>
          </div>
        </div>

        <div className="container items-center">
          <p className="container text-sm md:text-lg max-w-2xl pb-20 leading-relaxed text-center mx-auto mt-20">
            Whether you have questions, want to discuss your business, or just
            want to say hi, we're here to listen. Fill out the form below.
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="container max-w-lg mx-auto items-center p-10 md:mb-30"
            >
              <h2 className="text-xl font-bold mb-5 items-start">
                <span className="text-[#5b7158]">ZAKEN </span>Strategic Partner
              </h2>
              <h2 className="font-medium">
                Bridging the gap between vision and execution.
              </h2>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="container max-w-xl p-10 mx-auto mb-20 pb-20 border-border md:bg-muted-foreground/5 rounded-md"
            >
              <h2 className="text-xl font-bold mb-5 items-start">
                Contact Form
              </h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="flex md:flex-row flex-col gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your First Name"
                      className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    placeholder="Your Message"
                    className="mt-1 resize-none block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows={8}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#5b7158] text-white  hover:bg-[#4a5f48] py-2 px-8 text-sm font-medium"
                  >
                    <p className="transition-colors hover:border-b hover:border-white ease-in-out duration-500">
                      Send
                    </p>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactSection;
