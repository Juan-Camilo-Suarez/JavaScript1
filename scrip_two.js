console.info('info')
console.warn('warn')
//console.error('error')

console.log('hola')

console.log(window)
//muestra la estructura del objeto
console.dir(window)

const cat = {
    name: 'thor',
    color: 'black',
    age: 5,
    meow() {
        alert('MEOW')
    }
}
console.dir(cat)

//tabla de lo que se le de
console.table(cat)

/// objeto location
//info sobre la pagina
console.log(location)
//location.reload recraga la pg
