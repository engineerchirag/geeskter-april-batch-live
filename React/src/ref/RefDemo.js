import React, { createRef, useRef, useState } from "react";

function RefDemo(props) {
  const counterRef = useRef(0);
  const inputRef = useRef()
  const [, forceUpdate] = useState(0);

  let incrementCount = () => {
    counterRef.current = counterRef.current + 1;
    forceUpdate((x) => x + 1);
  };

  let decrementCount = () => {
    counterRef.current = counterRef.current - 1;
    forceUpdate((x) => x + 1);
  };

  let onButtonClick = () => {
    //   console.log(inputRef.current.value)
      inputRef.current.focus();
  }

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      {counterRef.current}
      <button onClick={decrementCount}>Decrement</button>
      <input ref={inputRef} />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

// class RefDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = createRef();
//   }

//   onButtonClick = () => {
//     //  console.log(this.inputRef.current.value)
//     this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         <input ref={this.inputRef} />
//         <button onClick={this.onButtonClick}>Focus the input</button>
//       </div>
//     );
//   }
// }

export default RefDemo;
