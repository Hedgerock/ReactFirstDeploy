import { getCurrentDate } from "../../utils/getCurrentDate";
import { dateStyle } from "../../utils/stringFunc";

const curDate = dateStyle(getCurrentDate());

export const employer = {
    name: '', 
    middleName: '', 
    surname: '',
    email: [],
    salary: 0,
    currency: '',
    jobTitle: '',
    jobRank: '',
    picture: '',
    startDay: curDate,
    dateBirth: '',
    phoneNumber: '',
    active: true
}

export const isFormValid = (employer) => {
    return (
        employer.name &&
        employer.surname &&
        +employer.salary > 0 &&
        employer.currency &&
        employer.jobTitle &&
        employer.jobRank &&
        employer.dateBirth &&
        employer.phoneNumber
    );
};
