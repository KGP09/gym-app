import React from 'react'

export default function Excercise(props) {
    const {excercise , i} = props
    return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap ' >
        <div className='flex flex-col sm:flex-row sm:item-center sm:flex-wrap gap-x-4' >
            <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'  >0{i+1}</h4>    
            <h2 className='capitalize whitespace-nowrap flex flex-1 ' >{excercise.name.replaceAll("_" ," ")}</h2>
            <p className='text-sm text-slate-400 capitalize' > {excercise.type}</p>

        </div>    
            
    </div>
  )
}
