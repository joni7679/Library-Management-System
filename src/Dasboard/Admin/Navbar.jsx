
import { FaMoon, FaBell } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 shadow-md ">
            {/* Search Box */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search.."
                    className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>
            <div>
                <h1 className="text-xl capitalize"> Wellcome to  admin</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <button className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Live</button>
                <FaMoon className="text-gray-600 text-lg cursor-pointer" />
                <FaBell className="text-gray-600 text-lg cursor-pointer" />
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
