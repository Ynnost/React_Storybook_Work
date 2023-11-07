import { useMemo, useState } from "react";

export default {
  title: "useState demo",
};

function generateData() {
  console.log("generateData()");
  return 1;
}

export const Example1 = () => {
  console.log("Example1");

  // const initValue = useMemo(generateData, []);
  // const [counter, setCounter] = useState(initValue);

  const [counter, setCounter] = useState(generateData);

  // const counterIncrease = () => setCounter(counter + 1);

  const counterIncrease = () => setCounter(changer);

  const changer = (state:number)=> state + 1

  return (
    <>
      <button onClick={counterIncrease}>+</button>
      {counter}
    </>
  );
};
