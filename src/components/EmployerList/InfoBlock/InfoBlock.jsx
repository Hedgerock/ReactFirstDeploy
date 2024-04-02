import './InfoBlock.css'
import { InfoBlockElement } from "./InfoBlockElement";

export const InfoBlock = (props) => {

    const { changeInfo, data, newValues, newSets} = props;
    const { newName, newMiddleName, newSurname } = newValues;
    const { setNewName, setNewMiddleName, setNewSurname } = newSets;
    const { name, surname, middleName } = data


    return (
        <div className="employer-item__info-block">
            <InfoBlockElement 
                params = { 
                    { 
                        newSet: setNewSurname, 
                        newValue: newSurname, 
                        changeInfo, 
                        currentClassName: 'surname',
                        prevValue: surname
                    } 
                }
            />
            <InfoBlockElement 
                params = { 
                    { 
                        newSet: setNewName, 
                        newValue: newName, 
                        changeInfo, 
                        currentClassName: 'name',
                        prevValue: name
                    } 
                }
            />

            <InfoBlockElement 
                params = { 
                    { 
                        newSet: setNewMiddleName, 
                        newValue: newMiddleName, 
                        changeInfo, 
                        currentClassName: 'middleName',
                        prevValue: middleName,
                        placeholder: 'Middle name(optional)'
                    } 
                }
            />

        </div>
    )
}