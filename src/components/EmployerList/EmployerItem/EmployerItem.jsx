import { useState } from 'react';
import './EmployerItem.css';
import { EmployerLabel } from '../EmployerLabel';
import { InfoBlock } from '../InfoBlock';
import { ActionBlock } from '../ActionBlock';

export const EmployerItem = (props) => {
    const { data, number, deleteEmployer, editEmployer, changeEmployeeStatus } = props
    const { name, middleName, surname, id } = data

    const [ newName, setNewName ] = useState('');
    const [ newMiddleName, setNewMiddleName ] = useState('')
    const [ newSurname, setNewSurname ] = useState('');
    const [ deactivateUser, setDiactivateUser ] = useState(data.active);
    const [changeInfo, setchangeInfo] = useState(false)

    const initDelete = () => {
        deleteEmployer(id);
    }

    const initDeactivation = () => {
        setDiactivateUser(prev => !prev)
        changeEmployeeStatus( id, deactivateUser )
    }

    const editHandler = () => {
        if (changeInfo) {
            data.name = newName || data.name;
            data.middleName = newMiddleName;
            data.surname = newSurname || data.surname;

            editEmployer(id, data.name, data.surname, data.middleName)
        }

        if (!changeInfo) {
            setNewName(data.name);
            setNewMiddleName(data.middleName);
            setNewSurname(data.surname);
        }

        setchangeInfo(prev => !prev);
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
                />
            }
            <span className="employer-item__number">{`${number + 1}.`}</span>
            <InfoBlock 
                setNewSurname = { setNewSurname }
                newSurname = { newSurname }
                setNewName = { setNewName }
                newName = { newName }
                setNewMiddleName = { setNewMiddleName }
                newMiddleName = { newMiddleName }
                middleName = { middleName }
                name = { name }
                surname = { surname }
                changeInfo = { changeInfo }
            />

            <ActionBlock 
                editHandler = { editHandler }
                deactivateUser = { deactivateUser }
                initDelete = { initDelete }
                changeInfo = { changeInfo }
            />
        </li>
    )
}