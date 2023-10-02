import {Accordion} from "../components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired");
const callbackOnClick = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={callbackOnClick}/>

export const UsersCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} items={[
    {title: "Denis", value: 1},
    {title: "Ira", value: 2},
    {title: "Anna", value: 3},
    {title: "Ivan", value: 4},
]} onClick={callbackOnClick}/>

export const MadeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    const [users, setUsers] = useState([
        {title: "Denis", value: 1},
        {title: "Ira", value: 2},
        {title: "Anna", value: 3},
        {title: "Ivan", value: 4},
    ])
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={users}
                      onClick={(value) => {
                          alert(`User with ID ${value} by happy`)
                      }}/>
}