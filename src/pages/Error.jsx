import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error pad">
      <h1 className="text-[48px] text-[#5DCB89] md:text-[60px] leading-none">
        404!
      </h1>
      <p className="my-4">Can't find the page youre looking for.</p>
      <Link to="/" className="px-6 py-2 rounded bg-[#5DCB89] text-black">
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
