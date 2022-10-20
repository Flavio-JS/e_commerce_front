import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./UserConfigs.css";
import axios from "axios";

export const UserConfigs = ({
  customerData,
  setCustomerData,
  addressData,
  setAddressData,
  url,
}) => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [phone, setPhone] = useState();

  let [address, setAddress] = useState("");
  let [uf, setUf] = useState("");
  let [city, setCity] = useState("");
  let [cep, setCep] = useState("");

  const fnDeslogar = () => {
    setCustomerData([
      {
        customer_id: "",
        name: "",
        phone: "",
        email: "",
        loged: false,
      },
    ]);
    localStorage.removeItem("customerData");
    setAddressData();
    localStorage.removeItem("addressData");
  };

  const fnUpdateUser = async () => {
    if (
      (name === undefined || name === "") &&
      (email === undefined || email === "") &&
      (password === undefined || password === "") &&
      (phone === undefined || phone === "" || phone.length < 13)
    ) {
      alert("necessário preencher pelo menos 1 campo para realizar alteração");
    } else {
      try {
        await axios.put(`${url}/customer`, {
          customer_id: customerData[0].customer_id,
          name,
          email,
          password,
          phone,
        });

        alert(`alteração feita com sucesso, realize o login novamente`);

        fnDeslogar();
      } catch (error) {
        alert(`erro: ${error}`);
      }
    }
  };

  const fnUpdateAddress = async () => {
    if (
      (address === undefined || address === "") &&
      (uf === undefined || uf === "") &&
      (city === undefined || city === "") &&
      (cep === undefined || cep === "" || cep.length < 8)
    ) {
      alert("necessário preencher pelo menos 1 campo para realizar alteração");
    } else {
      try {
        await axios.put(`${url}/address`, {
          customer_id: customerData[0].customer_id,
          address,
          uf,
          city,
          cep,
        });

        alert(`alteração feita com sucesso, realize o login novamente`);

        fnDeslogar();
      } catch (error) {
        alert(`erro: ${error}`);
      }
    }
  };

  return (
    <section className="section__userConfigs">
      {customerData[0].loged !== true && (
        <NavLink to="/Login">
          <div className="userConfigs__login">
            <h1>
              Faça o Login clicando <b>AQUI</b>
            </h1>
          </div>
        </NavLink>
      )}
      {customerData[0].loged === true && (
        <>
          <section className="section__userConfigs">
            <h1>Configurações do usuário</h1>
            <div className="card userConfigs__card">
              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  name="name"
                  placeholder={`${customerData[0].name}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="input__label">Nome</span>
              </label>
              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  name="email"
                  placeholder={`${customerData[0].email}`}
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
                  placeholder="Senha"
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
                  placeholder={`${customerData[0].phone}`}
                  maxLength="13"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="input__label">Telefone</span>
              </label>
            </div>
            <Button
              txt={"SALVAR ALTERAÇÕES DO USUÁRIO"}
              fn={fnUpdateUser}
            ></Button>
            <div className="card userConfigs__card">
              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  name="uf"
                  placeholder={`${addressData.uf}`}
                  maxLength="2"
                  value={uf}
                  onChange={(e) => setUf(e.target.value.toUpperCase())}
                />
                <span className="input__label">UF</span>
              </label>
              <label className="input">
                <input
                  className="input__field"
                  type="text"
                  name="city"
                  placeholder={`${addressData.city}`}
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
                  placeholder={`${addressData.cep}`}
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
                  placeholder={`${addressData.address}`}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <span className="input__label">Endereço</span>
              </label>
            </div>
            <Button
              txt={"SALVAR ALTERAÇÕES DE ENDEREÇO"}
              fn={fnUpdateAddress}
              classes={"userConfigs__button"}
            ></Button>
            <Button
              txt={"DESLOGAR"}
              fn={fnDeslogar}
              classes={"userConfigs__button"}
            ></Button>
          </section>
        </>
      )}
    </section>
  );
};

export default UserConfigs;
