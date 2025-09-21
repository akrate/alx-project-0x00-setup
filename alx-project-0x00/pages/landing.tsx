import Card from "../components/Card"
import React from 'react';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Add Card component here */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing;


