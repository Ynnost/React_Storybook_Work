import s from "../Select/Select.module.css";
import { useState, KeyboardEvent, useEffect } from "react";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const valueSelect = props.items.find((el) => el.value === props.value);

  const hoveredValue = props.items.find(
    (el) => el.value === hoveredElementValue
  );

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);

  const onPressKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement =
            e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      props.onChange(props.items[0].value);
    }
  };

  const showItem = () => setActive(!active);

  const onItemClick = (value: any) => {
    props.onChange(value);
    showItem();
  };

  return (
    <>
      <div className={s.select + ""} onKeyUp={onPressKey} tabIndex={0}>
        <span className={s.main} onClick={showItem}>
          {valueSelect && valueSelect.title}
        </span>
        {active && (
          <div className={s.items}>
            {props.items.map((i) => (
              <div
                onMouseEnter={() => setHoveredElementValue(i.value)}
                onClick={() => onItemClick(i.value)}
                key={i.value}
                className={
                  s.item + " " + (hoveredValue === i ? s.selected : "")
                }
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
