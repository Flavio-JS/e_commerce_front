import "./ProdutosPage.css";
import { Produtos } from "../../components/Produtos/Produtos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProdutosPage = ({ url, customerData, setUpdate, update }) => {
  const params = useParams();

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${url}/productsFilter/${params.type}`)
      .then((res) => res.json())
      .then((resultado) => {
        setProdutos(resultado);
      });
  }, [params.type, url]);

  return (
    <>
      <h1>Filtrando por : {params.type}</h1>
      <section className="section__produtos">
        {!params.type2 && (
          <>
            {produtos.map((produto, key) => (
              <Produtos
                key={produto.product_id}
                produto={produto}
                url={url}
                customerData={customerData}
                setUpdate={setUpdate}
                update={update}
              />
            ))}
          </>
        )}
        {params.type2 && (
          <>
            {produtos.map((produto, key) => (
              <Produtos key={key} produto={produto} />
            ))}
          </>
        )}
      </section>
    </>
  );
};
