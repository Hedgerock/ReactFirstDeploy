import { strManipulation, toCamelCase } from "../../utils/stringFunc";

export const CurInput = (props) => {
    const { data, setNewEmployee, newEmployee } = props
    const { type, title } = data

    const forPlaceholder = strManipulation(title);
    const forObj = toCamelCase(title)
    return (
        <label className={ `new-user-label new-user-label_${title}` }>
            <span>{ forPlaceholder === 'Date birth' ? 'Birthday' : forPlaceholder }</span>
            <input 
            onChange={ e => {
                const val = e.target.value
                setNewEmployee(prevVal => ({ ...prevVal, [forObj]: val}))
            } }
            type={ type }
            value={ newEmployee[forObj] }
            className={ `employer-add-form__input employer-add-form__input_${ title }` }
            placeholder={ `Type ${ forPlaceholder } here` }
        />
        </label>
    )
}