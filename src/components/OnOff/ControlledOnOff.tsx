import React, {useState} from 'react';

export type PropsType = {
    on: boolean
    onChange:(on:boolean)=>void
}


export const ControlledOnOff = (props:PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.on ? "red" : "white",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
    }



    return (
        <div>
            <div onClick={()=>{props.onChange(true)}} style={onStyle}>ON</div>
            <div onClick={()=>{props.onChange(false)}} style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default ControlledOnOff