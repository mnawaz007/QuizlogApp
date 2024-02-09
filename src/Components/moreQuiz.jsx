/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {motion} from 'framer-motion'
import imag1 from '../assets/ecotourism.jpeg';
import image2 from '../assets/heritage.jpeg';
import image3 from '../assets/Northern-lights.jpeg';
import image4 from '../assets/Sporting.jpeg'
export default function MoreQuiz () {
    return (
        <Container className='mt-5'>
        <Row>
            <motion.button whileHover={{scale:1.3}} className="btn"><h1>More Quizes</h1> </motion.button> 
        <Col md={6} sm={12} className='mt-3'>
          <motion.button whileHover={{scale:1.2}} className='btn btn-outline-light m-2'> <h3>Quiz-1</h3> <a href="https://quiz01-mnawaz.vercel.app/" target='blank' > <img src={imag1} alt="img1" />  </a> </motion.button> 
          <motion.button whileHover={{scale:1.2}} className='btn btn-outline-light m-2'> <h3>Quiz-3</h3> <img src={image2} alt="img2" />  </motion.button> 

          
           
        </Col>
        <Col md={6} sm={12}  className='mt-3' >
          <motion.button
          whileHover={{scale:1.2}}
          className='btn btn-outline-light m-2'> <h3>Quiz-2</h3> <img src={image3} alt="img3" />    </motion.button> 

          <motion.button whileHover={{scale:1.2}} className='btn btn-outline-light m-2'> <h3>Quiz-4</h3> <img src= {image4} alt="image4" />  </motion.button> 
         
          
        </Col>
        </Row> 
        </Container> 
        )}