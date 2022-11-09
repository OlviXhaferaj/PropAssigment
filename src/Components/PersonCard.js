import React, {useState}  from 'react'


function PersonCard(props) {
    const [personsAge, setPersonAge ] = useState(props.age);
    return (
        <div>
            <h1>{props.name}, {props.lname} </h1>
            <p>Age: {personsAge}</p>
            <p>Hair Color: {props.hcolor}</p>
            
            <button onClick={() => setPersonAge(personsAge +1)}> See {props.name}'s age </button>
            
        </div>
    )
}

export default PersonCard