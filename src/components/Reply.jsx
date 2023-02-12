import React, { useEffect, useState } from "react";
import devpal from "../assets/images/logo3.png";
import Typewriter from "typewriter-effect";

function Reply({ replyMessage }) {
  const [newReply, setNewReply] = useState("");

  // useEffect(() => {
  //   var i = 0;
  //   var txt = replyMessage; /* The text */
  //   var speed = 50; /* The speed/duration of the effect in milliseconds */

  //   function typeWriter() {
  //     if (i < txt.length) {
  //       const add = newReply + txt.charAt(i);
  //       console.log(i);
  //       console.log(add);
  //       setNewReply(add);
  //       i++;
  //       setTimeout(typeWriter, speed);
  //     }
  //   }

  //   typeWriter();
  // }, []);

  // var typewriter = new Typewriter(newReply, {
  //   loop: true,
  //   delay: 1000, // SET TO USE A 1 SECOND DELAY
  //   cursorClassName: "cursorSize", // SET TO MY CUSTOM CLASS NAME
  // });

  return (
    <div className="reply">
      <img
        src={devpal}
        className="h-[30px] w-[72px] object-contain self-start"
        alt=""
      />
      <div className="whitespace-pre-wrap">
        {/* {typewriter.typeString("Hello World!").start()} */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(replyMessage).changeDelay(10).start();
          }}
        />
        {/* {/* {replyMessage}
        {newReply} */}
      </div>
    </div>
  );
}

export default Reply;
