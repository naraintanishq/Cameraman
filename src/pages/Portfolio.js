import React, {useContext} from 'react';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (<motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 1, y: '100%'}} transition={transition1} className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gapx24` text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 1, y: '-80%'}} transition={transition1} className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mt-9'>
            Lorem ipsum odor amet, consectetuer adipiscing elit.<br /> <b>Amet ligula </b> 
            fusce lacus Natoque mus venenatis placerat quam fusce mollis. <br /><br />Etiam leo per maximus et risus nibh.
          </p>
          <Link to={'/contact'} className='btn rounded-lg mb-[30px] mx-auto lg:mx-0 mt-10'>Hire me</Link>
        </motion.div>
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='grid grid-cols-2 lg:gap-2'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt='work'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt='work'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt='work'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt='work'></img>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);
};

export default Portfolio;
