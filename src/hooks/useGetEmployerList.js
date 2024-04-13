import { useEffect, useState } from "react";
import { url } from "../data/employees";

export const useGetEmployerList = () => {
    const [ employerList, setEmpList ] = useState([]);
    const [ change, setChange ] = useState(false);
    useEffect(() => {
        (async() => {
            const request = await fetch(url);
            const response = await request.json();
            setEmpList(response)
        })()
    }, [setEmpList, change]);


    return { employerList, setChange }
}