import "./Produtos.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../Button/Button";
import { useEffect } from "react";
import { useRef } from "react";

export const Produtos = ({ produto }) => {
  //Stars//
  const [update, setUpdate] = useState(false);

  let numberOfStars = useRef(1);
  let totalStars = useRef(0);

  useEffect(() => {
    fetch(`http://15.228.244.21:3000/productStar/${produto.product_id}`)
      .then((res) => res.json())
      .then((resultado) => {
        totalStars.current = resultado[0].totalStars;
        numberOfStars.current = resultado[0].numberOfStars;
        setUpdate(!update);
      });
  }, [produto.product_id]);

  //Stars//

  //Heart//
  let [favoriteHeart, setFavoriteHeart] = useState("");
  //Heart//

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="produtos__container">
      {!produto.in_stock && (
        <>
          <div className="produtos__out-of-stock">
            <b>
              <h1>FORA DE ESTOQUE</h1>
            </b>
          </div>
          <div className="produtos">
            <div className="produtos__top">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => {
                  favoriteHeart === ""
                    ? setFavoriteHeart("red")
                    : setFavoriteHeart("");
                }}
                style={{ color: `${favoriteHeart}`, transition: "all 0.3s" }}
              />
              <div className="produtos__img">
                <img src={produto.img_link} alt={produto.name} />
              </div>
            </div>
            <div className="produtos__bottom">
              <div className="produtos__info">
                <b> {formatPrice(produto.price)}</b>
                <small>
                  3x {`${formatPrice(produto.price / 3)}`} sem juros
                </small>
                <p className="produtos__name">{produto.name}</p>
                <p className="produtos__trademark">{produto.trademark}</p>
              </div>
              <div className="produtos__rating">
                <div className="produtos__stars">
                  {numberOfStars.current === 1 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="twoStar" />
                      <FontAwesomeIcon icon={faStar} className="threeStar" />
                      <FontAwesomeIcon icon={faStar} className="fourStar" />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars.current === 2 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="threeStar" />
                      <FontAwesomeIcon icon={faStar} className="fourStar" />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars.current === 3 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="threeStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="fourStar" />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars.current === 4 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="oneStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="threeStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fourStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon icon={faStar} className="fiveStar" />
                    </>
                  )}
                  {numberOfStars.current === 5 && (
                    <>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="twoStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="threeStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fourStar"
                        style={{ color: "gold" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="fiveStar"
                        style={{ color: "gold" }}
                      />
                    </>
                  )}
                </div>
                <div className="produtos__totalRating">
                  <i>{`${totalStars.current}`} avaliações</i>
                </div>
              </div>
              <NavLink
                to={`/Produto/${produto.product_id}/${produto.name}`}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Button txt="Comprar" classes="produtos__button" />
              </NavLink>
            </div>
          </div>
        </>
      )}
      {produto.in_stock && (
        <div className="produtos">
          <div className="produtos__top">
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                favoriteHeart === ""
                  ? setFavoriteHeart("red")
                  : setFavoriteHeart("");
              }}
              style={{ color: `${favoriteHeart}`, transition: "all 0.3s" }}
            />
            <NavLink
              to={`/Produto/${produto.product_id}/${produto.name}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="produtos__img">
                <img src={produto.img_link} alt={produto.name} />
              </div>
            </NavLink>
          </div>
          <div className="produtos__bottom">
            <div className="produtos__info">
              {produto.offer_percent > 0 && (
                <>
                  <small>
                    <del>{formatPrice(produto.price)}</del>
                  </small>{" "}
                  <br />
                  <b>
                    {formatPrice(
                      produto.price - produto.price * produto.offer_percent
                    )}
                    <div
                      className="produtos__offer-div"
                      style={{
                        backgroundColor: "red",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <i style={{ color: "white" }}>
                        -{produto.offer_percent * 100}%
                      </i>
                    </div>
                  </b>
                  <small>
                    3x
                    {`${formatPrice(
                      (produto.price - produto.price * produto.offer_percent) /
                        3
                    )}`}{" "}
                    sem juros
                  </small>
                  <p className="produtos__name">{produto.name}</p>
                  <p className="produtos__trademark">{produto.trademark}</p>
                </>
              )}
              {produto.offer_percent === 0 && (
                <div className="produtos__info">
                  <b>{formatPrice(produto.price)}</b>
                  <small>
                    3x
                    {`${formatPrice(produto.price / 3)}`} sem juros
                  </small>
                  <p className="produtos__name">{produto.name}</p>
                  <p className="produtos__trademark">{produto.trademark}</p>
                </div>
              )}
            </div>
            <div className="produtos__rating">
              <div className="produtos__stars">
                {numberOfStars.current === 1 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="twoStar" />
                    <FontAwesomeIcon icon={faStar} className="threeStar" />
                    <FontAwesomeIcon icon={faStar} className="fourStar" />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars.current === 2 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="threeStar" />
                    <FontAwesomeIcon icon={faStar} className="fourStar" />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars.current === 3 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="threeStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="fourStar" />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars.current === 4 && (
                  <>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="oneStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="threeStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fourStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon icon={faStar} className="fiveStar" />
                  </>
                )}
                {numberOfStars.current === 5 && (
                  <>
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="twoStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="threeStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fourStar"
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fiveStar"
                      style={{ color: "gold" }}
                    />
                  </>
                )}
              </div>
              <div className="produtos__totalRating">
                <i>{`${totalStars.current}`} avaliações</i>
              </div>
            </div>

            <NavLink
              to={`/Produto/${produto.product_id}/${produto.name}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Button txt="Comprar" classes="produtos__button" />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
