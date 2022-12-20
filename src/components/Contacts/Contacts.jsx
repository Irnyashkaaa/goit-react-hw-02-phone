import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from './Contact'


export const Contacts = ({contacts, filter, deleteUser}) => {
    let visibleContacts;
    if (filter.length > 0) {
        visibleContacts = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter)
        })
    } else {
        visibleContacts = contacts;
    }
    return <div>
        {visibleContacts.map(contact => {
            return <Contact key={contact.name + contact.number} 
            name={contact.name} number={contact.number} id={contact.name + contact.number}
            deleteUser={deleteUser}/>
        })}
        
    </div>
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    filter: PropTypes.string,
    deleteUser: PropTypes.func.isRequired
}