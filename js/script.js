//
// Práctica 10 - Cronómetro
//
let crono;

function stop(){
    clearInterval(crono);
}

function restart(){
    clearInterval(crono);
    let segundos = document.getElementById('segundos');
    let minutos = document.getElementById('minutos');
    let horas = document.getElementById('horas');
    segundos.innerHTML = 0;
    minutos.innerHTML = 0;
    horas.innerHTML = 0;
}

function start(){
    contador_s = 0;
    contador_m = 0;
    contador_h = 0;
    let segundos = document.getElementById('segundos');
    let minutos = document.getElementById('minutos');
    let horas = document.getElementById('horas');
    crono = setInterval(
        function(){
            if(contador_s == 60)
            {
                contador_s = 0;
                contador_m++;
                minutos.innerHTML = contador_m;
                if(contador_m == 60)
                {
                    contador_m = 0;
                    contador_h++;
                    horas.innerHTML = contador_h;
                    if(contador_h == 0){
                        contador_h = 0;
                    }
                }
            }    
            segundos.innerHTML = contador_s;
            contador_s++;
        }
        , 1000);
}

let iniciar = document.getElementById('iniciar');

iniciar.addEventListener('click', start);

let detener = document.getElementById('detener');

detener.addEventListener('click', stop);

let limpiar = document.getElementById('limpiar');

limpiar.addEventListener('click', restart);