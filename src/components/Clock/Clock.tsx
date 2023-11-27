import { useEffect, useState } from "react";
import s from "./clockStyle.module.css";

type PropsType = {};

export const Clock: React.FC<PropsType> = () => {
  const [data, setData] = useState(new Date());

  const get2diiqitsString = (num: number) => (num < 10 ? "0" + num : num);

  let hours = get2diiqitsString(data.getHours());
  let minutes = get2diiqitsString(data.getMinutes());
  let seconds = get2diiqitsString(data.getSeconds());

  const deg = 6;

  let hh = data.getHours() * 30;
  let mm = data.getMinutes() * deg;
  let ss = data.getSeconds() * deg;

  useEffect(() => {
    const intervalId = setInterval(() => setData(new Date()), 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <br></br>
      <div className={s.clock}>
        <div className={s.hour}>
          <div
            className={s.hr}
            style={{
              transform: `rotateZ(${hh + mm / 12}deg)`,
            }}
          ></div>
        </div>
        <div className={s.min}>
          <div
            className={s.mn}
            style={{
              transform: `rotateZ(${mm}deg)`,
            }}
          ></div>
        </div>
        <div className={s.sec}>
          <div
            className={s.sc}
            style={{
              transform: `rotateZ(${ss}deg)`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
