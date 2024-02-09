import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import {motion} from 'framer-motion'
import AdminPannel from './Components/admin'
import Header from './Components/header'
import Footer from './Components/footer'
import InitialContent from './Components/initialContent'
import QuestionPage from './Components/Qmain'
 import {Questions} from './Components/data'
 import MoreQuiz from './Components/moreQuiz';
 import './App.css'


function App() {
  const[admin, setAdmin] = useState(true)  ;
  const[questions, setQuestions] = useState([...Questions])
 
  const showAdmin = (status) => setAdmin(status)

  const DelQuestion = (id) => {
    let deleted =  questions.filter(question => question.id !== id)
    setQuestions(deleted)
  }

  return (
    <>
    <div className="container main">
<div className="container header ">

    <Header />
    <InitialContent onSowAdmin={showAdmin}/>
</div>
   
    <div className="container admqus">

   {admin ? (  <QuestionPage questions= {questions}/>
    ) : (<AdminPannel questions = {questions} ondelete = {DelQuestion}/> )}
    </div>
    <div className="container">

    <MoreQuiz />
    </div>
    <div className="container bg-secondary-subtle text-danger">

   <Footer/>
    </div>
    </div>
  
   

   
    </>
  )
}

export default App
