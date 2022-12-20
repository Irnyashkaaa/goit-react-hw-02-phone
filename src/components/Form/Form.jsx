import React from 'react'
import PropTypes from 'prop-types'
import s from './Form.module.css'


export const Form = ({ name, nameOnChange, number, numberOnChange, submitButton }) => {
    
    return <form action="">
        <label htmlFor="name">
            <input
                value={name} 
                onChange={nameOnChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <label htmlFor="number">
            <input
                value={number}
                onChange={numberOnChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
       
        <button type='button' onClick={submitButton}>ADD CONTACT</button>
    </form>
}

Form.propTypes = {
    name: PropTypes.string.isRequired,
    nameOnChange: PropTypes.func.isRequired,
    number: PropTypes.string.isRequired,
    numberOnChange: PropTypes.func.isRequired,
    submitButton: PropTypes.func.isRequired
}