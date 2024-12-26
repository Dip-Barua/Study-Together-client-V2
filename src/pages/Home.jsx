import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from '../components/Faq/Faq';


const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease', 
        });
      }, []);


    return (
        <div>
            <Helmet><title>Home - StudyTogether</title> </Helmet>
            <div className="carousel w-[98%] flex mx-auto">
            <div className="w-full h-[60vh] mx-auto carousel">
  <div className="carousel-item w-full h-full relative rounded-2xl">
    <div className="w-full h-full relative">
      <img
        src="/src/assets/BG.jpeg"
        alt="Background"
        className="w-full h-full rounded-2xl object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-black opacity-70 rounded-2xl"></div>
    </div>

    <div className="absolute inset-0 flex flex-col-reverse sm:flex-row justify-center items-center w-full h-full">
      <div className="w-11/12 text-center sm:text-start sm:w-6/12 flex flex-col mx-auto">
        <h1 className="text-white text-xl sm:text-5xl pb-8 mx-auto font-bold leading-snug">
          Study Together <br /> With A Global Community <br /> and study with students <br /> from all over the world 🌍
        </h1>
        <NavLink to="/register" className='btn btn-outline text-white w-6/12 sm:w-3/12 mx-auto text-xl sm:text-2xl font-bold text-center'>
         Join Us Now!
        </NavLink>

      </div>

      <div className="w-11/12 sm:w-6/12 mb-6">
        <video
          className="w-full sm:w-8/12 h-36 sm:h-80 mx-auto bg-black object-cover rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/New folder/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</div>

            </div>

            <div className="py-28 w-11/12 sm:w-full mx-auto"> 
                <h2 className=" text-xl sm:text-3xl font-bold text-center">Our community is of more than <span className="text-red-500">1M+</span> Active Students From</h2>
                <div className="grid grid-cols-5 gap-2 sm:flex w-8/12 mt-16 mx-auto justify-between">
    <div className="w-full sm:w-1/12 h-8 sm:h-16">
        <img src="https://th.bing.com/th/id/OIP.bpn17ZoFze_aUDNkzXTrHAHaEc?r" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.sw-nmSO4L_nTPi5sQVWDawHaDt?" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIF.Ny2srlQwNCVKeCUOuCMNYw?rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.xp_gP4N6JVcGfHcGVr7acgHaD6?rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.3tCkgLFjGaPU__KXOCv2zQHaE8?rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.BMpXupmawPAhoyGE_anB6gHaE3?rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.ugCCUr3tUcmQTXNTUNhGLAHaDt?rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.mO2EfRE-TxiZgZ20kE6aOwHaE7?rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="w-full sm:w-1/12 h-8 sm:h-16 border-gray-500 border">
        <img src="https://th.bing.com/th/id/OIP.1CtpFkSvEbunyzbZY7H0_AHaFN?w=1004&h=706&rs=1&pid=ImgDetMain" alt="" className="w-full h-full object-cover" />
    </div>
</div>

            </div>

            <div>
            <div className="features py-16 ">
    <div className="container mx-auto text-center w-9/12">
        <h2 className="text-4xl font-bold mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img 
                        src="https://www.thebluediamondgallery.com/tablet/images/assignment.jpg" 
                        alt="Create Assignment" 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body text-start" data-aos="fade-up">
                    <h3 className="text-2xl font-bold">Create Assignments</h3>
                    <p>Create and share assignments with your study group, collaborate effectively, and track progress in real-time to enhance your learning experience.
                    </p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img 
                        src="https://thumbs.dreamstime.com/z/review-concept-illustration-review-concept-illustration-idea-feedback-business-people-102468072.jpg" 
                        alt="Submit Assignments" 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body text-start" data-aos="fade-up">
                    <h3 className="text-2xl font-bold">Review & Feedback</h3>
                    <p>Submit your work, receive detailed feedback, and grade your friends’ assignments to help them improve and track their progress.
                    </p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img 
                        src="https://framerusercontent.com/images/mmj4VXZrTcBKRquHjhVNS41gsM.png" 
                        alt="Real-Time Collaboration" 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body text-start" data-aos="fade-up">
                    <h3 className="text-2xl font-bold">Real-Time Collaboration</h3>
                    <p>Engage in meaningful discussions, collaborate with friends in real-time, and share ideas to solve problems and enhance your learning experience together.
                    </p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img 
                        src="https://img.freepik.com/premium-vector/modern-interface-managing-analyzing-financial-data_1073017-96.jpg" 
                        alt="Personal Dashboard" 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body text-start" data-aos="fade-up">
                    <h3 className="text-2xl font-bold">Personal Dashboard</h3>
                    <p>  Stay organized and on top of your academic progress by effortlessly tracking your assignments, monitoring your grades, and never missing a deadline again. All your tasks are in one place!
                    .</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img 
                        src="https://th.bing.com/th?id=OIF.HpO31Zi9ZbZ9F0zl%2fvRQfQ&rs=1&pid=ImgDetMain" 
                        alt="Personal Dashboard" 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body text-start" data-aos="fade-up">
                    <h3 className="text-2xl font-bold">Peer to Peer Learning</h3>
                    <p>  Enhance your learning experience by engaging in peer-to-peer discussions. Share notes, ask questions, and help each other succeed with collaborative learning features.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img 
                        src="https://th.bing.com/th/id/R.9eb9c6dcc1bfc5959767a3cd61927a0b?rik=7B3e96ORGjZJkQ&riu=http%3a%2f%2fwww.suburbanseats.com%2fcdn%2fshop%2farticles%2fcustomization-concept-illustration.png%3fv%3d1687347770&ehk=k1I8qbNh8M8jFfXSPNPdc05jB5jICa%2fTq1lc9LcSxOg%3d&risl=&pid=ImgRaw&r=0" 
                        alt="Personal Dashboard" 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body text-start" data-aos="fade-up">
                    <h3 className="text-2xl font-bold">Customizable Study Materials</h3>
                    <p>Create personalized study materials with your friends or join existing groups based on your subjects or interests. Tailor the group’s schedule and content to suit your learning style and pace.</p>
                </div>
            </div>
        </div>
    </div>
</div>


            </div>
            <Faq></Faq>
        </div>
    );
};

export default Home;