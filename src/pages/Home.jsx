import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>Home - StudyTogether</Helmet>
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

    <div className="absolute inset-0 flex justify-center items-center w-full h-full">
      <div className="w-6/12 flex flex-col mx-auto">
        <h1 className="text-white text-5xl pb-8 mx-auto font-bold leading-snug">
          Study Together <br /> With A Global Community <br /> and study with students <br /> from all over the world 🌍
        </h1>
        <div className='btn btn-outline text-white w-3/12 mx-auto text-2xl font-bold text-center'> Join Us Now!</div>
      </div>

      <div className="w-6/12 ">
        <video
          className="w-8/12 h-80 mx-auto bg-black object-cover rounded-2xl"
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

        </div>
    );
};

export default Home;