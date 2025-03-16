
import Sidebar from './Sidebar'
import Navbar from './Navbar'
// import AddStu from './AddStu'
import { Outlet } from 'react-router-dom'
function Admin() {
  
  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <div className="left-part w-[20%]">
          <Sidebar />
        </div>
        <div className="right-part w-[80%] h-screen ">
          <Outlet />
    
        </div>


      </div>

    </>
  )
}

export default Admin