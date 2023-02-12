import React, { useContext } from "react";
import devpal from "../assets/images/logo3.png";
import theface from "../assets/images/theface.jpg";
import { ContextSource } from "./AppContext";

function SentMessage({ sentMessage }) {
  const { state } = useContext(ContextSource);
  return (
    <div className="sent">
      <img
        src={
          state.user?.photoURL
            ? state.user.photoURL
            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        className="h-[30px] w-[30px] self-start rounded-full"
        alt=""
      />
      <div className="whitespace-pre-wrap">{sentMessage}</div>
    </div>
  );
}

// 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

export default SentMessage;
