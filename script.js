// pega os elementos do html
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');
const segundos = document.getElementById('segundos');

const relogio = setInterval(() => {
  let date = new Date(); // pega a data atual
  let min = date.getMinutes(); // pega os minutos
  let hr = date.getHours(); // pega as horas
  let seg = date.getSeconds(); // pega os segundos

  // formata para todos os numeros para terem dois digitos
  if (hr < 10) { hr = '0' + hr };

  if (min < 10) { min = '0' + min };

  if (seg < 10) { seg = '0' + seg }

  // atualiza os elementos html
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
});