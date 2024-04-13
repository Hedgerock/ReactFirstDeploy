import { makeDelete } from '../../../API/deleteEmployee'
import { makeEdit } from '../../../API/editEmployee'
import './ActionBlock.css'

export const ActionBlock = (props) => {
    const { editHandler, deactivateUser, initDelete, changeInfo, data, values, setchangeInfo } = props
    const { newValues } = values

    return (
        <div className="employer-item__action-block">
            <button 
                onClick={ changeInfo 
                    ? (() => makeEdit ({ data, func: editHandler, newValues })) 
                    : (() => setchangeInfo(prev => !prev)) 
                } 
                className="employer-item__btn employer-item__btn_edit"
                disabled = { !deactivateUser }
            >
                { changeInfo 
                    ? <i className="fa-solid fa-check" title="Confirm changes"></i>
                    : <i className="fa-solid fa-wrench" title="Edit"></i> 
                }
            </button>
            <button 
                onClick={ () => makeDelete(data, initDelete) } 
                className="employer-item__btn employer-item__btn_del"
                title = "Delete employee"
                disabled = { !deactivateUser }
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}