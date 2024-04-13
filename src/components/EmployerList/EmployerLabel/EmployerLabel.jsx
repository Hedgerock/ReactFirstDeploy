import './EmployerLabel.css';
import { url } from '../../../data/employees';

export const EmployerLabel = (props) => {
    const { initDeactivation, deactivateUser, data } = props;
    const { active, id } = data;
    
    const makeDeactivation = () => {
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ active: !active })
        })
        .then((response) => {
            response.ok ? initDeactivation() : console.error('Error in updating process');
        })
    };

    return (
        <label className='employer-label'>
            <span className='employer-label__text'>{deactivateUser ? 'Deactivate employee' : 'Activate employee'}</span>
            <input 
                type="checkbox" 
                className='employer-label__checkbox'
                onChange={makeDeactivation}
                checked={!deactivateUser}
            />
        </label>
    );
};
