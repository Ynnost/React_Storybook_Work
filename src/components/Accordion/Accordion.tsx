import React, {useState} from "react";

type ItemType = {
    title:string
    value:any
}


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick:(value:any)=>void
}

export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false);


    return (<div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>)
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>---{props.title}---</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick:(value:any)=>void
}
const AccordionBody = (props:AccordionBodyPropsType) => {

    return <ul>
        {props.items.map((el,i)=><li onClick={()=>{props.onClick(el.value)}} key={i}>{el.title}</li>)}
    </ul>
}




