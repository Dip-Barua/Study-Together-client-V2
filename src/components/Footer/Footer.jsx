import logo from "../../assets/logo.png"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
    return (


<div className=' pt-20 pb-10 flex flex-col' >
<div >
                <h1 className='text-3xl font-bold text-center'><img src={logo} className="mx-auto w-4/12 sm:w-52" alt="" /></h1>
                <p className=' mt-5 font-bold text-gray-500 text-center w-9/12 mx-auto sm:w-full text-wrap'> <span className='text-rose-500 text-2xl'>"StudyTogether"</span>is 
                a global educational platform, dedicated to spread collaboration and learning among students from all corners of the world since 2024. <br /> Our community of learners and mentors work together to provide a dynamic and supportive environment for academic growth, ensuring that every student has the resources and connections they need to succeed.</p>
              </div>
<hr className='w-10/12 mx-auto my-8 ' />
            <div className=" flex w-9/12 mx-auto text-base-content flex-col sm:flex-row justify-between p-10">
  <nav className=' flex flex-col  mb-10'> 
       <h6 className="text-2xl  font-bold text-black my-4">
  CONTACT US</h6>
          <a className="link link-hover text-xl flex items-center ">
            <FaPhoneAlt className="text-2xl mr-3  text-green-500" />
            <span className="text-sm sm:text-xl ">+815351385351</span>
          </a>
          <a className="link link-hover text-xl flex items-center ">
            <FaEnvelope className="text-2xl mr-3  text-green-500" />
            <span className="text-sm sm:text-xl ">test@test.com</span>
          </a>
          <a className="link link-hover text-xl flex items-start ">
            <FaMapMarkerAlt className="text-2xl mr-3  text-green-500" />
            <span className="text-sm sm:text-xl ">
              Office: House 456, Road – Dhaka-1216, Bangladesh
            </span>
          </a>
          <a className="link link-hover text-xl flex items-start ">
            <FaMapMarkerAlt className="text-2xl mr-3  text-green-500" />
            <span className="text-sm sm:text-xl ">
              Registered Address:Dhaka-1207, Bangladesh
            </span>
          </a>
  </nav>
  <nav className=' flex flex-col  mb-10'>
    <h6 className="text-2xl mx-auto font-bold text-black my-4">
      SERVICES</h6>
    <a className="link link-hover text-sm sm:text-xl">Upcoming Events</a>
    <a className="link link-hover text-sm sm:text-xl">Polular Topics</a>
    <a className="link link-hover text-sm sm:text-xl">Latest Blogs</a>
    <a className="link link-hover text-sm sm:text-xl">Sectors</a>
  </nav>
  <nav className=' flex flex-col '>
  <h6 className="text-2xl mx-auto font-bold text-black my-4">
  Community</h6>
    <a className="link link-hover text-sm sm:text-xl">About us</a>
    <a className="link link-hover text-sm sm:text-xl">Our Motive</a>
    <a className="link link-hover text-sm sm:text-xl">Contact</a>
  </nav>
  <nav className=' flex flex-col '>
  <h6 className="text-2xl mx-auto font-bold text-black my-4">
  LEGAL</h6>
    <a className="link link-hover text-sm sm:text-xl">Terms and Conditions</a>
    <a className="link link-hover text-sm sm:text-xl">Privacy policy</a>
    <a className="link link-hover text-sm sm:text-xl">Disclaimer</a>
  </nav>
</div>
<p className="text-center text-lg text-slate-700 ">
<div className="font-bold hover:underline flex justify-around w-7/12 sm:w-2/12 mb-5 mx-auto">
                  <button type="button"  className="btn bg-transparent rounded-2xl mt-8 text-4xl"><FcGoogle />
                  </button>
                  <button type="button" className="btn bg-transparent rounded-2xl mt-8 text-4xl text-blue-600"><FaFacebook />

                  </button>
                  <button type="button" className="btn bg-transparent rounded-2xl mt-8 text-4xl"><FaGithub />

                  </button>
                </div>
        </p>
<p className="text-center text-sm sm:text-lg  ">
          A Private Commitment by Dip || All Rights Reserved.
        </p></div>
    );
};

export default Footer;