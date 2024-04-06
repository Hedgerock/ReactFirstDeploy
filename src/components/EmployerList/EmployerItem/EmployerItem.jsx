import { useState } from 'react';
import './EmployerItem.css';
import { EmployerLabel } from '../EmployerLabel';
import { InfoBlock } from '../InfoBlock';
import { ActionBlock } from '../ActionBlock';

export const EmployerItem = (props) => {
    const { data, functions, number, useStateFunc, setChange } = props
    const { id } = data

    const { editEmployer } = functions
    const { setExpandInfo, setCurrentId } = useStateFunc

    const numberVal = number + 1;

    const [ newName, setNewName ] = useState('');
    const [ newMiddleName, setNewMiddleName ] = useState('')
    const [ newSurname, setNewSurname ] = useState('');

    const [ deactivateUser, setDiactivateUser ] = useState(data.active);
    const [ changeInfo, setchangeInfo ] = useState(false);

    const newValues = { newName, newMiddleName, newSurname, changeInfo };
    const newSets = { setNewName, setNewMiddleName, setNewSurname, editEmployer };

    const initDelete = () => {
        setChange(prev => !prev);
    }

    const initDeactivation = () => {
        setDiactivateUser(prev => !prev)
        setChange(prev => !prev);
    }

    const initExpandInfo = () => {
        setExpandInfo(prev => !prev)
        setCurrentId(id)
    }

    const editHandler = () => {
        setchangeInfo(prev => !prev);
        setChange(prev => !prev);
    }


    return (
        <li className={ deactivateUser ? 'employer-item' : 'employer-item employer-item_deactivated' }>
            { !deactivateUser &&
                <div className="stamp">
                    <img 
                        src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Scrolls-PNG/Wax_Stamp_Red_Transparent_Image.png?m=1629833156" 
                        alt="" 
                    />
                </div>
            }
            { !changeInfo &&
                <EmployerLabel
                    initDeactivation = { initDeactivation } 
                    deactivateUser = { deactivateUser }
                    setDiactivateUser = { setDiactivateUser }
                    data = { data }
                />
            }
            <span className="employer-item__number">{`${numberVal}.`}</span>
            <InfoBlock 
                data = { data } 
                editEmployer = { editEmployer } 
                newValues = { { newName, newMiddleName, newSurname } }
                newSets = { { setNewName, setNewSurname, setNewMiddleName } }
                changeInfo = { changeInfo }
            />
            <button 
                onClick={ initExpandInfo }
                className='expand-info-btn' 
                title='Show more' 
                disabled = { !deactivateUser }
            >
                <i className="fa-solid fa-angles-down"></i>
            </button>

            <ActionBlock 
                editHandler = { editHandler }
                deactivateUser = { deactivateUser }
                initDelete = { initDelete }
                changeInfo = { changeInfo }
                setchangeInfo = { setchangeInfo }
                data = { data }
                values = { { newValues, newSets } }
            />
        </li>
    )
}