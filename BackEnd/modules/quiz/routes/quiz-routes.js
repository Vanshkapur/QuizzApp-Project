import express from'express';
import { quizController } from '../controllers/quiz-controller.js';

export const quizRoute= express.Router();
quizRoute.post('/quiz', quizController.createQuestion);
quizRoute.get('/quiz/get', quizController.getAllQuizQuestions);