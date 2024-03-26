import './ChangeInput.css'

export const ChangeInput = (props) => {
    const { setFunction, newValue, classForInp, placeholder } = props

    return (
        <input 
            type="text"
            onChange={ 
                e => setFunction(e.target.value) 
            }
            className={ `employer-item__info employer-item__info_${ classForInp }`}
            value={ newValue }
            placeholder={ placeholder || '' }
        />
    )
}