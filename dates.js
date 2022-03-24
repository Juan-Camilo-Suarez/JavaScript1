const date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());

//se puede cambiar esos componentes

date.setDate(date.getDate() + 1);
console.log(date.getDay());


console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


/**
 * Пример функции с форматированием даты
 * @param date объект с датой
 * @returns {string} отформатированная строка
 */
function formatDate(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hour}.${minutes}`;
}

console.log(formatDate(date))


console.log(new Date()); // current date
console.log(new Date(2022123123)); // from timestamp
console.log(new Date(2022, 2, 9, 17, 30, 2));


const parsedDate = new Date(Date.parse('2022-03-09T13:51:50'));
console.log('parsed date', parsedDate);

