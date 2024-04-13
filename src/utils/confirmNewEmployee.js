import { employer } from "../data/formElAndValidation";

export const confirmAdding = (props) => {
    const { setChange, setNewUser, setNewEmployee } = props

    setChange(prev => !prev);
    setNewUser(prev => !prev);
    setNewEmployee(employer);
}