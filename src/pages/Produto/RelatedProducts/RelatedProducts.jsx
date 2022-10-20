import { Produtos } from "../../../components/Produtos/Produtos";
import "./RelatedProducts.css";

export const RelatedProducts = ({ relatedProducts }) => {
  return (
    <>
      <section className="section__relatedProducts justify-center">
        <h1>Produtos relacionados: </h1>
        <section className="section__produtos ">
          {relatedProducts !== undefined && (
            <>
              {relatedProducts.map((produto) => (
                <Produtos key={produto.product_id} produto={produto} />
              ))}
            </>
          )}
        </section>
      </section>
    </>
  );
};
