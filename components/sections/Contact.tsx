"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Instagram } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    // EmailJS configuration - moved outside try block for error logging
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS is not configured. Please set up your EmailJS credentials in .env.local file. " +
          "See EMAIL_SETUP.md for instructions."
        );
      }

      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all fields");
      }

      // Format message with name and email appended at the end
      const formattedMessage = `${formData.message}\n\n---\nName: ${formData.name}\nEmail: ${formData.email}`;

      // Send email using EmailJS with explicit template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formattedMessage, // Message with name and email appended
        reply_to: formData.email, // For reply-to header
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Check if email was sent successfully
      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error(`Email sending failed with status: ${result.status}`);
      }
    } catch (error: any) {
      console.error("Email sending failed:", error);
      
      // Log detailed error for debugging
      const errorDetails = {
        message: error?.message,
        text: error?.text,
        status: error?.status,
        serviceId: serviceId ? "Set" : "Missing",
        templateId: templateId ? "Set" : "Missing",
        publicKey: publicKey ? "Set" : "Missing",
      };
      console.error("Detailed error:", errorDetails);
      
      // Provide user-friendly error messages
      let errorMsg = "Failed to send message. ";
      
      if (!serviceId || !templateId || !publicKey) {
        errorMsg += "EmailJS is not configured. Please set up your EmailJS credentials in .env.local file. See EMAIL_SETUP.md for instructions.";
      } else if (error?.text) {
        // EmailJS specific error
        errorMsg += `EmailJS Error: ${error.text}`;
      } else if (error?.message) {
        if (error.message.includes("not configured")) {
          errorMsg += error.message;
        } else if (error.message.includes("Invalid") || error.message.includes("invalid")) {
          errorMsg += "Invalid EmailJS configuration. Please verify your Service ID, Template ID, and Public Key are correct.";
        } else if (error.message.includes("Network") || error.message.includes("network")) {
          errorMsg += "Network error. Please check your internet connection and try again.";
        } else {
          errorMsg += `Error: ${error.message}`;
        }
      } else {
        errorMsg += "An unexpected error occurred. Please try again or email directly at anandojha901@gmail.com";
      }
      
      setSubmitStatus("error");
      setErrorMessage(errorMsg);
      
      // Reset status after 8 seconds (longer for configuration errors)
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-slate-900 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get In Touch
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <motion.div
                className="group relative bg-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-slate-700 shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  borderColor: "rgb(244, 63, 94)",
                  boxShadow: "0 25px 50px rgba(244, 63, 94, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Animated Gradient Background - Like Skills section */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Glow Border Effect - Like Skills section */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
                      Contact Information
                    </h3>
                  </div>
                  <div className="space-y-4">
                  <motion.div
                    className="flex items-start cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Mail className="text-rose-500 dark:text-rose-400 mr-4 mt-1" size={20} />
                    </motion.div>
                    <div>
                      <p className="text-slate-100 font-bold text-lg mb-1" style={{ color: 'rgb(241, 245, 249)' }}>Email</p>
                      <motion.a
                        href="mailto:anandojha901@gmail.com"
                        className="text-rose-300 hover:text-rose-400 transition-colors glow-hover inline-block font-semibold text-base"
                        style={{ color: 'rgb(253, 164, 175)' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        anandojha901@gmail.com
                      </motion.a>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Phone className="text-rose-500 dark:text-rose-400 mr-4 mt-1" size={20} />
                    </motion.div>
                    <div>
                      <p className="text-slate-100 font-bold text-lg mb-1" style={{ color: 'rgb(241, 245, 249)' }}>Phone</p>
                      <p className="text-rose-300 font-semibold text-base" style={{ color: 'rgb(253, 164, 175)' }}>+91 9513251571</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <MapPin className="text-rose-500 mr-4 mt-1" size={20} />
                    </motion.div>
                    <div>
                      <p className="text-slate-100 font-bold text-lg mb-1" style={{ color: 'rgb(241, 245, 249)' }}>Location</p>
                      <p className="text-rose-300 font-semibold text-base" style={{ color: 'rgb(253, 164, 175)' }}>India</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Linkedin className="text-rose-500 mr-4 mt-1" size={20} />
                    </motion.div>
                    <div>
                      <p className="text-slate-100 font-bold text-lg mb-1" style={{ color: 'rgb(241, 245, 249)' }}>LinkedIn</p>
                      <motion.a
                        href="https://linkedin.com/in/anand-ojha-398052247"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-300 hover:text-rose-400 transition-colors glow-hover inline-block font-semibold text-base"
                        style={{ color: 'rgb(253, 164, 175)' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        linkedin.com/in/anand-ojha-398052247
                      </motion.a>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Instagram className="text-rose-500 mr-4 mt-1" size={20} />
                    </motion.div>
                    <div>
                      <p className="text-slate-100 font-bold text-lg mb-1" style={{ color: 'rgb(241, 245, 249)' }}>Instagram</p>
                      <motion.a
                        href="https://instagram.com/acutabove.2407_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-300 hover:text-rose-400 transition-colors glow-hover inline-block font-semibold text-base"
                        style={{ color: 'rgb(253, 164, 175)' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        @acutabove.2407_
                      </motion.a>
                    </div>
                  </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="group relative bg-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-slate-700 shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  borderColor: "rgb(244, 63, 94)",
                  boxShadow: "0 25px 50px rgba(244, 63, 94, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Animated Gradient Background - Like Skills section */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Glow Border Effect - Like Skills section */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Send className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                      Send Message
                    </h3>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {/* Hidden reply_to field for EmailJS - so replies go to the user's email */}
                  <input 
                    type="hidden" 
                    name="reply_to" 
                    value={formData.email}
                    key={formData.email} 
                  />
                  
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-base sm:text-lg font-bold text-slate-100 mb-2"
                      style={{ color: 'rgb(241, 245, 249)' }}
                    >
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-slate-800 text-slate-100 transition-all glow-hover text-sm sm:text-base font-semibold"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(225, 29, 72, 0.3)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-base sm:text-lg font-bold text-slate-100 mb-2"
                      style={{ color: 'rgb(241, 245, 249)' }}
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-slate-800 text-slate-100 transition-all glow-hover text-sm sm:text-base font-semibold"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(225, 29, 72, 0.3)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-base sm:text-lg font-bold text-slate-100 mb-2"
                      style={{ color: 'rgb(241, 245, 249)' }}
                    >
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 border border-slate-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-slate-800 text-slate-100 resize-none transition-all glow-hover text-sm sm:text-base font-semibold"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(225, 29, 72, 0.3)" }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-lg font-semibold hover:from-rose-700 hover:to-red-700 transition-all duration-200 flex items-center justify-center glow-hover hover-glow relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle size={18} className="mr-2 relative z-10" />
                        <span className="relative z-10">Message Sent!</span>
                      </>
                    ) : submitStatus === "error" ? (
                      <>
                        <AlertCircle size={18} className="mr-2 relative z-10" />
                        <span className="relative z-10">Failed to Send</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2 relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center"
                    >
                      ✓ Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  
                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                        >
                          <div className="flex items-start gap-2">
                            <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-semibold mb-1">Failed to send message</p>
                              <p className="text-xs leading-relaxed">{errorMessage || "An error occurred. Please try again or email directly at anandojha901@gmail.com"}</p>
                              {errorMessage.includes("not configured") && (
                                <p className="text-xs mt-2 text-red-300">
                                  💡 Tip: Check the browser console (F12) for more details. Make sure you&apos;ve created a <code className="bg-red-500/20 px-1 rounded">.env.local</code> file with your EmailJS credentials.
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

