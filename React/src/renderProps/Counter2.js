import React from "react";

function Counter2(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <button style={{ color: "red" }} onClick={incrementCount}>
        {count}
      </button>
    </div>
  );
}

export default Counter2;
