import './AddForm.css';
import { inputs } from './inputs';
import { CurInput } from './CurInput';
import { addNewEmployee } from '../../API/addNewEmployee';

export const AddForm = (props) => {
    const { setNewUser, newUser, setExpandInfo, setNewEmployee, newEmployee, setChange } = props;

    const addHandler = () => {
        setNewUser(prev => !prev)
        setExpandInfo(false);
    }

    return (
        <div className="employer-add-form">
            <div className="input-box">
                { newUser &&
                    <div className='new-user'>
                        {
                            inputs.map((item, index) => {
                            return <CurInput key = { index } data = { item } setNewEmployee = { setNewEmployee } newEmployee = { newEmployee } />})
                        }
                        <div className="bottom-box">
                            <button onClick = { addHandler }>Return</button>
                            <button 
                                onClick = { () => addNewEmployee({ setChange, setNewUser, setNewEmployee, newEmployee }) }
                            >
                                Add new employee
                            </button>
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