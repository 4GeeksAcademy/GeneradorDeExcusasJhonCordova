import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quien = ['el perro', 'mi abuela', 'el cartero', 'mi ave']
  let accion = ['comio', 'destruyo', 'rompio', 'escondio']
  let que = ['mi tarea', 'mi trabajo', 'mi carro']
  let cuando = ['durante la clase', 'mientras dormia', 'durante el almuerzo', 'mientras rezaba', 'mientras entrenaba' ]

 let quienRandom = [Math.floor(Math.random() * quien.length)];
 let accionRandom = [Math.floor(Math.random() * accion.length)];
 let queRandom = [Math.floor(Math.random() * que.length)];
 let cuandoRandom = [Math.floor(Math.random() * cuando.length)];

 let excusa = `${quien[quienRandom]} ${accion[accionRandom]} ${que[queRandom]} ${cuando[cuandoRandom]}`;

  console.log(excusa);
  document.querySelector("#excuse").innerHTML = excusa
};