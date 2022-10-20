import * as React from 'react';
import './Sucess.css'
import {motion} from 'framer-motion'

function Sucess() {
  return (
    <motion.div className='SucessStyle'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
        <div className='finalize-Container'>
          <div className='container'>
            <p>Compra Finalizada com Sucesso</p>
          </div>
        </div>
    </motion.div>
  )
}

export default Sucess

