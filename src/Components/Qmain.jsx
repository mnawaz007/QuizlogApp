/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import eco from '../assets/ecotourism.jpeg'
import Container from 'react-bootstrap/Container';
import {motion} from 'framer-motion'
import imag1 from '../assets/ecotourism.jpeg'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCircleArrowRight } from "react-icons/fa6";
export default function QuestionPage({questions}) {
   
    let [currentQuestion, setCurrentQuestion] = useState(0);
    const [startquiz, setStartquiz] = useState(false);
    const[score, setScore] = useState(0)
    const [progressBar, setProgressBar] = useState ("20%");
    const [result, setResult] = useState([])

    const StartQuiz = () => {
        setStartquiz(true) 
        
       
    };

    const NextQuestion = () => {
        setCurrentQuestion( currentQuestion +1)

        if (currentQuestion === 0){
            currentQuestion ++;
            const newProgress = (currentQuestion + 1) * 20;
            setProgressBar (`${newProgress}%`);
        } else if (currentQuestion === 1){
            currentQuestion ++;
            const newProgress = (currentQuestion + 1) * 20;
            setProgressBar (`${newProgress}%`);
        }else if(currentQuestion === 2){
            currentQuestion ++;
            const newProgress = (currentQuestion + 1) * 20;
            setProgressBar (`${newProgress}%`);   
        }else if(currentQuestion === 3){
            currentQuestion ++;
            const newProgress = (currentQuestion + 1) * 20;
            setProgressBar (`${newProgress}%`);   
        }
        else if(currentQuestion === 4){
            currentQuestion ++;
            const newProgress = (currentQuestion + 1) * 20;
            setProgressBar (`${newProgress}%`);   
        }
        
        
    };

    const Restart = () => {
        setCurrentQuestion(0)
        setProgressBar(currentQuestion + 1) * 20
    };

    let ScoreAndBg = (index) =>{
        
        if ( index === questions[currentQuestion].correctAnswerArr ){             
             setScore(score+1)
             
          
        }
    }
    if(currentQuestion === questions.length){
        return(
            <Container  >
                <Row>
                    <Col className="text-center">
                        <h1>Thank you for taking the quiz</h1>
                        <h3>Your Score  : {score * 5} </h3>
                        <h3>Total Score  : {questions.length * 5} </h3>
                        <h3>result: {result}</h3>
                        <motion.button whileHover={{scale: 1.3}} className="btn btn-success" onClick={Restart}> Restart Quiz </motion.button>
                    </Col>
                    <Col>
                    <motion.button whileHover={{scale:1.2}} className='btn btn-outline-primary m-2'> <h3 className='text-dark display-5'>Next Quiz</h3> <a href="https://quiz01-mnawaz.vercel.app//" target='blank' > <img src={imag1} alt="img1" />  </a> </motion.button> 
                    </Col>
                </Row>
            </Container>
        )
    }




     if (!startquiz){  
    return (
            <div className="container ">
                <div className="container bgimg">
                    <div className="row">
                        <div className="d-flex justify-content-center ">
                        </div>
                        <div className="col d-flex  justify-content-center mt-5 mb-4 p-0">
                            <div className="   card  w-50 bg-light border border-primary  border-rounded  " >
                                <button className="info-btn btn btn-primary d-flex justify-content-center"> Travelling</button>
                                <img src={eco} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2>Tour And Travel Quiz With Images.</h2>
                                    <button className="btn btn-primary" onClick={StartQuiz} >Start Quiz</button>
                                    <h3>Total Questions : {questions?.length}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )}

    return(
        <>
        <Container>
            <Row>
                <Col className='quizcol'>
                 <h1>Quiz Started</h1>
                 <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width: progressBar }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                 <h3>Score : {score * 5} </h3>
                 <h3> Questions Left : {questions.length -currentQuestion } </h3>
                 {questions[currentQuestion].image} 
                
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>{questions[currentQuestion]?.statement}</h3>
                {questions[currentQuestion]?.options.map((option, index) =>  <ul key={index}>
                    <button  className='btn btn-outline-success w-75' onClick = {()=>{ScoreAndBg(index)}}>{option} </button>
                </ul>)} 
                </Col>
            </Row>
            <motion.button 
            whileHover={{scale : 1.3}}
            className='btn btn-primary mx-5' onClick={NextQuestion}> Next <FaCircleArrowRight /></motion.button>
        </Container>
        </>
    )
}