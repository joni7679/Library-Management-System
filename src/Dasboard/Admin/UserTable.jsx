import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true },
  { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true }, { id: 1, name: "John Doe", email: "john@example.com", books: 3, isAdmin: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", books: 2, isAdmin: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", books: 5, isAdmin: true },
];

const UserTable = () => {

  return (

    <div className="overflow-x-auto p-4 h-[80%] bg-amber-300">

      <Link to={`/admin/addstudents`} className="py-[15px] px-[25px] bg-blue-500 text-white capitalize rounded-2xl cursor-pointer">Add New User</Link>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-5">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left">Student Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Books</th>
            <th className="py-3 px-6 text-left">Is Admin</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-6">{user.name}</td>
              <td className="py-3 px-6">{user.email}</td>
              <td className="py-3 px-6">{user.books}</td>
              <td className="py-3 px-6">{user.isAdmin ? "Yes" : "No"}</td>
              <td className="py-3 px-6 flex gap-3">
                <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700 cursor-pointer">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
