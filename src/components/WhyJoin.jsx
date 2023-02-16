import React from "react";
import avatar from "../assets/images/Avatar.png";

function WhyJoin() {
  return (
    <div className="message">
      <div className="bg-[rgba(0,0,0,0.8)] text-white text-center rounded-2xl p-8 lg:p-20 flex flex-col items-center gap-2">
        <img src={avatar} alt="" />
        <h4 className="text-[20px]">Do you have any questions?</h4>
        <p className="text-[18px]">
          We are available 24/7 to answer any question you have about DevsPal
        </p>
        <a
          href="https://twitter.com/thefacecodes"
          className="bg-[#5DCB89] text-black rounded px-4 py-2"
        >
          Send a message
        </a>
      </div>
    </div>
  );
}

export default WhyJoin;
