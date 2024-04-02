import React, { useState } from 'react';
import './EmployerList.css';
import { EmployerItem } from './EmployerItem';
import { ExpandInfo } from './ExpandInfo';

export const EmployerList = (props) => {
    const { data, deleteEmployer, editEmployer, changeEmployeeStatus, expandInfoUseState } = props
    const { expandInfo, setExpandInfo } = expandInfoUseState
    const [ currentId, setCurrentId ] = useState(0);

    const functions = { deleteEmployer, editEmployer, changeEmployeeStatus }
    const useStateFunc = { setExpandInfo, setCurrentId };
    const useStateValues = { currentId }

    return (
        <ul className="employer-list">
            {  !expandInfo
                ? data.map((item, index) => 
                <EmployerItem
                    data = { item } 
                    number={ index } 
                    key={ item.id }
                    functions = { functions }
                    useStateFunc = { useStateFunc }
                />)
                : <ExpandInfo 
                    data = { data }
                    useStateFunc = { useStateFunc }
                    useStateValues = { useStateValues } 
                />
            }
        </ul>
    );
};
