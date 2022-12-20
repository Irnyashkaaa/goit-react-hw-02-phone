import React from 'react'
import PropTypes from 'prop-types'
import s from './Form.module.css'

export const FilterFormInput = ({ filter, filterOnChange }) => {
    return <div className={s.filter}>
        <div>Filter form</div>
        <input type="text" value={filter} onChange={filterOnChange} />
    </div>
}

FilterFormInput.propTypes = {
    filter: PropTypes.string,
    filterOnChange: PropTypes.func.isRequired
}

