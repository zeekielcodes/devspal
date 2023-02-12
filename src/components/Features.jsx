import React from "react";
import { GiTeacher } from "react-icons/gi";
import { SiConvertio, SiChatbot } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";

function Features() {
  return (
    <div className="features pad">
      <h2 className="text-[42px] text-black">Features</h2>
      <div className="feature-list">
        <div className="flex flex-col bg-black text-white items-center">
          <div className="icon">
            <GiTeacher />
          </div>

          <h3>Explains Codes</h3>
          <p>
            Run into a problem ? In simple, easy-to-understand manner, DevsPal
            explains your code to you like you didn't write them.
          </p>
        </div>
        <div className="flex flex-col bg-black text-white items-center">
          <div className="icon">
            <SiConvertio />
          </div>
          <h3>JS-Python Conversion</h3>
          <p>
            With our JS-Python Conversion, you can convert your JavaScript codes
            into working and functional Python codes.
          </p>
        </div>
        <div className="flex flex-col bg-black text-white items-center">
          <div className="icon">
            <SiChatbot />
          </div>
          <h3>HelpChat</h3>
          <p>
            Want to have some JavaScript or programming chat ? - make
            discoveries, get bugs fixed and do so much more.
          </p>
        </div>
        <div className="flex flex-col bg-black text-white items-center">
          <div className="icon">
            <FaExchangeAlt />
          </div>
          <h3>Transpile Codes</h3>
          <p>
            With DevsPal, you can convert your codes from one programming
            language to another programming language.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
