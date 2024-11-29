import React from 'react';
import './App.css'; // Ensure your CSS file is imported

const generateStars = (count) => {
  const starsArray = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 3 + 1; // Size between 1px and 4px
    const left = Math.random() * 100; // Random left position
    const delay = Math.random() * 10; // Random delay to start
    const starStyle = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
    };
    starsArray.push(<div className="star" style={starStyle} key={i}></div>);
  }
  return starsArray;
};

const StarryBackground = () => {
  const stars = generateStars(200); // Generate 50 stars
  return <div className="stars-container">{stars}</div>;
};

export default StarryBackground;
