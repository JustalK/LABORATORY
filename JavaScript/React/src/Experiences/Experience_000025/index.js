import React, { useState, useMemo, useCallback } from "react";

const plusFive = num => {
  console.log("[+5] I was called!");
  return num + 5;
};

const plusTen = num => {
  console.log("[+10] I was called!");
  return num + 10;
};

const plusTwenty = num => {
  console.log("[+20] I was called!");
  return num + 20;
};

const Experience = () => {
  const [num, setNum] = useState(0);
  const [useless, setUseless] = useState(true);
  const numPlusFive = plusFive(num);
  const numPlusTen = useMemo(() => {
    return plusTen(num)
  }, [num]);
  /**
  // Trigger a warning since we are using no dependencies, so it wull rerender everytime
  const numPlusTen2 = useMemo(() => {
    return plusTen(num)
  }, []);
  **/
  const numPlusTwenty = useCallback(() => {
    return plusTwenty(num)
  }, [num]);
  // This one since the dependencies is not determined, it keeps being reloaded
  // const numPlusTwenty2 = useCallback(plusTwenty(num), [num]);

  return (
    <div>
      <button onClick={() => setUseless(c => !c)}>Trigger Useless and it will trigger +5 function too</button>
      <button onClick={() => setNum(n => n + 1)}>Add +1</button>
      <div>useless: { useless }</div>
      <div>Num: { num }</div>
      <div>Num + 5: { numPlusFive }</div>
      <div>Num + 10: { numPlusTen }</div>
      <div>Num + 20: { numPlusTwenty }</div>
      <div>Open the console</div>
    </div>
  );
}

export default Experience;
