export function setInputsValues(props) {
    const { data, newSets, newValues } = props
    const { newName, newMiddleName, newSurname, changeInfo } = newValues
    const { id } = data;
    const { setNewName, setNewMiddleName, setNewSurname, editEmployer } = newSets

    if (changeInfo) {
        data.name = newName || data.name;
        data.middleName = newMiddleName;
        data.surname = newSurname || data.surname;

        editEmployer(id, data.name, data.surname, data.middleName)
    }

    if (!changeInfo) {
        setNewName(data.name);
        setNewMiddleName(data.middleName);
        setNewSurname(data.surname);
    }
}