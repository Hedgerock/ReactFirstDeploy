import './EmployerLabel.css'

export const EmployerLabel = (props) => {
    const { initDeactivation, deactivateUser } = props

    return (
        <label className='employer-label'>
            <span className='employer-label__text'>{ deactivateUser ? 'Deactivate employee' : 'Activate employee' }</span>
            <input 
                type="checkbox" 
                className='employer-label__checkbox'
                onChange={ initDeactivation }
                checked = { !deactivateUser }
            />
        </label>
    )
}