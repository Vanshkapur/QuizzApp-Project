import express from 'express';
import {userRoute} from './modules/user/routes/user-routes.js';
import { quizRoute } from './modules/quiz/routes/quiz-routes.js';
import cors from 'cors';

const app= express();
app.use(cors());
app.use(express.json()); //data fetch (json)
app.use('/', userRoute);
app.use('/', quizRoute);

const server= app.listen(1234, (err)=>{
    if (err){
        console.log('Server Crash', err)
    }
    else{
    console.log("Server Up and Running", 
    server.address().port);
    }
})