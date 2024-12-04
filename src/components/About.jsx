import { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="about-container p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-7">
          Welcome to our e-commerce platform! We specialize in providing a
          wide range of high-quality office supplies, artist materials, and
          paper products. Our mission is to make it easy for you to access
          the tools you need for your office or creative work, all at
          competitive prices.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-7">
          We are committed to excellent customer service and ensuring that
          every purchase meets your expectations. Whether you're looking for
          office stationery, housekeeping services, or display systems, we
          have something for you.
        </p>
      </div>
    </div>
  );
};

export default About;
