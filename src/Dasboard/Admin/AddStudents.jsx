
function AddStudents() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:",);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                <div >
                    <h2 className="text-xl font-bold mb-4">Add User</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block">Name</label>
                            <input type="text" id="name" className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block">Email</label>
                            <input type="email" id="email" className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="books" className="block">Books</label>
                            <input type="text" id="books" className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2" name="books" required />
                        </div>
                        <div>
                            <label htmlFor="isadmin" className="admin">IsAdmin</label>
                            <input type="text" id="isadmin" className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2" name="isadmin" required />
                        </div>
                        <button type="submit" className="py-[15px] px-[25px] bg-blue-500 text-white capitalize rounded-2xl cursor-pointer">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddStudents