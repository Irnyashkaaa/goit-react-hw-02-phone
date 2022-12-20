import React from 'react'
import PropTypes from 'prop-types'
import s from './Contacts.module.css'

export const Contact = ({name, number, deleteUser}) => {
    return <div className={s.contact}>
        <div className={s.name}>{name}:</div>
        <div className={s.number}>{number}</div>
        <button className={s.button} onClick={() => deleteUser(name)}>delete</button>
    </div>
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired
}