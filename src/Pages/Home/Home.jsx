
import Navbar from '../Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


function Home() {
  // const [search, setSearch] = useState("");
  return (
    <>

      <Navbar />
      <div
        className="p-10 text-xl text-center h-screen flex flex-col justify-center items-center bg-cover bg-center w-full realtive"

        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1623771702313-39dc4f71d275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        {/* <div className="overly w-full h-full bg-black-700 absolute top-0"></div> */}
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to the Library Management System</h1>
        <p className="text-lg text-gray-200 mb-6">Manage your books and users efficiently.</p>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            placeholder="Search for books..."

          />
  
        </div>
      </div>





      <Footer />


    </>
  )
}

export default Home