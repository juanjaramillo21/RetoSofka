import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
  (question) =>
    new Question(question.category, question.question, question.choices, question.answer)
);
