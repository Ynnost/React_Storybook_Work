import { useEffect, useState } from "react";
import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

export const WatchAnalog = () => {
  return (
    <>
      <Clock mode={"analog"} />
    </>
  );
};

export const WatchDigital = () => {
  return (
    <>
      <Clock mode={"digital"} />
    </>
  );
};
