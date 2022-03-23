//asi se imprime en consola
console.log(11, "hola mundo")

//constantes
const a = 1 // no puede cambiar su valor

let b = 2 // let puede cambiar su valor
b = 1
console.log(b)

var oldvar = 3 // tambien puede cambiar su valor, pero
oldvar = 5
console.log("var", oldvar)


//TYPE DATES
const teststring = "testString"
console.log(teststring)
console.log("el index de esta letra:  ", teststring.indexOf('t'))
console.log(teststring.toLowerCase())
console.log(teststring.length)

const testnum = 4;
const testnum2 = 4.2;
console.log(testnum2)
console.log(4 % 2)//sabe si es par o impar
console.log(4 ** 2) //elevados

Math.floor(testnum2)

console.log(parseInt('20'))
console.log(parseFloat('40'))

const testboolean = false;
console.log(testboolean)

//se usa cuando no se ha definido desde el inicio la avriable
let undefinedtest = undefined;
console.log(undefinedtest)

//para saber el tipo de la variable
console.log(typeof testboolean)

//no importa que se texto
console.log(4 == '4')
//solo mira si realmente es un numero
console.log(2 === '2')


//OBJETO
const cat = {
    name: 'thor',
    color: 'blanco y negro',
    age: 18,
    favoriteToy: {
        type: 'ball',
        color: 'black'
    },
    printName() {
        console.log(this.name)
    }
};
console.log(cat, typeof cat)

cat.printName();

//ARRAY

const  arr = ['camilo', 'david'];
//agregar al final
arr.push('ana')
//agregar al unicio
arr.unshift('pedro')

console.log(arr)
console.log(arr.length)
console.log(arr[0])

console.log(arr.slice(1, 3)) // index de inicio y final

//CONDITIONS
if (cat.name === 'thor') {
    console.log(cat.name)
}
else if (cat.name === 'camilo'){
    console.log('error')
}else{
    console.log('holaa!!')
}
//CYCLE

for (let i = 0; i< 5; i++){
    console.log(i)
}

console.log('for in')
//solo saca los index del objeto
for (let item in  arr){
    console.log(item)
}
//sca los elementos del objeto
for (let item of arr) {
    console.log(item)

}
// objetos con el in
/*
for (let item of cat) {
    console.log(cat)
}

 */
let j = 0
while (j<5){
    console.log(j++)
}
/*
do{
    console.log(j++)
}while(g<5)

 */

//menaje que sale cuando carga la pagina
//**alert('mensaje basico')
//confirmar
//**console.log(confirm('esta seguro de esto?'));
//permite pedir un valor
console.log(prompt('como se llama?'))











