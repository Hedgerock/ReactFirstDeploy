import { url } from '../../../employees'
import './ActionBlock.css'

export const ActionBlock = (props) => {
    const { editHandler, deactivateUser, initDelete, changeInfo, data, values, setchangeInfo } = props
    const { id } = data
    const { newValues } = values
    const { newName, newMiddleName, newSurname } = newValues

    const makeDelete = () => {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            response.ok ? initDelete() : console.error('Error in updating process');
        })
    }

    const makeEdit = () => {
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ 
                name: newName || data.name, 
                middleName: newMiddleName || data.middleName, 
                surname: newSurname || data.surname })
        })
        .then((response) => {
            response.ok ? editHandler() : console.error('Error in updating process');
        })
    }

    return (
        <div className="employer-item__action-block">
            <button 
                onClick={ changeInfo ? makeEdit : (() => setchangeInfo(prev => !prev)) } 
                className="employer-item__btn employer-item__btn_edit"
                disabled = { !deactivateUser }
            >
                { changeInfo 
                    ? <i className="fa-solid fa-check" title="Confirm changes"></i>
                    : <i className="fa-solid fa-wrench" title="Edit"></i> 
                }
            </button>
            <button 
                onClick={ makeDelete } 
                className="employer-item__btn employer-item__btn_del"
                title = "Delete employee"
                disabled = { !deactivateUser }
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}