import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const useCidades = ({uf}) => {
  const [cidades, setCidades] = useState([])

  useEffect(() => {
    if(!uf) return;
    axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`)
    .then((response) =>{setCidades(response.data)})
  }, [uf])

  return(
    cidades
  )
}
 export default useCidades
