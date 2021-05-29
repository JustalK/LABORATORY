import React, { useState, useMemo, useCallback } from "react";

const plusFive = num => {
  console.log("[+5] I was called!");
  return num + 5;
};

const Experience = () => {
  const [num, setNum] = useState(0);
  const [useless, setUseless] = useState(true);
  const numPlusFive = plusFive(num);
  const numPlusTen = useMemo(() => {
    console.log("[+10] I was called!");
    return num + 10;
  }, [num]);
  const numPlusTwenty = useCallback(() => {
    console.log("[+20] I was called!");
    return num + 20;
  }, [num]);

  return (
    <div>
      <button onClick={() => setUseless(c => !c)}>Trigger Useless and it will trigger +5 function too</button>
      <button onClick={() => setNum(n => n + 1)}>Add +1</button>
      <div>useless: { useless.toString() }</div>
      <div>Num: { num }</div>
      <div>Num + 5 (normal - look console): { numPlusFive }</div>
      <div>Num + 10 (memo): { numPlusTen }</div>
      <div>Num + 20 (callback from inside the component): { numPlusTwenty() }</div>
      <div>Open the console</div>
    </div>
  );
}

export default Experience;
