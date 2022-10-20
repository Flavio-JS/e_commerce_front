import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from 'axios';
import useEstados from "./Hooks/useEstados";
import useCidades from "./Hooks/useCidades";


const url = 'http://localhost:80/customer'

export default function Cadastro() {
  const estados = useEstados()
  const [selectedEstados, setSelectedEstados] = useState(undefined)
  const cidades = useCidades({ uf: selectedEstados })

  const [nome, setNome] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [celular, setCelular] = useState(undefined)
  const [senha, setSenha] = useState(undefined)

  const [cep, setCep] = useState(undefined)
  const [endereço, setEndereço] = useState(undefined)
  const [numero, setNumero] = useState(undefined)
  const [complemento, setComplemento] = useState(undefined)
  const [referencia, setReferencia] = useState(undefined)
  const [bairro, setBairro] = useState(undefined)
  const [city, setCity] = useState(undefined)

  
  
  
  
  
  const hendleSubmit = async () => {
    try {

      if (celular === undefined) {
        await axios.post(url, {
          nome, email, senha, celular, cep, endereço, complemento,
          referencia, bairro, selectedEstados, city
        })
      } else {
        await axios.post(url, {
          nome, email, senha, celular, cep, endereço, numero, complemento,
          referencia, bairro, selectedEstados, city
        })
      }
  

    } catch (error) {
      console.log(error)
      
    }
  }
  
  const handleEstadosUpdate = (event) => {
    setSelectedEstados(event.target.value)
  }
  
  console.log(celular)

  return (
    <div>
      <div>
        <div className="text-container-header">
          <div className="text-conta">
            <h1>CRIAR CONTA</h1>
          </div>
          <div className="text-align-style">
            <p>
              Já possui uma conta ? Clique aqui para fazer{" "}
              <Link className="style-login-btn" to="/Login">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="cadastro-container">
          <div className="header-text-container"></div>

          <div className="area-cadastro">
            <h1>Dados cadastrais</h1>
            <label for="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></input>

            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label for="fixo">Senha</label>
            <input
              type="password"
              name="senha"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}

            ></input>
            
            <label for="Celular">Celular</label>
            <input
              type="number"
              name="celular"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            ></input>


          </div>

          <div className="area-cadastro-endereco">
            <h1>Endereço</h1>

            <label for="Estado">Estados</label>

            <select value={selectedEstados} onChange={handleEstadosUpdate}>
              {estados.map(estado =>
                <option value={estado.sigla}>{estado.nome}</option>
              )}
            </select>

            <label for="Cidade">Cidade</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              {cidades.map(cidade => <option >{cidade.nome}</option>)}
            </select>

            <label for="cep">CEP</label>
            <input
              type="text"
              name="cep"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            ></input>

            <label for="endereço">Endereço</label>
            <input
              type="text"
              name="endereço"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira seu Endereço"
              value={endereço}
              onChange={(e) => setEndereço(e.target.value)}
            ></input>

            <label for="Bairro">Bairro </label>
            <input
              type="text"
              name="Bairro"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira o seu Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            ></input>

            <label for="Número">Número</label>
            <input
              type="number"
              name="Número"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Numero Da Casa"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            ></input> 

            <label for="Complemento">Complemento</label>
            <input
              type="text"
              name="Complemento"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            ></input>

            <label for="Rêferencia">Rêferencia </label>
            <input
              type="Rêferencia "
              name="Rêferencia"
              id="name"
              title="Este campo é obrigátorio"
              placeholder="Insira uma referencia"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="login-create">
        <Button classes={"CreateBtn-test"} txt={"Criar Login"} fn={hendleSubmit} />
        <Button classes={"LoginBtn-test"} txt={"Login"} />
      </div>
    </div>
  );
}
