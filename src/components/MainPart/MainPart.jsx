import './MainPart.css'
import { EmployerList } from '../EmployerList';
import { useEffect, useState } from 'react';
import { url } from '../../employees';
import { Statistic } from '../Statistic';
import { employer } from '../AddForm/formElAndValidation';

export const MainPart = () => {
    const [ employerList, setEmpList ] = useState([]);
    const [ newUser, setNewUser ] = useState(false);
    const [ expandInfo, setExpandInfo ] = useState(false);
    const [ change, setChange ] = useState(false);
    const [ newEmployer, setNewEmployer ] = useState(employer);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setEmpList(json))
    }, [setEmpList, change]);

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
                                newEmployer = { newEmployer }
                                setNewEmployer = { setNewEmployer }
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