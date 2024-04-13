import { url } from "../data/employees";

export const makeEdit = (props) => {
    const { data, func, newValues } = props
    const { id } = data
    const { newName, newMiddleName, newSurname } = newValues

    fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ 
            name: newName || data.name, 
            middleName: newMiddleName || data.middleName, 
            surname: newSurname || data.surname })
    })
    .then((response) => {
        response.ok ? func() : console.error('Error in updating process');
    })
}