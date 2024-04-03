export function calculateAge(dateOfBirth) {
    const arr = dateOfBirth.split('.');
    const val = `${arr[1]}-${arr[0]}-${arr[2]}`

    console.log(val)
    const dob = new Date(val).getTime();
    const currentDate = new Date().getTime();
    const ageInMilliseconds = currentDate - dob;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    console.log(ageInYears, ageInMilliseconds, currentDate, dob)
  
    return Math.floor(ageInYears);
}