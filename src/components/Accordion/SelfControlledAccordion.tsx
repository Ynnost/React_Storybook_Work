import React from 'react';

type ControlledAccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange:()=>void
}

const SelfControlledAccordion = (props:ControlledAccordionPropsType) => {

    return (<div>
        <ControlledAccordionTitle onChange={props.onChange} title={props.titleValue}/>
        {!props.collapsed && <ControlledAccordionBody/>}
    </div>)
}

type ControlledAccordionTitlePropsType = {
    title: string
    onChange:()=>void
}

function ControlledAccordionTitle(props: ControlledAccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

function ControlledAccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default SelfControlledAccordion;