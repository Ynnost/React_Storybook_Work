import React, { useState, useReducer } from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange?: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

type ActionType = {
  type: string;
};



const reducer = (state: boolean, action: ActionType) => {
  if (action.type === "TOGGLE-COLLAPSED") {
    return !state;
  }

  return state;
};

export const Accordion = (props: AccordionPropsType) => {
  //   let [collapsed, setCollapsed] = useState(false);
  const [collapsed, dispathCollapsed] = useReducer(reducer, false);

  return (
    <div>
      <AccordionTitleMemo
        title={props.titleValue}
        onClick={() => {
          dispathCollapsed({ type: "TOGGLE-COLLAPSED" });
        }}
      />
      {!collapsed && (
        <AccordionBodyMemo items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>---{props.title}---</h3>;
}



type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};



const AccordionBody = (props: AccordionBodyPropsType) => {
  return (
    <ul>
      {props.items.map((el, i) => (
        <li
          onClick={() => {
            props.onClick(el.value);
          }}
          key={i}
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
};

export const AccordionMemo = React.memo(Accordion);
const AccordionBodyMemo = React.memo(AccordionBody);
const AccordionTitleMemo = React.memo(AccordionTitle);
