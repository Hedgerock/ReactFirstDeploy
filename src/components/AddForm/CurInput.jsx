import { useState } from "react";
import { dateStyle, strManipulation, toCamelCase } from "../../utils/stringFunc";

export const CurInput = (props) => {
    const { data, setNewEmployer } = props
    const { type, title } = data

    const [ newVal, setNewVal ] = useState('');

    const forPlaceholder = strManipulation(title);
    const forObj = toCamelCase(title)

    return (
        <label className={ `new-user-label new-user-label_${title}` }>
            <span>{ forPlaceholder === 'Date birth' ? 'Birthday' : forPlaceholder }</span>
            <input 
            onChange={ e => {
                let val = e.target.value
                setNewVal(val)
                if (type === 'date') {
                    val = dateStyle(val)
                }

                type === 'email'
                 ? setNewEmployer(prevVal => ({ ...prevVal, [forObj]: [val]}))
                 : setNewEmployer(prevVal => ({ ...prevVal, [forObj]: val}))
            } }
            type={ type }
            value={ newVal }
            className={ `employer-add-form__input employer-add-form__input_${ title }` }
            placeholder={ `Type ${ forPlaceholder } here` }
        />
        </label>
    )
}