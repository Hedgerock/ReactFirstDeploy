import { isFormValid } from "../data/formElAndValidation";
import { url } from "../data/employees";
import { confirmAdding } from "../utils/confirmNewEmployee";

export const addNewEmployee = (props) => {
    const { setChange, setNewUser, setNewEmployee } = props
    const { newEmployee } = props

    console.log(newEmployee)
    if (!isFormValid(newEmployee)) {
        console.warn('Some fields are empty')
        return
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newEmployee)
    })
        .then((response) => {
            response.ok 
                ? confirmAdding({ setChange, setNewUser, setNewEmployee }) 
                : console.error('Error in updating process');
        })
}