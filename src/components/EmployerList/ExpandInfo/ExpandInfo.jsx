import { AdditionalInfo } from './AdditionalInfo'
import { EmailInfo } from './EmailInfo'
import './ExpandInfo.css'
import { Photo } from './Photo'
import { calculateAge } from '../../../utils/calculateAge'

export const ExpandInfo = (props) => {
    const { data, useStateValues, useStateFunc } = props

    const { currentId } = useStateValues
    const { setExpandInfo } = useStateFunc

    const currentInfo = data.find(val => val.id === currentId)

    const { picture, email, salary } = currentInfo
    const { currency, jobTitle, jobRank, dateBirth } = currentInfo
    const { phoneNumber, startDay } = currentInfo

    const returnEmployeesList = () => {
        setExpandInfo(prev => !prev)
    }

    const age = calculateAge(dateBirth);

    return (
        <li className="expand-info">
            <div className="running-title">
                <AdditionalInfo data = { currentInfo }/>
                <button onClick={ returnEmployeesList }>
                    <i className="fa-solid fa-angles-up"></i>
                </button>
            </div>
            <div className="expand-info-box">
                <div className="expand-info-header-box">
                    <Photo picture = { picture } startDay = { startDay }/>
                    <div className="employees-info">
                        <div className="employees-info__value">
                            <h4>Job position:</h4>
                            <span>{ jobRank } { jobTitle }</span>
                        </div>
                        <div className="employees-info__value">
                            <h4>Salary:</h4>
                            <span>{ salary } { currency }</span>
                        </div>
                        <div className="employees-info__value">
                            <h4>Date of birth:</h4>
                            <span>{ dateBirth } ({ age } y.o)</span>
                        </div>
                        <div className="employees-info__value">
                            <h4>Phone number:</h4>
                            <span>{ phoneNumber }</span> 
                        </div>
                        <EmailInfo email = { email } />
                    </div>
                </div>
            </div>
        </li>
    )
}