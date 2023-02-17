import React from "react";

const ContactList = (props) => {
    let selectContact = (contact) => {
        console.log(contact);
        props.selectedContact(contact);
    }
    return (
        <div className="row">
            <pre>{JSON.stringify}</pre>

            <div className="col-md-8">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>Nmae</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contact.map((user) => {
                                return (
                                    <tr key={user.id} onClick={selectContact.bind(this, user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default ContactList;


// {
//     props.contact.map((contact) => {
//         return
//     })
// }