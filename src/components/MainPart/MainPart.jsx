import './MainPart.css'
import { EmployerList } from '../EmployerList';
import { useState } from 'react';
import { Statistic } from '../Statistic';
import { useGetEmployerList } from '../../hooks/useGetEmployerList';
import { useCreateNewEmployee } from '../../hooks/useCreateNewEmployee';

export const MainPart = () => {
    const { employerList, setChange } = useGetEmployerList();
    const { newUser, newEmployee, setNewUser, setNewEmployee } = useCreateNewEmployee()
    const [ expandInfo, setExpandInfo ] = useState(false);

    return (
        <div className="main-box">
            <div className="main-part-box container1536">
                <div className="navigation">Navigation</div>
                <div className={ `main-part  ${ newUser ? 'main-part_modified' : '' }` }>
                    <div className="container">
                        <div className="employer-list-app">
                            <Statistic 
                                data = { employerList } 
                                setNewUser = { setNewUser } 
                                newUser = { newUser }
                                setExpandInfo = { setExpandInfo }
                                setChange = { setChange }
                                newEmployee = { newEmployee }
                                setNewEmployee  = { setNewEmployee }
                            />
                            <div className="employer-list-block">
                                <EmployerList 
                                    data={ employerList } 
                                    expandInfoUseState = { { expandInfo, setExpandInfo } }
                                    setChange = { setChange }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}