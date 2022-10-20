import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const url = 'https://brasilapi.com.br/api/ibge/uf/v1'

const useEstados = () => {
  const [estados, setEstados] = useState([])

  useEffect(() => {
    axios.get(url).then((response) =>{
      setEstados(response.data)      
    })
  }, [])

  return(
    estados
  )
}
 export default useEstados
