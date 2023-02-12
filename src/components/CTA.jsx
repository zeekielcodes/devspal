import React from "react";
import { useNavigate } from "react-router-dom";
import code from "../assets/images/code.jpg";

function CTA() {
  const navigate = useNavigate();
  return (
    <div className="cta pad">
      <div className="py-20">
        <h4 className="text-[36px] md:text-[48px] font-bold leading-none">
          Developers' best friend
        </h4>
        <p className="my-4">Solution at hand.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#5DCB89] text-black px-6 py-2 rounded"
        >
          Get onboard
        </button>
      </div>
      <img src={code} alt="" />
    </div>
  );
}

export default CTA;
