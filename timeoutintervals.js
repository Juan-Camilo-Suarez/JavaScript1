const myTimeout = setTimeout(function () {
    console.log('hello');
}, 1000);
// clearTimeout(myTimeout);

setTimeout(function() {
    console.log('TIMEOUT WITHOUT TIMEOUT');
}, 10);
/*
const startTime = Date.now();
for (let i = 0; i < 1000; i++) {
    console.log('print in for');
}

 */
//console.log('runtime', Date.now() - startTime, 'ms');

//imprimir en ciertos intervalos de tiempo
const myInterval = setInterval(function () {
    console.log('hello ' + Math.random());
}, 1000);
setTimeout(function () {
    clearInterval(myInterval);
}, 5000);


