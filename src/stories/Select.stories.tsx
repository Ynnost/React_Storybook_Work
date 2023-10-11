import { Select } from "../components/Select/Select";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Select",
  component: Select,
};

export const SelectControl = () => {
  const [selectValue, setSelectValue] = useState([
    { title: "Denis Yunin", value: 1 },
    { title: "Ira Yunina", value: 2 },
    { title: "Ivan Yunin", value: 3 },
    { title: "Anna Yunina", value: 4 },
  ]);

  const [value, setValue] = useState(1);
  return <Select value={value} items={selectValue} onChange={setValue} />;
};

export const SelectUnControl = () => {
  const [selectValue, setSelectValue] = useState([
    { title: "Denis Yunin", value: 1 },
    { title: "Ira Yunina", value: 2 },
    { title: "Ivan Yunin", value: 3 },
    { title: "Anna Yunina", value: 4 },
  ]);

  const [value, setValue] = useState(1);
  return <Select value={null} items={selectValue} onChange={setValue} />;
};
