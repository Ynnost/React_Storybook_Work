import { time } from "console";
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

export const SetTimeoutExample = () => {
  console.log("SetTimeoutExample");

  const [counter, setCounter] = useState(1);

  const [fake, setFake] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCounter((state) => state + 1);
    }, 1000);
  }, []);

  // setTimeout(() => {
  //   document.title = counter.toString();
  // }, 1000);

  // const counterIncreaseCounter = () => setCounter(counter + 1);

  // const counterIncreaseFake = () => setFake(fake + 1);

  return (
    <>
      Hello, counter: {counter} fake:{fake}
      {/* <button onClick={counterIncreaseCounter}>counter +</button>
      <button onClick={counterIncreaseFake}>fake +</button> */}
    </>
  );
};

export const WatchExample = () => {
  const watch = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return `${hours < 12 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const [data, setData] = useState(new Date());

  useEffect(() => {
    setInterval(()=>setData(new Date()), 1000);
  }, []);

  

  return (
    <>
      {
        <div>
          <p color="#000">{watch()}</p>
        </div>
      }
    </>
  );
};
