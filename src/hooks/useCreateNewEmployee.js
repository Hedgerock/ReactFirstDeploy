import { useEffect, useState } from "react";
import { employer } from "../data/formElAndValidation";

export const useCreateNewEmployee = () => {
    const savedInfo = JSON.parse(localStorage.getItem('newEmployee'))
    const [ newUser, setNewUser ] = useState(false);
    const [ newEmployee, setNewEmployee ] = useState(savedInfo || employer);

    useEffect(() => {
        const curVal = JSON.stringify(newEmployee)
        localStorage.setItem('newEmployee', curVal)
    }, [newEmployee])

    return { newUser, newEmployee, setNewUser, setNewEmployee };
}