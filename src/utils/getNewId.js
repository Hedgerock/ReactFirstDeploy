export function getNewid(dataArr) {
    if (dataArr.length === 0) {
        return 1;
    }

    const lastId = dataArr[dataArr.length - 1].id

    return lastId + 1
}