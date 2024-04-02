export function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth).getTime();
    const currentDate = new Date().getTime();
    const ageInMilliseconds = currentDate - dob;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  
    return Math.floor(ageInYears);
}