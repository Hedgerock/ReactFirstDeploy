import './MainPart.css'
import { EmployerList } from '../EmployerList';
import { useEffect, useState } from 'react';
import employees from '../../employees';
import { Statistic } from '../Statistic';

export const MainPart = () => {
    const [employerList, setEmpList] = useState(employees)
    
    const addEmployer = (employer) => {
        employer.id = getNewid(employerList);
        setEmpList([...employerList, employer]);
    }

    useEffect(() => {
        console.log(employerList);
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
                <div className="main-part">
                    <div className="container">
                        <div className="employer-list-app">
                            <Statistic addEmployer = { addEmployer } data = { employerList } />
                            <div className="employer-list-block">
                                <EmployerList 
                                    data={ employerList } 
                                    deleteEmployer = { deleteEmployer }
                                    editEmployer = { editEmployer }
                                    changeEmployeeStatus = { changeEmployeeStatus }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getNewid(dataArr) {
    if (dataArr.length === 0) {
        return 1;
    }

    const lastId = dataArr[dataArr.length - 1].id

    return lastId + 1
}