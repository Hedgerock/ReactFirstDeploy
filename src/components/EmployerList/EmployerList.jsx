import React from 'react';
import './EmployerList.css';
import { EmployerItem } from './EmployerItem';

export const EmployerList = (props) => {
    const { data, deleteEmployer, editEmployer, changeEmployeeStatus } = props

    return (
        <ul className="employer-list">
            { data.map((item, index) => 
                <EmployerItem
                    data = { item } 
                    number={ index } 
                    key={item.id}
                    deleteEmployer = { deleteEmployer }
                    editEmployer = { editEmployer }
                    changeEmployeeStatus = { changeEmployeeStatus }
                />) 
            }
        </ul>
    );
};
