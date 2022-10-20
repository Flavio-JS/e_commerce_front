import React from 'react';
import '../Checkout.css';
import {motion} from 'framer-motion'


function Cards(props) {
  return (
    <motion.div className='CarsStyle'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
        <div className={props.styleCards}>{props.text}</div>
    </motion.div>
  )
}

export default Cards