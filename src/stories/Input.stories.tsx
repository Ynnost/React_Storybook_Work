import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input',
    //component: Input,
};


export const UncontrolledInput = () => <input/>
//-----------------------------------------------------------------------------
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <> <input onChange={onChange}/> - {value} </>
}
//-----------------------------------------------------------------------------
export const GetValueUncontrolledInputBuButtonPressByRef = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef} id={'inputId'}/>
        <button onClick={save}> Save</button>
        - actual value: {value} </>
}
//-----------------------------------------------------------------------------
export const GetValueUncontrolledInputBuButtonPressById = () => {
    const [value, setValue] = useState("")
    const save = () => {
        const el = document.getElementById('inputId') as HTMLInputElement
        setValue(el.value)
    }
    return <> <input id={'inputId'}/>
        <button onClick={save}> Save</button>
        - actual value: {value} </>
}
//-----------------------------------------------------------------------------
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
// return <input value={parentValue} onChange={action("want to change")}/>

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    //return <input type="checkbox" checked={parentValue} onChange={action("want changes")}/>
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const UnControlledSelect = () => {
    return <select>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Nizhny Novgoro</option>
        <option value={'3'}>Voznesenskoe</option>
    </select>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Nizhny Novgoro</option>
        <option value={'3'}>Voznesenskoe</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'IT-incubator.by'}/>


