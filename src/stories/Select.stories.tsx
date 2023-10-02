
import {Select} from "../components/Select/Select";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select,
}

export const SelectControl = () => {
    const [selectValue, setSelectValue] = useState([
        {title:"Denis Yunin", value:1},
        {title:"Ira Yunina", value:2},
        {title:"Ivan Yunin", value:3},
        {title:"Anna Yunina", value:4},
    ])
    return <Select value={4} items={selectValue}/>
}
