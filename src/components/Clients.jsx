import { useEffect } from "react";
import gsap from "gsap";

const Clients = () => {
  useEffect(() => {
    gsap.fromTo(
      ".clients-container",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="clients-container p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Our Clients</h1>
        <p className="text-lg text-gray-700 mb-6">
          Here are some of the valued clients we’ve worked with:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Client 1</h2>
            <p className="text-gray-600">Description of Client 1’s work with us.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Client 2</h2>
            <p className="text-gray-600">Description of Client 2’s work with us.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Client 3</h2>
            <p className="text-gray-600">Description of Client 3’s work with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
