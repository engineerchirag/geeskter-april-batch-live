import React, { Component, useEffect, useState } from "react";

// class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   // Called after component is mounted
//   componentDidMount() {
//       this.counterInterval = setInterval(() => this.incrementCount(), 1000);
//   }

//   // Called when the component is ummounted
//   componentWillUnmount() {
//       clearInterval(this.counterInterval)
//   }

//   // Called when the component get's update
//   componentDidUpdate() {
//       console.log("Called when state get's changed")
//   }

//   incrementCount() {
//       this.setState({
//           count: this.state.count + 1
//       })
//   }

//   render() {
//     const { count } = this.state;
//     return <div>{count}</div>;
//   }
// }

function LifeCycle(props) {
    const [count, setCount] = useState(0);
    // Called eveytime once the component is mounter
    useEffect(() => {
        let counterInterval = setInterval(() => incrementCount(), 1000)
        return () => clearInterval(clearInterval)
    }, [])


    // Called once when the component is mounted for first time
    // It will also get called when the state passed in an dependency array gets updated
    // useEffect(() => {
    //     console.log("State count changed.")
    // }, [count])

    // Called evertime when any of the state chanages or component get's rerendered
    // Potential cause of memory leak in application
    // useEffect(() => {
    //     console.log("Called on any state change or renrender")
    // })

    let incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }
    
    return (
        <div>
            {count}
        </div>
    );
}

export default LifeCycle;
