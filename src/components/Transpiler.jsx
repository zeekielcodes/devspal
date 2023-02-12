import React from 'react'
import { BiSend } from 'react-icons/bi'

function Transpiler() {
  return (
    <div className="chats">
    <h2 className='text-[32px]'>Code Transpiler</h2>
    <p className='italic'>This AI-powered web app can convert your codes from one programming language to another programming language.</p>
    <form>
        <textarea type="text" name='text' id='text' placeholder='Write something..' className='p-2 w-11/12 h-[100px]'></textarea>
        <button className='w-[40px] flex justify-center items-center rounded text-[22px] bg-[#5DCB89] text-black'><BiSend /></button>
    </form>
</div>
  )
}

export default Transpiler