import React from "react";

const ContactDetails=(props)=>{
    return (
        <div>
            <h1>contact ContactDetails</h1>
            <div className="card">
            <div className="card-header">
                <img src={props.contact.image} alt=''/>
            </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-grop-item">{props.contact.id}</li>
                        <li className="list-grop-item">{props.contact.firstName}</li>
                        <li className="list-grop-item">{props.contact.bloodGroup}</li>
                        <li className="list-grop-item">{props.contact.ssn}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails