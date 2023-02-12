import React from 'react'
import { BiSend } from 'react-icons/bi'

function ChatBot() {
  return (
    <div className="chats">
    <h2 className='text-[32px]'>JS ChatBot</h2>
    <p className='italic'>Send me a message, Let's talk about JavaScript.</p>
    <form>
        <input type="text" name='text' x-webkit-speech="true" id='text' placeholder='Write something..' />
        <button className='h-[40px] w-[40px] flex justify-center items-center rounded text-[22px] bg-[#5DCB89] text-black'><BiSend /></button>
    </form>
</div>
  )
}

export default ChatBot