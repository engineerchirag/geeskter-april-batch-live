import React from 'react';

function Counter1(props) {
    const {count, incrementCount} = props
    return (
        <div>
            <button style={{color: "purple"}} onClick={incrementCount}>{count}</button>
        </div>
    );
}

export default Counter1;