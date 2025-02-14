import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>👋 Welcome to My Portfolio</h1>
      <div className="home-text">
        <p>Hello! I’m <strong>Timothy John Nicolas</strong>.</p>
        <p>
          BS Computer Science graduate passionate about AI development and back-end programming.
        </p>
      </div>
      <div className="home-image-container">
        <img 
          src="my-picture.jpg" 
          alt="Timothy John Nicolas" 
          className="home-picture" 
        />
      </div>
    </div>
  );
};

export default Home;
