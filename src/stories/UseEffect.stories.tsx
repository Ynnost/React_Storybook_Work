import { useEffect, useMemo, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  console.log("SimpleExample");

  const [counter, setCounter] = useState(1);

  const [fake, setFake] = useState(1);

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
    //api.getUsers().then('')
    //setInterval
    //indexedDB
    //document.getElementID
    //document.title = 'User ';
  });

  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)");
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  const counterIncreaseCounter = () => setCounter(counter + 1);

  const counterIncreaseFake = () => setFake(fake + 1);

  return (
    <>
      Hello, {counter} {fake}
      <button onClick={counterIncreaseCounter}>counter +</button>
      <button onClick={counterIncreaseFake}>fake +</button>
    </>
  );
};
