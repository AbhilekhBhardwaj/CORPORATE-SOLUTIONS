import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "react-slick"; // Import Carousel component
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import officeSuppliesImage from "../assets/office-supplies.webp";
import artSuppliesImage from "../assets/art-supplies.jpg";
import paperSuppliesImage from "../assets/paper-supplies.webp";
import About from "../assets/about.webp"
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // ScrollTrigger for About Section Text Animation
    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // ScrollTrigger for About Section Image Animation
    gsap.fromTo(
      ".about-image",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    // ScrollTrigger for "What We Offer" Section Links Animation
    gsap.fromTo(
      ".offer-link",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".what-we-offer",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // ScrollTrigger for Contact Section Text Animation
    gsap.fromTo(
      ".contact-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // ScrollTrigger for Contact Section Button Animation
    gsap.fromTo(
      ".contact-btn",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  // Slick Carousel Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home">
      {/* Carousel */}
      <div className="carousel-section">
        <Carousel {...sliderSettings}>
          <div>
            <img
              src={officeSuppliesImage}
              alt="Office Supplies"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src={artSuppliesImage}
              alt="Art Supplies"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src={paperSuppliesImage}
              alt="Paper Supplies"
              className="w-full h-96 object-cover"
            />
          </div>
        </Carousel>
      </div>

      {/* About Section */}
      <div className="about-section bg-gray-100 py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 about-text">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="mt-6 text-gray-700 text-lg">
              We provide high-quality office supplies, artist materials, and paper products tailored to your needs.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">
              <a href="/about">Read More</a>
            </button>
          </div>
          <div className="md:w-1/2 about-image">
            <img src={About} alt="About" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="what-we-offer bg-white py-32">
  <h2 className="text-center text-3xl font-bold mb-12">What We Offer</h2>
  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
    <a href="/housekeeping" className="bg-gray-100 p-6 text-center shadow-lg rounded-xl offer-link">
      House Keeping
    </a>
    <a href="/office-stationery" className="bg-gray-100 p-6 text-center shadow-lg rounded-xl offer-link">
      Office Stationery
    </a>
    <a href="/corporate-gift" className="bg-gray-100 p-6 text-center shadow-lg rounded-xl offer-link">
      Corporate Gift
    </a>
    <a href="/promotional-items" className="bg-gray-100 p-6 text-center shadow-lg rounded-xl offer-link">
      Promotional Items
    </a>
    <a href="/display-systems" className="bg-gray-100 p-6 text-center shadow-lg rounded-xl offer-link">
      Display Systems
    </a>
    <a href="/manpower-services" className="bg-gray-100 p-6 text-center shadow-lg rounded-xl offer-link">
      Manpower Services
    </a>
  </div>
</div>


      {/* Contact Section */}
      <div className="contact-section bg-gray-100 py-32 text-center">
        <h2 className="text-3xl font-bold contact-text">Contact Us</h2>
        <p className="mt-6 text-lg contact-text">Get in touch with us to learn more about our services.</p>
        <button className="mt-6 px-8 py-4 bg-blue-600 text-white rounded contact-btn">
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
