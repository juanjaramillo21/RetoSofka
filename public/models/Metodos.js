export class Metodos {
  score = 0;
  categoryIndex = 0;
  questionIndex;
  questionSelected;


  
  constructor(questions) {
    this.questions = questions;
  }

  
  getQuestionIndex(index) {
    return this.questionSelected[index];
  }

  isEnded() {
    return this.categoryIndex == 6;
  }
  

  guess(answer) {
    if (this.getQuestionIndex(this.questionIndex).correctAnswer(answer)) {
      this.score+=500;
      this.categoryIndex++;
      localStorage.setItem('score',`${this.score}`);
      return true
    } else {
      return false
    }
  }
  pickRamdomNumber() {
    return Math.floor(Math.random()*(5 - 0) + 0);
  }

  questionPerCat(){
    this.questionSelected = this.questions.filter(question => question.category == this.categoryIndex);
    this.questionIndex = this.pickRamdomNumber()
    this.getQuestionIndex(this.questionIndex);
  }
}
