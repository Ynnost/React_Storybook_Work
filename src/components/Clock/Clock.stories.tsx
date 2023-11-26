import { useEffect, useState } from "react";
import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

export const Watch = () => {
  return (
    <>
      <Clock />
    </>
  );
};
