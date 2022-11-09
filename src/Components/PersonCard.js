import React from 'react'

function PersonCard(props) {
    return (
        <div>
            <h1>{props.name}, {props.lname} </h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hcolor}</p>
        </div>
    )
}

export default PersonCard