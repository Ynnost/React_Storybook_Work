import { useEffect, useState } from "react";

type PropsType = {};

export const Clock: React.FC<PropsType> = () => {
  const [data, setData] = useState(new Date());

  const get2diiqitsString = (num: number) => (num < 10 ? "0" + num : num);

  let hours = get2diiqitsString(data.getHours());
  let minutes = get2diiqitsString(data.getMinutes());
  let seconds = get2diiqitsString(data.getSeconds());

  useEffect(() => {
    const intervalId = setInterval(() => setData(new Date()), 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {
        <div>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      }
    </>
  );
};
