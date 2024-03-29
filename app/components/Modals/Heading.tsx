"use client";
import React from "react";
interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className="  ">
      <div className="text-2xl font-bold flex justify-center"> {title}</div>
      <div className="font-light text-neutral-500  flex justify-center mt-2">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
