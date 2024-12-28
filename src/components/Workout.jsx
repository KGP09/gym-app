import Excercise from "./Excercise"
import SectionGenerator from "./SectionGenerator"

export default function Workout(props) {
  const{workout} = props
  return (
    <>
          <SectionGenerator header={"generate your workout"} title={["The", "DANGER", "zone"]}>
            <div className="flex flex-col gap-4" >
              {
                workout.map((excercise , i)=>{
                  return(
                    <Excercise i={i} excercise={excercise} key={i}  />
                  )
                })
              }

            </div>
          </SectionGenerator>
    </>
)
}
