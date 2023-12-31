import React, {useState} from 'react';

export type PropsType = {
    onChange: (on: boolean) => void
}


export const OnOff = (props: PropsType) => {
    console.log('OnOff')

    // let on = false
    let [on, setOn] = useState(false)//hook
    console.log(`on: ${on}`)


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const ofClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div onClick={onClicked} style={onStyle}>ON</div>
            <div onClick={ofClicked} style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;