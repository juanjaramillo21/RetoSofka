import { Metodos } from "./models/Metodos.js";
import { menu } from "./models/UI.js";
import { questions } from "./data/questions.js";

// Renderring the page
const renderPage = (metodos, Menu) => {
   if(metodos.categoryIndex==0){
    Menu.showWelcome(metodos,Menu,renderPage);

  } 
  else if (metodos.isEnded()) {
    Menu.showScores(metodos.score);
  }
  else {
    console.log('entro',metodos);
    metodos.questionPerCat();    
    Menu.showCategories(metodos.getQuestionIndex(metodos.questionIndex).category)
    Menu.showQuestion(metodos.getQuestionIndex(metodos.questionIndex).text);
    Menu.showProgress(metodos.score);
    Menu.showChoices(metodos.getQuestionIndex(metodos.questionIndex).choices, (currenChoice) => {
      metodos.guess(currenChoice) ? renderPage(metodos, Menu) 
      : Menu.showScores(metodos.score);
    });
  }
 
  
};



function main() {
  const metodos = new Metodos(questions);
  const Menu = new menu();

  function findeljuego () {
    console.log("oeoeoe");
    Menu.showEndForce(metodos.score);
  };
  var buttonEnd =document.getElementById("end");
  buttonEnd.addEventListener("click",findeljuego,true);
  
 

  renderPage(metodos, Menu);
}

main();
