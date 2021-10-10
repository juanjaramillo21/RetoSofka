class Question {
  
  constructor(category, text, choices, answer) {
    this.category = category;
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

 
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

export { Question };
