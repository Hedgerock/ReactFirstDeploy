import './ActionBlock.css'

export const ActionBlock = (props) => {
    const { editHandler, deactivateUser, initDelete, changeInfo } = props

    return (
        <div className="employer-item__action-block">
            <button 
                onClick={ editHandler } 
                className="employer-item__btn employer-item__btn_edit"
                disabled = { !deactivateUser }
            >
                { changeInfo 
                    ? <i className="fa-solid fa-check" title="Confirm changes"></i>
                    : <i className="fa-solid fa-wrench" title="Edit"></i> 
                }
            </button>
            <button 
                onClick={ initDelete } 
                className="employer-item__btn employer-item__btn_del"
                title = "Delete employee"
                disabled = { !deactivateUser }
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}