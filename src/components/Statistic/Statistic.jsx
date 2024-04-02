import { AddForm } from "../AddForm"
import { Counter } from "./Counter";
import './Statistic.css'

export const Statistic = (props) => {
    const { addEmployer, data, setNewUser, newUser, setExpandInfo } = props
    const employeesListLength = data.length;
    const activeEmployees = data.filter(item => item.active).length
    const deactivatedEmployees = data.filter(item => !item.active).length
    
    return (
        <div className="statistic">
            <h1 className="container__title">Employees list app</h1>
            <div className="counter-box">
                <Counter length = { employeesListLength } text = { 'Total employess' } />
                { activeEmployees > 0 &&
                    <Counter length = { activeEmployees } text = { 'Active employees' } />
                }
                { deactivatedEmployees > 0 &&
                    <Counter length = { deactivatedEmployees } text = { 'Inactive employees' } />
                }
            </div>
            <AddForm 
                addEmployer = { addEmployer } 
                setNewUser = { setNewUser } 
                newUser = { newUser }
                setExpandInfo = { setExpandInfo }
            />
        </div>
    )
}