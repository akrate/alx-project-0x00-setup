import { PillProps } from "@/interfaces";
import React from 'react';


const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;


import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex flex-col gap-4 max-w-xs">
        {}
        <Button title="Small Button" styles="text-sm rounded-lg" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
