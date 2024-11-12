import React, { useState, useEffect } from 'react';
//import { apiClient } from '../../../shared/services/api-client.js';
import Box from '@mui/material/Box';
import {  Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

import { Container } from '@mui/material';

export const Quiz = () => {

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    try {
      const response =await fetch('http://localhost:1234/quiz/get').then((d)=>{
        return d.json()
      }).then((d)=>{
        console.log(d);        
        setQuizQuestions(d); 
      }).catch((e)=>{
        console.log(e)
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionSelect = (option) => {
    if (!isOptionSelected) { 
      setSelectedOption(option);
      setIsOptionSelected(true); 
    }

  };

  const isOptionCorrect = (option) => {
    return option === quizQuestions[currentQuestionIndex]?.correctAnswer;
  };

  const getOptionStyle = (option) => {
    const defaultStyle = { margin: '8px 0', height:'30px'};
    if (selectedOption === option) {
      return isOptionCorrect(option) ? {...defaultStyle, backgroundColor: 'green' } : {...defaultStyle, backgroundColor: 'red' };
    }
    return defaultStyle;
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setIsOptionSelected(false); 
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
    <Box className="quiz-page">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score</h2>
          <p>{score} out of {quizQuestions.length}</p>
          <h4>Questions and Correct Answers</h4>
          <TableContainer component={Paper}>
              <Table sx={{ minHeight: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Question Index</TableCell>
                    <TableCell>Correct Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{quizQuestions.map((question, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{question.correctAnswer}</TableCell>
                    </TableRow>
                  ))}</TableBody></Table>
                  </TableContainer>
        </div>
      ) : (
        <Box className="question-section">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <Box component="span" sx={{height:50}}>{quizQuestions[currentQuestionIndex]?.question}</Box>
          <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option1)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option1)}
            >
              {quizQuestions[currentQuestionIndex]?.option1}
            </button>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option2)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option2)}
            >
              {quizQuestions[currentQuestionIndex]?.option2}
            </button>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option3)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option3)}
            >
              {quizQuestions[currentQuestionIndex]?.option3}
            </button>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option4)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option4)}
            >
              {quizQuestions[currentQuestionIndex]?.option4}
            </button>
          </div>
          <button className="next-button" onClick={handleNextQuestion} style={{height:30}} variant="contained">
            Next
          </button>
        </Box>
      )}
    </Box>
    </Container>
  );
};
