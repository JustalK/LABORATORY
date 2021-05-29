import React, { useState, useEffect } from "react";

const Children = ({numPlusTwenty}) => {
  const [num20, setNum20] = useState(0);

  useEffect(() => {
    setNum20(numPlusTwenty(1))
  }, [numPlusTwenty])
  return (
    <>
      <div>Num + 20 (callback): { num20 }</div>
    </>
  );
}

export default Children;
