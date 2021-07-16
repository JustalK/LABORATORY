import React, { useEffect, useCallback, useState } from "react";
const REPO = 'https://api.github.com/users/justalk/repos';

const Experience = () => {
  const [name, setName] = useState(null)
  const [val, setVal] = useState(0)

  const load = useCallback(async () => {
    const res = await fetch(REPO, {cache: 'no-cache'});
    const repo = res.ok ? await res.json() : null;
    setName(repo ? repo[0].name : 'No Data')
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return (
    <div>
      <button onClick={() => setVal(v => v + 1)}>Re-Render</button>
      Name Repo: {name}
      <div>Val: {val}</div>
    </div>
  );
}

export default Experience;
