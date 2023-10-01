import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

// type  RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5,
// }

export function Rating() {

    let [rating, setRating] = useState(0)

    //console.log("Rating rendering")

    // const ratingFoo = (v:number) =>{
    //    return  setRating(v)
    // }

    return (
        <div>
            <Star selected={rating > 0} setValue={()=>setRating(1)}/>
            <Star selected={rating > 1} setValue={()=>setRating(2)}/>
            <Star selected={rating > 2} setValue={()=>setRating(3)}/>
            <Star selected={rating > 3} setValue={()=>setRating(4)}/>
            <Star selected={rating > 4} setValue={()=>setRating(5)}/>
        </div>
    )
}


type  StarPropsType = {
    selected: boolean,
    //callback: () => void
    setValue:()=>void
    // value:1 | 2 | 3 |4 |5
}

function Star(props: StarPropsType) {

    const spanStyle = {
        width: "9em",
        height: "30px",
        borderRadius: "20px",
        border: "2px solid black",
        //display: "inline-block",
        marginLeft: "auto",
        marginRight:"auto",
    }

    return <span onClick={()=>props.setValue()}>{props.selected? <b>star </b> : "star "}</span>

}

{/*// return props.selected ? <span style={spanStyle} onClick={props.callback}><b>Star </b></span> :*/}
{/*//     <span style={spanStyle} onClick={props.callback}>Star </span>*/}

// if (props.value === 1) {
//     return (
//         //Ctr Alt L - выровнить kod
//         <div>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     )
// }
// if (props.value === 2) {
//     return (
//         //Ctr Alt L - выровнить kod
//         <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     )
// }
// if (props.value === 3) {
//     return (
//         //Ctr Alt L - выровнить kod
//         <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     )
// }
// if (props.value === 4) {
//     return (
//         //Ctr Alt L - выровнить kod
//         <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//         </div>
//     )
// }
// if (props.value === 5) {
//     return (
//         //Ctr Alt L - выровнить kod
//         <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//         </div>
//     )
// }
//
// return (
//     //Ctr Alt L - выровнить kod
//     <div>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//     </div>
// )

// return (
//     <div>
//         <Star selected={rating > 0}/><button onClick={()=>{setRating(1)}}>1</button>
//         <Star selected={rating > 1}/><button onClick={()=>{setRating(2)}}>2</button>
//         <Star selected={rating > 2}/><button onClick={()=>{setRating(3)}}>3</button>
//         <Star selected={rating > 3}/><button onClick={()=>{setRating(4)}}>4</button>
//         <Star selected={rating > 4}/><button onClick={()=>{setRating(5)}}>5</button>
//         <Star selected={rating > 5}/><button onClick={()=>{setRating(6)}}>6</button>
//     </div>
// )
// }
