import "./Produto.css";
import { useParams } from "react-router-dom";
import { ButtonProduct } from "../../components/Button-product/Button-product";
import { useState, useEffect } from "react";

export const Produto = ({ produtosCarrinho, setProdutosCarrinho, url }) => {
  const params = useParams();
  const itemId = params.itemID;
  const [product, setProduct] = useState([
    {
      product_id: parseInt(itemId),
    },
  ]);

  useEffect(() => {
    fetch(`${url}/products/${itemId}`)
      .then((res) => res.json())
      .then((resultado) => {
        setProduct(resultado);
        let box = 0;
        let img = 0;
        setTimeout(() => {
          box = document.querySelector(".produto-item__container");
          img = document.querySelector(".produto__image");

          box.addEventListener("mousemove", (e) => {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            img.style.transformOrigin = `${x}px ${y}px`;
            img.style.transform = "scale(2)";
          });

          box.addEventListener("mouseleave", () => {
            img.style.transformOrigin = `center center`;
            img.style.transform = "scale(1)";
          });
        }, 1);
      });
  }, [itemId]);

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      {!product[0] && (
        <>
          <h1>carregando</h1>
        </>
      )}
      {product[0] && (
        <>
          <section className="produto__container">
            <div className="produto__image-box">
              <div className="produto-item__container">
                <img
                  className="produto__image"
                  src={product[0].img_link}
                  alt={product[0].name}
                />
              </div>
            </div>
            <div className="produto__info">
              <h2 className="produto__title">{product[0].name}</h2>

              {/* Produto em oferta */}
              {product[0].offer_percent > 0 && (
                <h2 id="produto__offer">
                  {formatPrice(
                    product[0].price -
                      product[0].price * product[0].offer_percent
                  )}
                </h2>
              )}
              {/* Produto normal */}
              {product[0].offer_percent === 0 && (
                <h2 className="produto__normal">
                  {formatPrice(product[0].price)}
                </h2>
              )}

              <ButtonProduct
                produto={product[0]}
                produtosCarrinho={produtosCarrinho}
                setProdutosCarrinho={setProdutosCarrinho}
                url={url}
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};
