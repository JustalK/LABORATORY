import React, { useState, useEffect } from "react";

const ExperienceG = () => {
  const [countA, setCountA] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')

  /**
  * In this version, when you click the button you might see the long string showing from time to time
  * It happen because there is two reload in a short time, the one from the onClick and the one from the useEffect
  * See Experience G2, for seeing how to fix that
  **/
  useEffect(() => {
    if (countA === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
      setCountA(Math.random() * 100)
    }
  }, [countA])

  return (
    <div>
      <button onClick={() => setCountA('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')}>
        Change State and trigger flicker effect
      </button>
      <div>Count : {countA.toString()}</div>
      <div>Click the button multiple time, you should see a string appeared from time to time</div>
    </div>
  );
}

export default ExperienceG;
