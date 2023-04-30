import React from "react";
import devpal from "../assets/images/logo3.png";
import Typewriter from "typewriter-effect";

function Reply({ replyMessage }) {
  return (
    <div className="reply">
      <img
        src={devpal}
        className="h-[30px] w-[72px] object-contain self-start"
        alt=""
      />
      <div
        className={
          replyMessage === ("Something went wrong!" || "Error")
            ? "text-red-500 whitespace-pre-wrap"
            : "whitespace-pre-wrap"
        }
      >
        {replyMessage ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(replyMessage.trim()).changeDelay(1).start();
            }}
            options={{
              delay: 25,
            }}
          />
        ) : (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("...").deleteAll().changeDelay(1).start();
            }}
            options={{
              delay: 100,
              loop: true,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Reply;
