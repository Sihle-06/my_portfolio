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
    <div className="flex flex-col items-center min-h-screen p-6 text-white bg-gray-900">
      <h1 className="w-full pb-2 mb-6 text-3xl font-bold border-b ">Contact</h1>
      <h3 className="text-sm text-gray-500">Get in touch</h3>
      <h1 className="mt-1 text-4xl font-bold text-gray-900">Contact Me</h1>
      <p className="mt-2 mb-8 text-gray-500">Feel free to reach out for collaborations</p>

      <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="p-6 bg-gray-800 shadow-lg rounded-2xl">
          <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
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
          <div className="w-full p-4 mt-12 text-white bg-gradient-to-r from-orange-400 to-orange-700 h-50 rounded-xl">
            <h3 className="mt-4 font-semibold">Let's connect</h3>
            <p className="mt-6 text-sm">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-gray-800 shadow-lg rounded-2xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-200">Full Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-3 mt-1 text-gray-600 border rounded-lg"
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
                className="w-full p-3 mt-1 text-gray-600 border rounded-lg"
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
                className="w-full h-32 p-3 mt-1 text-gray-600 border rounded-lg"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-orange-400 to-orange-500"
            >
              {isSubmitting ? "Sending..." : <><FaPaperPlane className="mr-2" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

