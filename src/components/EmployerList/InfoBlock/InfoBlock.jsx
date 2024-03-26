import { ChangeInput } from "../ChangeInput"
import './InfoBlock.css'

export const InfoBlock = (props) => {
    const { setNewSurname, newSurname, setNewName, newName, setNewMiddleName, newMiddleName, middleName, changeInfo, surname, name } = props
    const isMiddleNameAdded = true

    return (
        <div className="employer-item__info-block">
            { !changeInfo  
                ? <span className="employer-item__info employer-item__info_surname">{ surname }</span>
                : <ChangeInput setFunction = { setNewSurname } classForInp = { 'surname' } newValue = { newSurname }/>
            }
            { !changeInfo  
                ? <span className="employer-item__info employer-item__info_name">{ name }</span>
                : <ChangeInput setFunction = { setNewName } classForInp = { 'name' } newValue = { newName }/>
            }

            { (middleName || isMiddleNameAdded) && 
                !changeInfo
                    ? <span className="employer-item__info employer-item__info_middle-name">{ middleName }</span> 
                    : <ChangeInput 
                        setFunction = { setNewMiddleName } 
                        classForInp = { 'middle-name' } 
                        newValue = { newMiddleName } 
                        placeholder = { 'Middle name' }
                    />
            }
        </div>
    )
}