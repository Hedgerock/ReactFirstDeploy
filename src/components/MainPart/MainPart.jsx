import './MainPart.css'
import { EmployerList } from '../EmployerList';
import { useEffect, useState } from 'react';
import employees from '../../employees';
import { Statistic } from '../Statistic';
import { getNewid } from '../../utils/getNewId';

export const MainPart = () => {
    const updatedList = JSON.parse(localStorage.getItem('employees'));
    const [employerList, setEmpList] = useState(updatedList || employees)
    const [newUser, setNewUser] = useState(false);
    const [ expandInfo, setExpandInfo] = useState(false);
    
    const addEmployer = (employer) => {
        employer.id = getNewid(employerList);
        setEmpList([...employerList, employer]);
    }

    useEffect(() => {
        const updatedList = JSON.stringify(employerList)
        localStorage.setItem('employees', updatedList)
    }, [employerList]);
    

    const changeEmployeeStatus = (id) => {
        const newEmployers = [...employerList];
        const el = newEmployers.find(t => t.id === id)

        el.active = !el.active
        setEmpList(newEmployers);
    }

    const editEmployer = (id, name, surname, middleName) => {
        const newEmployers = [...employerList];
        const el = newEmployers.find(t => t.id === id)

        el.name = name
        el.surname = surname
        el.middleName = middleName

        setEmpList(newEmployers);
    }

    const deleteEmployer = (id) => {
        const newEmployers = [...employerList];
        const el = newEmployers.find(t => t.id === id)
        const index = newEmployers.indexOf(el);
        newEmployers.splice(index, 1)
        setEmpList(newEmployers);
    }

    return (
        <div className="main-box">
            <div className="main-part-box container1536">
                <div className="navigation">Navigation</div>
                <div className={ `main-part  ${ newUser ? 'main-part_modified' : '' }` }>
                    <div className="container">
                        <div className="employer-list-app">
                            <Statistic 
                                addEmployer = { addEmployer } 
                                data = { employerList } 
                                setNewUser = { setNewUser } 
                                newUser = { newUser }
                                setExpandInfo = { setExpandInfo }
                            />
                            <div className="employer-list-block">
                                <EmployerList 
                                    data={ employerList } 
                                    deleteEmployer = { deleteEmployer }
                                    editEmployer = { editEmployer }
                                    changeEmployeeStatus = { changeEmployeeStatus }
                                    expandInfoUseState = { { expandInfo, setExpandInfo } }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}