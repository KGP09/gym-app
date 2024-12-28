import React from 'react'

export default function Button(props) {
    const{text , func } = props
    return (
    <button onClick={func} className=" mx-auto shadow hover:shadow-2xl	rounded-xl border-solid border-2 border-blue-400 text-center m-10 w-96 h-16 text-2xl bg-slate-950 " >
        <p>{text}</p>
    </button>
  )
}
