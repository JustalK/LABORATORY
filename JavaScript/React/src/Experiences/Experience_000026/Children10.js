import React, { useState, useEffect } from "react";

const Children10 = ({numPlusTen}) => {
  const [num10, setNum10] = useState(0);

  useEffect(() => {
    // Pay attention here ! this is not a function compare to the other children
    setNum10(numPlusTen)
  }, [numPlusTen])
  return (
    <>
      <div>Num + 10 (memo): { num10 }</div>
    </>
  );
}

export default Children10;
