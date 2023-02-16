import React, { useContext } from "react";
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
        className="border-2 border-white h-[30px] w-[30px] self-start rounded-full"
        alt=""
      />
      <div className="whitespace-pre-wrap">{sentMessage}</div>
    </div>
  );
}

export default SentMessage;
