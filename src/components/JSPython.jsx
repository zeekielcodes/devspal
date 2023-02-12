import React from 'react'
import { BiSend } from 'react-icons/bi'

function JSPython() {
  return (
    <div className="chats">
        <h2 className='text-[32px]'>JS - Python</h2>
        <p className='italic'>This AI-powered web app can can convert your JavaScript codes into working and functional Python codes.</p>
        <form>
            <input type="text" name='text' id='text' placeholder='Write something..' />
            <button className='h-[40px] w-[40px] flex justify-center items-center rounded text-[22px] bg-[#5DCB89] text-black'><BiSend /></button>
        </form>
    </div>
  )
}

export default JSPython