import './AddForm.css';
import { inputs } from './inputs';
import { CurInput } from './CurInput';
import { employer, isFormValid } from './formElAndValidation';
import { url } from '../../employees';

export const AddForm = (props) => {
    const { setNewUser, newUser, setExpandInfo, setChange, newEmployer, setNewEmployer } = props;

    const addHandler = () => {
        setNewUser(prev => !prev)
        setExpandInfo(false);
    }

    const confirmAdding = () => {
        setChange(prev => !prev);
        setNewUser(prev => !prev);
        setNewEmployer(employer);
    }

    const addNewEmployer = (e) => {
        e.preventDefault();
        if (!isFormValid(newEmployer)) {
            console.warn('Some fields are empty')
            return
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newEmployer)
        })
            .then((response) => {
                response.ok ? confirmAdding() : console.error('Error in updating process');
            })
    }

    return (
        <div className="employer-add-form">
            <div className="input-box">
                { newUser &&
                    <div className='new-user'>
                        {
                            inputs.map((item, index) => {
                            return <CurInput key = { index } data = { item } setNewEmployer = { setNewEmployer }/>})
                        }
                        <div className="bottom-box">
                            <button onClick = { addHandler }>Return</button>
                            <button onClick = { addNewEmployer }>Add new employee</button>
                            <div className="fields">
                                <div className="fields__item fields__item_required"></div>
                                <div className="fields__item fields__item_optional"></div>
                            </div>
                        </div>
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