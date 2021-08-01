import React from 'react';

const formatName = (personInformation) => {
    return `${personInformation.firstName} ${personInformation.lastName}`
}

const personInformation = {
    firstName: "John",
    lastName: "Doe"
}

function Jsx(props) {
    return (
        <div>
            Hello! {formatName(personInformation)}
        </div>
    );
}

export default Jsx;