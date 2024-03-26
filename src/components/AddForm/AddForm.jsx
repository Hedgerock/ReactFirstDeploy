import { useState } from 'react';
import './AddForm.css';

export const AddForm = (props) => {
    const { addEmployer } = props;
    const [ name, setName ] = useState('');
    const [ middleName, setMiddleName ] = useState('')
    const [ surname, setSurname ] = useState('');

    const addHandler = () => {
        if (!name || !surname) {
            console.warn('Please add information in all inputs');
            return 
        }

        const employer = {
            name,
            surname,
            middleName,
            active: true
        }
        addEmployer(employer)
        setName('');
        setSurname('');
        setMiddleName('');
    }

    return (
        <div className="employer-add-form">
            <div className="input-box">
                <input 
                    onChange={ e => setName(e.target.value) }
                    type="text"
                    value={ name }
                    className="employer-add-form__input employer-add-form__input_name"
                    placeholder='Name'
                />
                <input 
                    onChange={ e => setMiddleName(e.target.value) }
                    type="text"
                    value={ middleName }
                    className="employer-add-form__input employer-add-form__input_middle-name"
                    placeholder='Middle name (optional)'
                />
                <input 
                    onChange={ e => setSurname(e.target.value) }
                    type="text"
                    value={ surname }
                    className="employer-add-form__input employer-add-form__input_surname"
                    placeholder='Surname'
                />
            </div>
            <button onClick = { addHandler }className="employer-add-form__btn">add</button>
        </div>
    )
}