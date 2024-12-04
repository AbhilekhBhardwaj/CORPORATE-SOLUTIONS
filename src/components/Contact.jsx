import { useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-container",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="contact-container p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to hear from you! Fill out the form below or reach out to
          us directly.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              className="w-full mt-2 p-3 border border-gray-300 rounded"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button className="w-full bg-blue-600 text-white py-3 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
