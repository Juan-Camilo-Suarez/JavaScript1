// boton para ir a otro lugar
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#openWindow').addEventListener("click", function (event) {
       console.log(event);
       //de esta forma simepre abre primero la pagina de yandex y cuando pase 3000 mili segundos abre el siguien enlace
        const yandexWindow = window.open('http://ya.ru', null, "popup");
        setTimeout(function () {
            yandexWindow.location.href = 'http://yandex.ru/company';
        }, 3000);
        //tambien para cerrar todo despues de cierto tiempo
        setTimeout(function () {
            yandexWindow.close();
        }, 5000);
        //asi se manda imrpimir
        document.querySelector('#printWindow').addEventListener('click', function () {
        window.print();
   });



    });
});


