import { useState } from "react";
import "./Cadastro.css";
import axios from "axios";
import { Button } from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

export const Cadastro = ({ url }) => {
  let [name, setName] = useState("Nome");
  let [email, setEmail] = useState("Email");
  let [password, setPassword] = useState("Senha");
  let [phone, setPhone] = useState("Nº Celular");

  let [address, setAddress] = useState("Endereço");
  let [uf, setUf] = useState("UF");
  let [city, setCity] = useState("Cidade");
  let [cep, setCep] = useState("CEP");
  let [showCadastro, setShowCadastro] = useState(true);

  const cadastro = async () => {
    if (
      name === "" ||
      name === "Nome" ||
      email === "" ||
      email === "Email" ||
      password === "" ||
      password === "Senha" ||
      phone === "" ||
      phone.length < 13 ||
      address === "" ||
      address === "Endereço" ||
      uf === "" ||
      uf === "UF" ||
      uf.length < 2 ||
      city === "" ||
      city === "Cidade" ||
      cep === "" ||
      cep.length < 8 ||
      cep === "CEP"
    ) {
      alert("CAMPO(S) NÃO PREENCHIDO(S) OU PREENCHIDOS INCORRETAMENTE");
    } else {
      try {
        const customer_id = await axios.post(`${url}/customerteste`, {
          name,
          email,
          password,
          phone,
        });
        await axios.post(`${url}/address`, {
          customer_id: customer_id.data[0].customer_id,
          address,
          uf,
          city,
          cep,
        });
        alert("cadastrou");
        setShowCadastro(!showCadastro);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="cadastro">
      {showCadastro && (
        <>
          <h1>Cadastro do Cliente</h1>

          <div className="card">
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="input__label">Nome</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="input__label">Email</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="password"
                name="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input__label">Senha</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="phone"
                placeholder="(12)987654321"
                maxLength="13"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="input__label">(DDD)Telefone</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="uf"
                placeholder="GO"
                maxLength="2"
                value={uf}
                onChange={(e) => setUf(e.target.value.toUpperCase())}
              />
              <span className="input__label">Estado</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="city"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <span className="input__label">Cidade</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="cep"
                placeholder="CEP"
                maxLength="8"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <span className="input__label">CEP</span>
            </label>
            <label className="input">
              <input
                className="input__field"
                type="text"
                name="address"
                placeholder="endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <span className="input__label">Endereço</span>
            </label>
          </div>
          <Button txt={"Cadastrar"} fn={cadastro} />
          <NavLink to="/Login">
            <h1>
              Já é cadastrado ? Clique <b>AQUI</b>
            </h1>
          </NavLink>
        </>
      )}
      {!showCadastro && (
        <NavLink to="/Login">
          <div className="cadastro__login">
            <h1>
              Faça o Login clicando <b>AQUI</b>
            </h1>
          </div>
        </NavLink>
      )}
    </section>
  );
};

export default Cadastro;
