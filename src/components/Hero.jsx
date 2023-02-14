import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import hero from "../assets/images/hero.png";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero pad">
      <div className="hero-text">
        <h1 className="text-[36px] md:text-[48px] leading-none">
          Efficient Coding with <span className="text-[#5DCB89]">Devs</span>Pal:
          Say goodbye to frustration
        </h1>
        <p className="my-8 w-10/12">
          The AI-Powered web app for easy programming problem-solving and
          understanding for all skill levels. Upgrade your coding experience
          with us.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#1BF0A2] text-black"
          >
            Get Started
          </button>
          <button className="border-b-2 border-[linear-gradient(90deg, #FFFFFF 0%, rgba(0,0,0,0) 131.36%)]">
            Need help?
          </button>
        </div>
      </div>
      <img src={hero} alt="" />
    </div>
  );
}

export default Hero;
