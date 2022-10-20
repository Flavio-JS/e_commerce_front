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
  url
}) => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [ddd, setDdd] = useState();
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
      (ddd === undefined ||
        ddd === "" ||
        phone === undefined ||
        phone === "" ||
        phone.length < 9)
    ) {
      alert("necessário preencher pelo menos 1 campo para realizar alteração");
    } else {
      try {
        await axios.put(`${url}/customer`, {
          customer_id: customerData[0].customer_id,
          name,
          email,
          password,
          phone: `(${ddd})${phone}`,
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
        <NavLink to="/login">
          <h1>faça o login clicando AQUI</h1>
        </NavLink>
      )}
      {customerData[0].loged === true && (
        <>
          <section>
            <h1>ALTERAR DADOS DO USUÁRIO</h1>
            <br />
            Nome :
            <input
              id="cadastro-teste__input-name"
              type="text"
              name="name"
              placeholder={`${customerData[0].name}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            Email :
            <input
              id="cadastro-teste__input-email"
              type="text"
              name="email"
              placeholder={`${customerData[0].email}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            Senha :
            <input
              id="cadastro-teste__input-password"
              type="password"
              name="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            Telefone: (
            <input
              id="cadastro-teste__input-ddd"
              type="text"
              name="ddd"
              placeholder={`${customerData[0].phone.substr(1, 2)}`}
              maxLength="2"
              value={ddd}
              onChange={(e) => setDdd(e.target.value)}
            />
            )
            <input
              id="cadastro-teste__input-phone"
              type="text"
              name="phone"
              placeholder={`${customerData[0].phone.substr(4)}`}
              maxLength="9"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <br />
            <Button
              txt={"SALVAR ALTERAÇÕES DO USUÁRIO"}
              fn={fnUpdateUser}
            ></Button>
            <br />
            <hr />
            <h1>ALTERAR ENDEREÇO</h1>
            <br />
            Estado*:
            <input
              id="cadastro-teste__input-uf"
              type="text"
              name="uf"
              placeholder={`${addressData.uf}`}
              maxLength="2"
              value={uf}
              onChange={(e) => setUf(e.target.value.toUpperCase())}
            />
            <br />
            Cidade *:
            <input
              id="cadastro-teste__input-city"
              type="text"
              name="city"
              placeholder={`${addressData.city}`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            CEP *:
            <input
              id="cadastro-teste__input-cep"
              type="text"
              name="cep"
              placeholder={`${addressData.cep}`}
              maxLength="8"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <br />
            Endereço *:
            <input
              id="cadastro-teste__input-address"
              type="text"
              name="address"
              placeholder={`${addressData.address}`}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <br />
            <Button
              txt={"SALVAR ALTERAÇÕES DE ENDEREÇO"}
              fn={fnUpdateAddress}
            ></Button>
            <br />
          </section>
          <Button txt={"DESLOGAR"} fn={fnDeslogar}></Button>
        </>
      )}
    </section>
  );
};

export default UserConfigs;
