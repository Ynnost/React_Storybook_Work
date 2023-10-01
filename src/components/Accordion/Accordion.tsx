import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}

function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    // const toggleFoo = ()=> { if (!collapsed){setCollapsed(true)}else {setCollapsed(false)}}
    // console.log(collapsed)

        return (<div>
            <AccordionTitle callback={()=>{setCollapsed(!collapsed)}} title={props.titleValue}/>
            {/*<button onClick={toggleFoo}>TOGGLE</button>*/}
            {collapsed && <AccordionBody/>}
        </div>)
    }

type AccordionTitlePropsType = {
    title: string
    callback:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    //console.log("AccordionTitle rendering")
    return <h3 onClick={props.callback}>{props.title}</h3>
}

function AccordionBody() {
   // console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;


// if (props.collapsed === true) {
//     return <div>
//         <AccordionTitle title={props.titleValue}/>
//     </div>
// } else {
//     return <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//     </div>
// }


// function Accordion(props: AccordionPropsType) {
//
//     let [collapsed, setCollapsed] = useState(false);
//
//     const toggleFoo = ()=> { if (!collapsed){setCollapsed(true)}else {setCollapsed(false)}}
//     console.log(collapsed)
//
//     return (<div>
//         <AccordionTitle title={props.titleValue}/>
//         <button onClick={toggleFoo}>TOGGLE</button>
//         {collapsed && <AccordionBody/>}
//     </div>)
// }
//
// type AccordionTitlePropsType = {
//     title: string
// }
//
// function AccordionTitle(props: AccordionTitlePropsType) {
//     //console.log("AccordionTitle rendering")
//     return <h3>{props.title}</h3>
// }
//
// function AccordionBody() {
//     // console.log("AccordionBody rendering")
//     return <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// }
//
// export default Accordion;
