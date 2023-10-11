import React, { useReducer } from "react";
import { TOGGLE_CONSTANT, reducer } from "./reducer";

type ControlledAccordionPropsType = {
  titleValue: string;
};

export const UnControlledAccordion = (props: ControlledAccordionPropsType) => {
  const [collapsedState, dispathCollapsed] = useReducer(reducer, {collapsed:false});

  return (
    <div>
      <ControlledAccordionTitle
        onClick={() => dispathCollapsed({ type: TOGGLE_CONSTANT })}
        title={props.titleValue}
      />
      {!collapsedState.collapsed && <ControlledAccordionBody />}
    </div>
  );
};

type ControlledAccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function ControlledAccordionTitle(props: ControlledAccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>{props.title}</h3>;
}

function ControlledAccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
