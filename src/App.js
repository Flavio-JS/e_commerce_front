import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Produto } from "./pages/Produto/Produto";
import { ProdutosPage } from "./pages/ProdutosPage/ProdutosPage";
import { Routes, Route } from "react-router-dom";
import { Carrinho } from "./pages/Carrinho/Carrinho";
import { Checkout } from "./pages/Checkout/Checkout";
import { UserConfigs } from "./pages/UserConfigs/UserConfigs";
import { Layout } from "./components/Layout/Layout";
import { FavoritosPage } from "./pages/FavoritosPage/FavoritosPage";

function App() {
  let [produtosCarrinho, setProdutosCarrinho] = useState([]);
  // let url = 'http://15.228.244.21:3000'
  let url = "http://localhost";

  useEffect(() => {
    if (localStorage.customerData) {
      setCustomerData(JSON.parse(localStorage.customerData));
    }
    if (localStorage.produtosCarrinho) {
      setProdutosCarrinho(JSON.parse(localStorage.produtosCarrinho));
    }
    if (localStorage.addressData) {
      setAddressData(JSON.parse(localStorage.addressData));
    }
  }, []);

  const [customerData, setCustomerData] = useState([
    {
      customer_id: "",
      name: "",
      phone: "",
      loged: false,
    },
  ]);

  let [addressData, setAddressData] = useState([
    {
      address: "",
      cep: "",
      city: "",
      uf: "",
    },
  ]);

  let [update, setUpdate] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout customerData={customerData} />}>
          <Route
            index
            element={
              <Home
                url={url}
                customerData={customerData}
                setUpdate={setUpdate}
                update={update}
              />
            }
          ></Route>
          <Route
            path="/Favoritos"
            element={
              <FavoritosPage
                url={url}
                customerData={customerData}
                setUpdate={setUpdate}
                update={update}
              />
            }
          ></Route>
          <Route
            path="/:type"
            element={
              <ProdutosPage
                url={url}
                customerData={customerData}
                setUpdate={setUpdate}
                update={update}
              />
            }
          ></Route>
          <Route
            path="/Login"
            element={
              <Login
                url={url}
                customerData={customerData}
                setCustomerData={setCustomerData}
                setAddressData={setAddressData}
              />
            }
          ></Route>
          <Route
            path="/userConfigs"
            element={
              <UserConfigs
                url={url}
                customerData={customerData}
                setCustomerData={setCustomerData}
                addressData={addressData}
                setAddressData={setAddressData}
              />
            }
          ></Route>

          <Route path="/Cadastro" element={<Cadastro url={url} />}></Route>
          <Route
            path="/Produto/:itemID/:nome"
            element={
              <Produto
                url={url}
                produtosCarrinho={produtosCarrinho}
                setProdutosCarrinho={setProdutosCarrinho}
                customerData={customerData}
                setUpdate={setUpdate}
                update={update}
              />
            }
          ></Route>

          <Route
            path="/Carrinho"
            element={<Carrinho produtosCarrinho={produtosCarrinho} />}
          ></Route>
          <Route
            path="/Checkout"
            element={
              <Checkout
                url={url}
                produtosCarrinho={produtosCarrinho}
                isLoged={customerData[0].loged}
                customerData={customerData}
                setProdutosCarrinho={setProdutosCarrinho}
                addressData={addressData}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
