const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos'); 
const segundos = document.getElementById('segundos'); 


let relogio = setInterval(function time() {
    let datetoday = new date();
    let horas = datetoday.getHours();
    let minutos = datetoday.getminutes(); 
    let segundos = datetoday.getseconds(); 
    
    horas.textccontent = horas
    minutos.textccontent = minutos
    segundos.textccontent = segundos 

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})
 