import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useFormik } from 'formik'
import { Loginschema } from '../../schemas/Index'

let initialValues = {
  email: '',
  password: '',

}
function Login() {


  let { values, errors, handleBlur, handleReset, handleSubmit, handleChange, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: Loginschema,
    onSubmit: (values, action) => {
      console.log("forms submit", values);
      action: handleReset()
    }
  })

  // console.log("formik", formik);
  console.log("errors", errors);



  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold text-center text-gray-800">wellcome to Back</h1>
          <p className="text-center text-gray-500 mb-6">Join our community and start your reading journey today.</p>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="mb-4">
              <label htmlFor='email' className="block text-gray-700 font-medium mb-2" >
                Email  or Username..
              </label>
              <input
                type="email"
                name='email'
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}


                placeholder="Email and username..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {
                errors.email && touched.email ? (
                  <p className='error'>{errors.email}</p>
                )
                  : null
              }
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {
                errors.password && touched.password ? (
                  <p className='error'>{errors.password}</p>
                )
                  : null
              }

            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Don't have an account ? <Link to={`/signup`} className="text-blue-500 hover:underline">Singup Now</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login