import { useState, useEffect } from "react";

/**
* This is a custom hook
**/
export default function useCustom() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    // Just for random
    setActive(Math.random() > 0.5)
  }, []);

  return active
}
