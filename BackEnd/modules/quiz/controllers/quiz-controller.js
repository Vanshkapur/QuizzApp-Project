import { QuizModel } from "../../../shared/db/models/quiz-schema.js";

export const quizController = {
   async createQuestion(request,response){
    const quizInfo = request.body;
    try{
    const quiz= await QuizModel.create(quizInfo);
    if(quiz){
      console.log("quiz Added");
      response.json({ message: 'Quiz Added' });
    }
    else{
      console.log("Problem Ocuurs");
    }
    }
    catch(err){
      console.log("some error Occur",err)
    }

    },
    getAllQuizQuestions: async (request, response) => {
      try {
        const quizQuestions = await QuizModel.find();
        response.json(quizQuestions);
      } catch (error) {
        console.error(error);
        response.json({ message: 'Internal server error' });
      }
    },
}    