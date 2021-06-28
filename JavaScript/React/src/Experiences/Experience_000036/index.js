import React, { useState } from "react";

const Experience = () => {
  const val = useState(0)

   const Another = () => {
    const val = useState(1)

    return (
      <div>
        Another: {val}
      </div>
    );
  }

  return (
    <div>
      <span>Spawn an error in the console but it works</span>
      Experience: {val}
      <Another />
    </div>
  );
}

export default Experience;
