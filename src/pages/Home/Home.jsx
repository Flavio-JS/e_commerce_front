import "./Home.css";
import { Banner } from "../../components/Banner/Banner";
import { Slider } from "../../components/Slider/Slider";
import { Produtos } from "../../components/Produtos/Produtos";
import { useState, useEffect } from "react";

export const Home = ({url}) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((resultado) => {
        setProdutos(resultado);
      });
  }, []);

  const produtosOffer = produtos.filter((produto) => produto.offer_percent > 0);

  let [showOffersOnly, setShowOffersOnly] = useState(false);

  const handleClickBanner = () => {
    setShowOffersOnly(true);
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Banner
        bannerTitle="Título do banner"
        bannerMainInfo="Até 50% off"
        bannerInfo="Não perca essa oportunidade !"
        bannerDirectoryImg="banners/banner_ilustrativo3.png"
        fn={handleClickBanner}
      />
      <Slider />

      <section className="section__produtos">
        {!showOffersOnly && (
          <>
            {produtos.map((produto) => (
              <Produtos key={produto.product_id} produto={produto} />
            ))}
          </>
        )}
        {showOffersOnly && (
          <>
            {produtosOffer.map((produto) => (
              <Produtos key={produto.product_id} produto={produto} />
            ))}
          </>
        )}
      </section>
    </>
  );
};
