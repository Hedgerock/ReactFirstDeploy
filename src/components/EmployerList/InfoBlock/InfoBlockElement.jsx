import { ChangeInput } from "../ChangeInput";

export const InfoBlockElement = (props) => {
    const { params } = props
    const { newValue, newSet, changeInfo, prevValue, currentClassName, placeholder } = params;

    return (
        !changeInfo  
            ? <span className={ `employer-item__info employer-item__info_${ currentClassName }`} >{ newValue || prevValue }</span>
            : <ChangeInput 
                setFunction = { newSet } 
                classForInp = { currentClassName } 
                newValue = { newValue || prevValue } 
                placeholder = { placeholder || '' }
            />
    )
}