// this is a ReactJS component for a card
// We use export default to export the component function
import React from "react";
import "./card.css"
// props is the Props in the element for example: <card name="Hello"></card>
//                                                      ⬆ this is the prop. the name of this prop is "name" and the value is "Hello"
// We can use name instead of using props
// You cannot add more than two elements in one ()
export default function Card(props) {
    return (
        <div className="card">
            <div className="card-inside">
                <div className="card-top">
                    <div>
                        <h1>{props.username}</h1>
                        <p>{props.major}</p>
                    </div>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>)
}

// And now lets start implementing Props

// We cant see it because we didnt call this function in the App.js