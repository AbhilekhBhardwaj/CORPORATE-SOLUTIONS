import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo image

const Navbar = () => {
  return (
    <div className="shadow-lg">
      {/* Top Section */}
      <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-2 text-sm">
        <div>
          <span>Email: info@company.com | Contact: +1-123-456-7890</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo} // Use the imported logo
            alt="Company Logo"
            className="w-16 h-16" // Adjusted size
          />
          <p className="text-lg font-bold">A2Z CORPORATE SOLUTIONS</p>
        </div>

        {/* Main Links */}
        <div className="flex space-x-6">
        <Link to="/cart">Cart</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-gray-700 text-white text-center p-2 sticky top-0 z-50">
        <div className="inline-block group relative mx-2">
          <Link className="cursor-pointer mx-2" to="/housekeeping">
            House Keeping
          </Link>
          <div className="absolute hidden group-hover:block bg-gray-800 text-white rounded shadow-lg w-72">
            {/* House Keeping Dropdown */}
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/housekeeping/toiletry-products">Toiletry Products</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/housekeeping/cleaning-products">Cleaning Products</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/housekeeping/dustbins">Dustbins</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/housekeeping/disposables">Disposables</Link>
            </div>
          </div>
        </div>

        <div className="inline-block group relative mx-2">
          <Link className="cursor-pointer mx-2" to="/office-stationery">
            Office Stationery
          </Link>
          <div className="absolute hidden group-hover:block bg-gray-800 text-white rounded shadow-lg w-72">
            {/* Office Stationery Dropdown */}
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/office-stationery/photo-copier-paper">Photo Copier Paper</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/office-stationery/writing-instrument">Writing Instrument</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/office-stationery/desk-accessories">Desk Accessories</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/office-stationery/file-folder">File Folder</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/office-stationery/register-writing-pad">Register & Writing Pad</Link>
            </div>
            <div className="text-sm px-4 py-2 hover:bg-gray-600 flex items-center">
              <span className="mr-2">&#x2192;</span> {/* Right Arrow */}
              <Link to="/office-stationery/school-stationery">School Stationery</Link>
            </div>
          </div>
        </div>

        <Link className="mx-2" to="/corporate-gift">Corporate Gift</Link>
        <Link className="mx-2" to="/promotional-items">Promotional Items</Link>
        <Link className="mx-2" to="/display-systems">Display Systems</Link>
        <Link className="mx-2" to="/manpower-services">Manpower Services</Link>
      </div>
    </div>
  );
};

export default Navbar;
