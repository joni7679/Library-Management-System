import { FaHome, FaUserGraduate, FaClipboardList, FaMoneyBill, FaBookOpen, FaExclamationTriangle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-white shadow-md p-5 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
                <FaBookOpen className="text-purple-500 text-3xl" />
                <h1 className="text-xl font-semibold">SkillSet</h1>
            </div>

            {/* Menu Items */}
            <ul className="space-y-4">
                <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <FaHome /> Home
                </Link>
                <Link to="/admin/users" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <FaUserGraduate />All Students
                </Link>
                <Link to="/admin/attendance" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <FaClipboardList /> Attendance
                </Link>
                <Link to="/admin/payments" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <FaMoneyBill /> Payments
                </Link>
                <Link to="/admin/library" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <FaBookOpen /> Library
                </Link>
                <Link to="/admin/reports" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <FaExclamationTriangle /> Reports
                </Link>
                <Link to="/admin/settings" className="flex items-center gap-3 text-gray-600 hover:text-purple-500 cursor-pointer">
                    <IoIosSettings /> Setting
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
