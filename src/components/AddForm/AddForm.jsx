import './AddForm.css';
import { inputs } from './inputs';
import { CurInput } from './CurInput';
import { employer, isFormValid } from './formElAndValidation';

export const AddForm = (props) => {
    const { addEmployer, setNewUser, newUser, setExpandInfo } = props;

    const addHandler = () => {
        setNewUser(prev => !prev)
        setExpandInfo(false);
    }

    const addNewEmployer = (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            console.warn('Some fields are empty')
            return
        }
        addEmployer(employer);
        window.location.reload();
    }

    return (
        <div className="employer-add-form">
            <div className="input-box">
                { newUser &&
                    <div className='new-user'>
                        {
                            inputs.map((item, index) => {
                            return <CurInput key = { index } data = { item } obj = { employer }/>})
                        }
                        <button onClick = { addHandler }>Return</button>
                        <button onClick = { addNewEmployer }>Add new employee</button>
                    </div>
                }
            </div>
            { !newUser &&
                <button onClick = { addHandler }className="employer-add-form__btn" title='Add new employee'>
                    <i className="fa-solid fa-plus"></i>
                </button>
            }
        </div>
    )
}