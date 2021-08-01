import React from "react";
import PropsDemoChild from "./PropsDemoChild";

function PropsDemo() {
    const firstName = "John";
    const lastName = "Doe";

    let fn = () => {
        alert("Hello from parent function.")
    }

    let renderJsx = <h1>Parent JSX</h1>

    return (
        <div>
            <PropsDemoChild firstName={firstName} lastName={lastName} fn={fn} renderJsx={renderJsx}/>
        </div>
    );
}

// class PropsDemo extends React.Component {
//   render() {

//     const firstName = "John";
//     const lastName = "Doe";

//     let fn = () => {
//       alert("Hello from parent function.");
//     };

//     let renderJsx = <h1>Parent JSX</h1>;

//     return (
//       <div>
//         <PropsDemoChild
//           firstName={firstName}
//           lastName={lastName}
//           fn={fn}
//           renderJsx={renderJsx}
//         />
//       </div>
//     );
//   }
// }

export default PropsDemo;
