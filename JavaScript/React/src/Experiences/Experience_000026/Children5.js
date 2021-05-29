import React, { useState, useEffect } from "react";

const Children5 = ({ numPlusFive }) => {
  const [num5, setNum5] = useState(0);

  useEffect(() => {
    setNum5(numPlusFive())
  }, [numPlusFive])
  return (
    <>
      <div>Num + 5 (normal - look console): { num5 }</div>
    </>
  );
}

export default Children5;
