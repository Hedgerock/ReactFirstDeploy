export function strManipulation(title) {
    const res = title[0].toUpperCase() + title.slice(1).replace(/[A-Z]/g, ' $&').toLowerCase();

    return res.replace(/-/, ' ')
}

export function toCamelCase(title) {
    return title.split(/-/).map((item, index) => {
        return index > 0 ? item[0].toUpperCase() + item.slice(1) : item
    }).join('')
}

export function dateStyle(val) {
    return val.split('-').reverse().join('.');
}