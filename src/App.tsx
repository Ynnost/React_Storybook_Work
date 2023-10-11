import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {RatingControlled, RatingValueType} from "./components/Rating/RatingControlled";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import ControlledOnOff from "./components/OnOff/ControlledOnOff";


function App() {

    let [ratingValue, getRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchON, setSwitchON] = useState<boolean>(false)

    return (
        <div className={'App'}>

            <UnControlledAccordion
                titleValue={'Users'}
            />

           

        </div>
    );
}


export default App;


// // type  PageTitlePropsType = {
// //     title: string
// // }
// // function PageTitle(props: PageTitlePropsType) {
// //     console.log("PageTitle rendering")
// //     return <h1>{props.title}</h1>
// //
// // }
//
//
// export default App;
// // function sum(a:number, b:number) {
// //     //debugger // отлаживать команду по шагам
// //     alert(a + b)
// // }
// // sum(33,44);
// // sum(100,300);
//
// //functions declaration
// function App() {
//     // console.log("App rendering")
//     //полезное что-то
//
//
//     // обязана вернуть JSX - КОМПОНЕНТЫ
//     return (
//         <div>
//             {/*<input/>*/}
//             {/*<input checked={true} value={"yo"} type={"password"}/>*/}
//             {/*<PageTitle title={"This is APP component"}/>*/}
//             {/*<Accordion titleValue={"My instrument"} collapsed={true}/>*/}
//             {/*<PageTitle title={"My friends"}/>*/}
//             {/*<div>Article 1</div>*/}
//             {/*<Rating value={3}/>*/}
//             {/*<Accordion titleValue={"My music"} collapsed={false}/>*/}
//             {/*<div>Article 2</div>*/}
//             {/*<Rating value={0}/>*/}
//             {/*<Rating value={1}/>*/}
//             {/*<Rating value={2}/>*/}
//             {/*<Rating value={3}/>*/}
//             {/*<Rating value={4}/>*/}
//             {/*<Rating value={5}/>*/}
//
//
//         </div>
//     );
// }
//
// // type  PageTitlePropsType = {
// //     title: string
// // }
// // function PageTitle(props: PageTitlePropsType) {
// //     console.log("PageTitle rendering")
// //     return <h1>{props.title}</h1>
// //
// // }