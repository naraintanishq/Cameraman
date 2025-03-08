import React, {useContext} from 'react';

import WomanImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
  <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:'100%'}} transition={transition1} className='section'>
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='pt-3 container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img className='lg:mt-16' src={WomanImg} alt="woman" />
        </div>
        <motion.div initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-80%'}} transition={transition1} className='flex-1 pt-20 pb-10 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='sm:pt-3 mb-4 max-w-sm'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. <b>Amet ligula</b> fusce lacus Natoque mus leo per 
          
            <br />
            <br />
            Lorem ipsum odor amet, consectetuer adipiscing elit. Amet ligula fusce lacus leo per maximus et risus nibh.
          </p>
          <Link to={'/portfolio'} className='btn rounded-lg'>View my work</Link>   
        </motion.div>
      </div>
    </div>
  </motion.section >
);
};

export default About;
