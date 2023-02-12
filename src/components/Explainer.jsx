import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { BsPower, BsTrash } from "react-icons/bs";
import { auth } from "../firebase";
import { ContextSource } from "./AppContext";
import Reply from "./Reply";
import SentMessage from "./SentMessage";

function Explainer() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const { dispatch } = useContext(ContextSource);

  const explain = (e) => {
    e.preventDefault();
    const newConversation = [...conversation, { sent: message }];

    setConversation(newConversation);
    fetch("http://localhost:5000/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const anotherConvo = [...newConversation, { reply: data.bot }];
        setConversation(anotherConvo);
      })
      .catch((error) => {
        setConversation([
          ...newConversation,
          { reply: "Something went wrong!" },
        ]);
      });
    setMessage("");
  };

  useEffect(() => {
    const saved = localStorage.getItem("chats");
    if (saved) {
      setConversation(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (conversation.length > 0) {
      localStorage.setItem("chats", JSON.stringify(conversation));
    }
  }, [conversation]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "openModal", payload: "Logged out" });
      })
      .catch((error) => {
        dispatch({ type: "openModal", payload: error.message });
      });
  };

  return (
    <div className="chats">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] md:text-[32px]">
          Help at hand <span className="text-gray-600">&#9994;</span>
        </h2>
        <button
          onClick={logOut}
          className="bg-[#5DCB89] md:hidden text-black h-[40px] w-[40px] flex items-center justify-center rounded"
        >
          <BsPower className="text-[22px]" />
        </button>
      </div>

      <div className="convo my-2 h-3/4 overflow-y-scroll scroll-smooth">
        {conversation.map((chat, index) => (
          <div key={index}>
            {chat.sent && (
              <SentMessage key={new Date().getTime()} sentMessage={chat.sent} />
            )}
            {chat.reply && <Reply replyMessage={chat.reply} />}
          </div>
        ))}
      </div>
      {conversation.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={() => setConversation([])}
            className="flex gap-2 bg-red-400 text-white items-center px-4 py-2 rounded"
          >
            <BsTrash /> Clear chats
          </button>
        </div>
      )}
      <form onSubmit={explain}>
        <textarea
          type="text"
          name="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="text"
          placeholder="Write something.."
          className="p-2 w-11/12 h-[40px]"
        ></textarea>
        <button
          disabled={message.length < 1}
          className="w-[40px] flex justify-center items-center rounded text-[22px] bg-[#5DCB89] text-black"
        >
          <BiSend />
        </button>
      </form>
    </div>
  );
}

export default Explainer;
