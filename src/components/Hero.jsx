import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
        <div className ='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-dull mx-auto'>
            <p className="text-2xl" >ITs TIME TO GET</p>
            <div className='  text-7xl text-white' >FREAKING<span className='text-blue-600' >BIG</span></div>
            <div className="   text-xl text-pretty w-2/3" >I hereby acknowledge that I may become <span className='text-blue-600' >freaking big</span> and accept all risks of becoming the local <span className='text-blue-600'>mass montrosity</span>, afflicted with severe body dismorphia,unable to fit through doors.</div>
            <Button   text={"Accept and Begin"}/>
        </div>
    </>
  )
}
