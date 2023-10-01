import {ChangeEvent, useRef, useState} from "react";

export default {
  title: 'input',
  //component: Input,
};



export const UncontrolledInput  = () => <input/>
//----------------------------------------------------
export const TrackValueUncontrolledInput  = () =>{
  const [value, setValue]=useState("")

  const onChange = (event:ChangeEvent<HTMLInputElement>)=>{
    const actualValue = event.currentTarget.value
    setValue(actualValue)}

  return <> <input onChange={onChange}/> - {value} </>
}
//----------------------------------------------------
export const GetValueUncontrolledInputBuButtonPressByRef  = () =>{
  const [value, setValue]=useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const save = ()=>{
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)}

  return <> <input ref={inputRef} id={'inputId'}/> <button onClick={save}> Save </button> - actual value: {value} </>
}
//----------------------------------------------------

export const GetValueUncontrolledInputBuButtonPressById  = () =>{
  const [value, setValue]=useState("")
  const save = ()=>{
    const el = document.getElementById('inputId') as HTMLInputElement
    setValue(el.value)}
  return <> <input id={'inputId'}/> <button onClick={save}> Save </button> - actual value: {value} </>
}
//----------------------------------------------------
export const ControlledInputWithFixedValue  = () => <input value={'IT-incubator.by'}/>