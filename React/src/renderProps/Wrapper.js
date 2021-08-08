import React, { useState } from "react";

function Wrapper(props) {
  const { render } = props;
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <div>{render(count, incrementCount)}</div>;
}

export default Wrapper;
