export function getCurrentDate() {
    const val = new Date();
    let date = val.getDate();
    let month = val.getMonth() + 1;
    const year = val.getFullYear();

    if (date < 10) {
        date = `0${date}`
    }

    if (month) {
        month = `0${month}`
    }

    return `${year}-${month}-${date}`
}