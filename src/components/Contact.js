import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_wosibme", 
        "template_nlrz5qa", 
        form.current, 
        "XM0vUJht0Dehyz3cc"
      )
      .then(
        () => {
          setIsSubmitting(false);
          alert("Message sent successfully!");
          setFormState({ name: "", email: "", message: "" });
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          alert("Something went wrong. Please try again.");
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 w-full ">Contact</h1>
      <h3 className="text-gray-500 text-sm">Get in touch</h3>
      <h1 className="text-4xl font-bold text-gray-900 mt-1">Contact Me</h1>
      <p className="text-gray-500 mt-2 mb-8">Feel free to reach out for collaborations</p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Contact Information */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-orange-400" />
              <span className="font-semibold">Soweto</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-400" />
              <span className="font-semibold">074-349-1087</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-400" />
              <span className="font-semibold">sihlentshalintshali06@gmail.com</span>
            </div>
          </div>
          <div className="mt-12 bg-gradient-to-r from-orange-400 to-orange-700  text-white p-4 w-full h-50 rounded-xl">
            <h3 className="font-semibold mt-4">Let's connect</h3>
            <p className="text-sm mt-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-200">Full Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mt-1 text-gray-600"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200">Email Address</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mt-1 text-gray-600"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200">Your Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mt-1 h-32 text-gray-600"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-lg text-lg font-semibold"
            >
              {isSubmitting ? "Sending..." : <><FaPaperPlane className="mr-2" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

