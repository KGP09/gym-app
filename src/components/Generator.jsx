/* eslint-disable react/prop-types */
import SectionGenerator from "./SectionGenerator";
import { SCHEMES, WORKOUTS } from "../utils/holder";
import { useState } from "react";
import Button from "./Button";

function Header(props) {
  const { children, index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
      {children}
    </div>
  );
}

export default function Generator(props) {
  const {   poison , setPoison , muscles , setMuscles ,goal ,  setGoal ,updateWorkout } = props;
  const [showModal , setShowModal ] = useState(false)
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
    }

    if (muscles.length > 1) {
      setShowModal(false)
        
      return
    }

    if (poison !== 'individual') {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }

}
  return (
    <>
      <SectionGenerator header={"generate your workout"} title={["One", "Two", "Three"]}>
        <Header
          index={"01"}
          title={"Pick your Poison"}
          description={"Select the workout you wish to enjoy"}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type , typeIndex) => (
            <button
              onClick={() => {
                setMuscles([])
                setPoison((prev) =>{ return type});
                console.log(`${type}: ${poison}`);
              }}
              className={`bg-slate-950 duration-200 hover:border-blue-800 border-2 border-solid rounded-lg py-3 ${
                type === poison ? "border-blue-800" : "border-blue-400"
              }`}
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          ))}
        </div>

        <Header
          index={"02"}
          title={"Lock on the target"}
          description={"Select Muscles to destroy"}
        />

        <div className="bg-slate-950 flex flex-col border border-solid border-blue-400 rounded-lg">
          <button onClick={()=>{
            setShowModal(prev => !prev);
          }} className="relative flex p-3 items-center justify-center">
            <p className="uppercase" >{ muscles.length ==0  ? "Select Muscle Groups" : muscles.join(" ") }</p>
            <i className={`absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down ${showModal === true ? 'rotate-180' :"" }   `} ></i>
          </button> 
          {showModal && 
              <div className="flex flex-col p-3 " >
                {
                  (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclesgroup , musclesgroupIndex)=>{
                    return(
                      <button
                      onClick={()=>{
                        updateMuscles(musclesgroup)
                        
                      }}

                      className={`hover:text-blue-800 text-blue-400 duration-200 uppercase ${  (muscles.includes(musclesgroup) ? "text-blue-800" :"text-blue-400") }`}
                        key={musclesgroupIndex}
                      >
                        <p className="uppercase " >{musclesgroup.replaceAll('_' , ' ')}</p>
                      </button>
                    )
                  })
                }

              </div>
            }
        </div>

        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"Select your ultimate Objective."}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.keys(SCHEMES).map((scheme , schemeIndex) => (         
            <button
              onClick={()=>{
                  setGoal((prev) =>{ return scheme});
                }
              }
            className={`bg-slate-950 duration-200 hover:border-blue-600 border-2 border-solid rounded-lg py-3  ${scheme === goal ? 'border-blue-800' : 'border-blue-400'} `}
              key={schemeIndex}
              
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          ))}
        </div>
      </SectionGenerator>
      <Button
      func={updateWorkout} text={"Formulate"}/>

    </>
  );
}
