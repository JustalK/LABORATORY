import React, { useState, useMemo, useCallback } from "react";
import Children5 from './Children5';
import Children10 from './Children10';
import Children20 from './Children20';

const Experience = () => {
  const [num, setNum] = useState(0);
  const [useless, setUseless] = useState(true);
  const numPlusFive =  () => {
    console.log("[+5] I was called!");
    return num + 5;
  }
  // A useMemo cannot receive any parameter, so you cannot do the +nbr like in the callback
  const numPlusTen = useMemo(() => {
    console.log("[+10] I was called!");
    return num + 10;
  }, [num]);
  const numPlusTwenty = useCallback(nbr => {
    console.log("[+20] I was called!");
    return num + 20 + nbr;
  }, [num]);

  return (
    <div>
      <button onClick={() => setUseless(c => !c)}>Trigger Useless and it will trigger +5 function too</button>
      <button onClick={() => setNum(n => n + 1)}>Add +1</button>
      <div>
        <div>useless: { useless.toString() }</div>
        <div>Num: { num }</div>
        <Children5 numPlusFive={numPlusFive} />
        <Children10 numPlusTen={numPlusTen} />
        <Children20 numPlusTwenty={numPlusTwenty} />
      </div>
    </div>
  );
}

export default Experience;
