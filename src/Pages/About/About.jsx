import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
function About() {
  return (
    <>
      <Navbar />
      <div className='container max-auto p-5  '>
        <h1 className='font-semibold text-2xl text-center'>About us</h1>
        <div className="heading text-center">
          <h3>Driven by Purpose, United by Passion: Empowering the Future, One Learner at a Time"
            "Together, We Build Knowledge That Lasts Forever, Redefining Education with Innovation and Heart"
            "Your Success, Our Shared Vision: The Minds Behind Your Learning Journey"
            "Where Passion Meets Purpose to Shape Tomorrow, Crafting Experiences That Transform Education"
            "Every Dream Needs a Team—Fueling Ambition Through Expertise and Teamwork"</h3>
        </div>
        <div className="our-mission text-center mt-5">
          <h2 className='font-semibold text-xl'>Our Mission</h2>
          <p>
            our mission is to make education accessible, engaging, and impactful for everyone. We believe in transforming learning through technology, creativity, and collaboration. Whether you're a student, professional, or lifelong learner, we're here to help you achieve your goals.
          </p>

        </div>
        <div className="team-member mt-5">
          <h1 className='font-semibold text-2xl text-center'>our Team Members</h1>
         
          <div className="card lg:shadow rounded-2xl p-5 max-w-sm mt-5">
            <div className="card-body">

              <h1 className='font-semibold'>Joni Halder</h1>
              <p> Role: <span >Frontend Developer</span></p>
              <p>
                Crafts intuitive and interactive UI designs.
                Passionate about creating user-focused digital experiences using React and Tailwind CSS.
              </p>

            </div>
            
          </div>



        </div>



      </div>



      <Footer />
    </>
  )
}

export default About