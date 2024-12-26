import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="py-20 ">
      <Helmet><title>About</title> </Helmet>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold  mb-6">About Us</h1>
        <p className="text-lg  leading-relaxed mb-6">
          Welcome to Study Together! We are a platform designed to help students
          collaborate and excel in their studies by providing a shared space for
          assignments, learning resources, and communication.
        </p>
        <p className="text-lg  leading-relaxed mb-6">
          Our goal is to create an inclusive, supportive environment where
          students can learn together, share knowledge, and improve their
          academic performance. Whether you are preparing for exams, working on
          group projects, or seeking help with assignments, Study Together is
          here to help you succeed!
        </p>
        <h2 className="text-3xl font-semibold  mb-4">Our Mission</h2>
        <p className="text-lg  leading-relaxed mb-6">
          We aim to provide students with the tools they need to succeed
          academically, including access to study materials, collaborative
          opportunities, and the ability to track their progress through
          assignments and projects.
        </p>
        <h2 className="text-3xl font-semibold  mb-4">Get In Touch</h2>
        <p className="text-lg  leading-relaxed">
          If you have any questions or feedback, feel free to reach out to us at
          <span className="font-bold text-blue-500"> support@studytogether.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;
