import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to English Vocabulary Quiz</h1>
        <p>Expand your English vocabulary with interactive quizzes!</p>
      </header>
      <div className="feature">
          <h2>Quiz Questions</h2>
          <p>Answer questions to test and improve your English vocabulary skills.</p>
        </div>
        <div>
        <h2>Start Learning Now</h2>
        <p>Click the button below to begin your English vocabulary journey.</p>
        <Link to= "/quiz">
        <Button variant="contained" endIcon={<SendIcon />}>
            Get Started
        </Button>
        </Link>
        </div>
        <div>
        {/* <p>
          Want to see how you're doing? Check your progress on the <Link to="/leaderboard">leaderboard</Link>.
        </p> */}
        </div>
    </div>
  )
}
