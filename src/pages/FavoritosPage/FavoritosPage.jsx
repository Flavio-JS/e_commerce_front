import { useState, useEffect } from "react";
import "./FavoritosPage.css";
import { Produtos } from "../../components/Produtos/Produtos";

export const FavoritosPage = ({ url, setUpdate, update, customerData }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    if (customerData[0].customer_id !== "") {
      fetch(`${url}/getCustomerFavProduct/${customerData[0].customer_id}`)
        .then((res) => res.json())
        .then((resultado) => {
          setProdutos(resultado);
        });
    }
  }, []);
  return (
    <>
      <section className="section__favoritos-page">
        {produtos.length < 1 && (
          <>
            <h1>Não possui nehum produto favoritado</h1>
          </>
        )}
        {produtos.map((produto) => (
          <Produtos
            key={produto.product_id}
            produto={produto}
            url={url}
            customerData={customerData}
            setUpdate={setUpdate}
            update={update}
          />
        ))}
      </section>
    </>
  );
};
