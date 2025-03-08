import React, { useContext } from 'react';
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import {motion} from 'framer-motion';
import { CursorContext } from './context/CursorContext';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


const App = () => {
  const { cursorVariants,cursorBG } = useContext(CursorContext)
  return ( 
  <>
    <Router>
      <Header />
      <AnimRoutes />
    </Router>
    {/* Cursor */}
    <motion.div variants={cursorVariants} animate={cursorBG} className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'></motion.div>
    {/* <div className='h-screen overflow-y-scroll oversc' >
      <motion.section initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} className='h-screen flex justify-center items-center'>
        <Home />
      </motion.section>
      <motion.section initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} className='h-screen flex justify-center items-center'>
        <About />
      </motion.section>
      <motion.section initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} className='h-screen flex justify-center items-center'>
        <Portfolio />
      </motion.section>
      <motion.section initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} className='h-screen flex justify-center items-center'>
        <Contact />
      </motion.section>
    </div> */}
  </>
  );
};

export default App;
