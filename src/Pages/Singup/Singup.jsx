import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { SignupSchema } from '../../schemas/Index'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}
function Singup() {

  let { values, errors, handleBlur, handleReset, handleSubmit, handleChange, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,

    onSubmit: (values) => {
      console.log(values)
    }

  })



  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h1>
          <p className="text-center text-gray-500 mb-6">Join our community and start your reading journey today.</p>

          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Username
              </label>
              <input
                type="text"
                id="name"
                placeholder="Username..."
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {
                errors.name && touched.name ? (
                  <p className='error'>{errors.name}</p>
                ) : null
              }
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email..."
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {
                errors.email && touched.email ? (
                  <p className='error'>{errors.email}</p>
                ) : null
              }

            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name='password'
                placeholder="Password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {
                errors.password && touched.password ? (
                  <p className='error'>{errors.password}</p>
                ) : null
              }

            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="Confirmpassword"
                placeholder="
                Confirm Password..."
                name='confirmpassword'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {
                errors.confirmPassword && touched.confirmPassword ? (
                  <p className='error'>{errors.confirmPassword}</p>
                ) : null
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
            Already have an account? <Link to={`/login`} className="text-blue-500 hover:underline">Login Now</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Singup