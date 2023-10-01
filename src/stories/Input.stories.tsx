import {useState} from "react";

export default {
  title: 'input',
  //component: Input,
};



export const UncontrolledInput  = () => <input/>

export const ControlledInputWithFixedValue  = () => <input value={'IT-incubator.by'}/>

export const TrackValueUncontrolledInput  = () =>{
  const [value, setValue]=useState("")
  return <> <input onChange={(event)=>{
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }
  }/> - {value} </>
}
