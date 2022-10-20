import React from "react";
import "./login-style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login({
  customerData,
  setCustomerData,
  setAddressData,
  url
}) {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [update, setUpdate] = useState(false);

  const login = async () => {
    try {
      const resultadoLogin = await axios.post(`${url}/login`, {
        loginEmail,
        loginPassword,
      });

      setCustomerData(resultadoLogin.data);
      localStorage.setItem("customerData", JSON.stringify(resultadoLogin.data));

      let resultadoAddress = await axios.post(`${url}/addressData`, {
        customer_id: resultadoLogin.data[0].customer_id,
      });
      setAddressData(resultadoAddress.data);
      localStorage.setItem(
        "addressData",
        JSON.stringify(resultadoAddress.data)
      );

      setUpdate(!update);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {customerData[0].loged === false && (
        <>
          <div className="login-container">
            <input
              className="in-text-pass"
              type="text"
              name="loginId"
              placeholder="exemplo@exemplo.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
            <div className="space"></div>
            <input
              className="in-text-pass"
              type="password"
              name="loginPassword"
              value={loginPassword}
              placeholder="SENHA"
              onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
            <button
              className="space loginbtn"
              onClick={() => {
                login();
              }}
            >
              LOGIN
            </button>
            <br></br>
            <p>Não é cadastrado?</p>
            <Link className="link-style" to="/Cadastro">
              Cadastre-se
            </Link>
          </div>
        </>
      )}

      {customerData[0].loged === "notFound" && (
        <div className="login-container">
          <h1>email não encontrado</h1>
          <input
            className="in-text-pass"
            type="text"
            name="loginId"
            placeholder="exemplo@exemplo.com"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          ></input>
          <div className="space"></div>
          <input
            className="in-text-pass"
            type="password"
            name="loginPassword"
            value={loginPassword}
            placeholder="SENHA"
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <button
            className="space loginbtn"
            onClick={() => {
              login();
            }}
          >
            LOGIN
          </button>
          <br></br>
          <p>Não é cadastrado?</p>
          <Link className="link-style" to="/Cadastro">
            Cadastre-se
          </Link>
        </div>
      )}

      {customerData[0].loged === "notRegistered" && (
        <div className="login-container">
          <h1>Usuário não cadastrado</h1>
          <input
            className="in-text-pass"
            type="text"
            name="loginId"
            placeholder="exemplo@exemplo.com"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          ></input>
          <div className="space"></div>
          <input
            className="in-text-pass"
            type="password"
            name="loginPassword"
            value={loginPassword}
            placeholder="SENHA"
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <button
            className="space loginbtn"
            onClick={() => {
              login();
            }}
          >
            LOGIN
          </button>
          <br></br>
          <p>Não é cadastrado?</p>
          <Link className="link-style" to="/Cadastro">
            Cadastre-se
          </Link>
        </div>
      )}

      {customerData[0].loged === "wrongPassword" && (
        <div className="login-container">
          <h1>Senha incorreta</h1>
          <input
            className="in-text-pass"
            type="text"
            name="loginId"
            placeholder="exemplo@exemplo.com"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          ></input>
          <div className="space"></div>
          <input
            className="in-text-pass"
            type="password"
            name="loginPassword"
            value={loginPassword}
            placeholder="SENHA"
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <button
            className="space loginbtn"
            onClick={() => {
              login();
            }}
          >
            LOGIN
          </button>
          <br></br>
          <p>Não é cadastrado?</p>
          <Link className="link-style" to="/Cadastro">
            Cadastre-se
          </Link>
        </div>
      )}

      {customerData[0].loged === true && (
        <>
          <div className="login-container">
            <div
              className="space"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h1>{customerData[0].name} está logado ! Deseja deslogar ?</h1>
            </div>
            <button
              className="space loginbtn"
              onClick={() => {
                setCustomerData([
                  {
                    customer_id: "",
                    name: "",
                    phone: "",
                    loged: false,
                  },
                ]);
                localStorage.removeItem("customerData");
                setAddressData();
                localStorage.removeItem("addressData");
              }}
            >
              DESLOGAR
            </button>
          </div>
        </>
      )}
    </>
  );
}
