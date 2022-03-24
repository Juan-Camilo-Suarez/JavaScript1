const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = a.map(function (item) {
    return item * 2;
});
const c = a.map(item => item * 2); // lambda
console.log(b);
console.log(c);

const filteredArray = a.filter(x => x % 2 === 0);
console.log(filteredArray);


const arraySum = a.reduce(
    (curr, result) => curr + result
);
console.log(arraySum);

const arrayP = a.reduce(
    (curr, result) => curr * result,
    1
);
console.log(arrayP);

const unsortedArray = [3, 2, 5];
unsortedArray.sort().reverse();
console.log(unsortedArray);

console.log(a
    .filter(x => x % 2 === 0)
    .map(x => x * 3)
    .reduce((x, y) => x + y)
)


console.log(a.indexOf(3), a.indexOf(300));
console.log(a.includes(3), a.includes(300));
console.log(a.some(x => x === 2), a.some(x => x === 200))
console.log(a.every(x => x < 11), a.every(x => x % 2 === 0))
console.log(a.find(x => x === 10));

const cats = [
    {
        name: "Барсик",
        color: "black",
        age: 5,
        meow() {
            alert('MEOW!');
        }
    },
    {
        name: "Олег",
        color: "white",
        age: 8,
        meow() {
            alert('OLEG!');
        }
    }
];

console.log(cats.find(x => x.name === 'Олег'));

