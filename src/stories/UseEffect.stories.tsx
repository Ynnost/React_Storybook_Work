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

export const SetIntervalExample = () => {
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
    return `${hours < 12 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const [data, setData] = useState(new Date());

  useEffect(() => {
    setInterval(() => setData(new Date()), 1000);
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

export const ResetUseEffectExample = () => {
  console.log("Component render");

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("Effect occourret: " + counter);
    return () => {
      console.log("Reset Effect: " + counter);
    };
  }, [counter]);

  const increase = () => setCounter(counter + 1);

  return (
    <>
      Hello, counter: {counter} <button onClick={increase}>+</button>
      <br />
    </>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");
  console.log("Component render: " + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key);
    };
    window.document.addEventListener("keypress", handler);
    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, [text]);

  return <>Typed text: {text}</>;
};

export const SetTimeoutExample = () => {
  const [text, setText] = useState("");
  console.log("Component render: " + text);

  useEffect(() => {
    const timeoutIS = setTimeout(() => {
      setText("3 seconds passed");
    }, 3000);
    return () => {
      clearTimeout(timeoutIS);
    };
  }, [text]);

  return <>Typed text: {text}</>;
};
