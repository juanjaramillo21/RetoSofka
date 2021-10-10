//import { history } from "./../data/history.js";
export class menu {
  constructor() {}

  // MOSTRAR LAS PREGUNTAS 
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }
  
  // MOSTRAR LAS CATEGORIAS 
  showCategories(cat){
    const categories = document.getElementById("category");
    categories.innerHTML = "Ronda " +cat;
    
  }

  
  // MOSTRAR LAS OPCIONES Y CREAR BOTONES POR CADA OPCION 
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

//MOSTRAR PAGINA INICIAL
showWelcome(metodos, Menu,callback) {
  const welcomeHTML = `
    
    <h1>Bienvenido al reto sofka</h1>

    <div id="inicial" class="inicial"> 
    <input id="nombre" class="inicio"></input>
    <button id="start" class="btnstart"> Empezar el juego </button>
    </div>

    <div id="history">
    <h1>History</h1>
    <button id="reload" class="btnstart"> Cargar historial </button>
    <input id="historyin" class="history"></input>
    <table id="historial"></table>
    </div>`;
    
      const element = document.getElementById("welcome");
      element.innerHTML = welcomeHTML;

      function iniciodeljuego () {
        console.log("iniciando");
        const name=document.getElementById('nombre').value;
        //history.history.set(nombre)
        console.log(name);
        metodos.categoryIndex=1;
        console.log(callback);
        element.style.display='none';
        const questionContainer=document.getElementById('questionContainer');
        questionContainer.style.display='';

        callback(metodos,Menu);
      };
        var buttonStart =document.getElementById("start");
        buttonStart.addEventListener("click",iniciodeljuego,true); 
    
       /*  function historyLoad(){
        this.name.innerHTML=

        }
        var buttonload=document.getElementById("historyin");
        buttonload.addEventListener("click",historyLoad,true);
   */
}


// MOSTRAR LA PUNTUACION FINAL 
  showScores(score) {
    const gameOverHTML = `
      <h1>Result</h1>
      <h2 id="score">Your scores: ${score}</h2>`;

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }
  showEndForce(score,Menu,callback,metodos) {
    const gameOverHTML = `
      <h1>Te has retirado del juego</h1>
      <h2 id="score">Tu score es : ${score}</h2>
      <button id="restart" class="btnstart"> reiniciar el juego </button>`;
    
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    // REINICIAR EL JUEGO
    /* function reIniciodeljuego (metodos) {
      console.log("inicio");
      //const name=document.getElementById('nombre').value;
      //localStorage.setItem('userName',name);
      //console.log(name);
      metodos.categoryIndex=0;
      console.log(metodos.categoryIndex);
      element.style.display='';
      const questionContainer2=document.getElementById('questionContainer');
      questionContainer2.style.display=none;
  
      callback(metodos,Menu);
  
    };
    var buttonreStart =document.getElementById("restart");
    buttonreStart.addEventListener("click",reIniciodeljuego,true); */ 
  }
// MOSTRAR PUNTUACION DURANTE EL JUEGO 
  showProgress(currentIndex) {
    var element = document.getElementById("progress");
    element.innerHTML = `Su acomulado es ${currentIndex}`;
  }

 
}
