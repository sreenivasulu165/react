import React from 'react'
import { useEffect, useState } from 'react'
import ContactDetails from './ContactDetails'
import ContactList from './ContactList'
import axios from 'axios';


let ContactApp = () => {
    let [contact, setContact] = React.useState({})
    let [selContact, setSelectedContacts] = React.useState({})


    let selectedContact = (contact) => {
        setSelectedContacts(contact);
    }


    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then((response) => {
                setContact(response.data);
                // console.log(contact)
            })
            .catch(() => { })
    },)

    return <div className='container'>
        <pre>{JSON.stringify(contact)}</pre>
        <div className='row'>
            <div className='col-md-8'>
                {
                    Object.keys(contact).length > 0 ? <React.Fragment>
                        <ContactList contact={contact.users}
                            selectedContact={selectedContact}
                        />
                    </React.Fragment> : null
                }
            </div>
            <div className='col-md-4'>
                {/* {JSON.stringify(selContact)} */}
                {
                    Object.keys(selContact).length > 0 ? <>
                         <ContactDetails contact={selContact} 
                        />
                    </> : null
                }
            </div>
        </div>
    </div>

}

export default ContactApp