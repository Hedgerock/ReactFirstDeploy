import { url } from "../data/employees";

export const makeDelete = (data, func) => {
    const { id } = data

    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((response) => {
        response.ok ? func() : console.error('Error in updating process');
    })
}