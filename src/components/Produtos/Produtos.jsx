import "./Produtos.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../Button/Button";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";

export const Produtos = ({ produto, url, customerData, setUpdate, update }) => {
  //Stars//

  let numberOfStars = useRef(1);
  let totalStars = useRef(0);
  let [favProduct, setFavProduct] = useState("notFav");

  useEffect(() => {
    fetch(`${url}/productStar/${produto.product_id}`)
      .then((res) => res.json())
      .then((resultado) => {
        totalStars.current = resultado[0].totalStars;
        numberOfStars.current = resultado[0].numberOfStars;
        setUpdate(!update);
      });
    if (customerData[0].customer_id !== "") {
      fetch(
        `${url}/favProduct/${customerData[0].customer_id}/${produto.product_id}`
      )
        .then((res) => res.json())
        .then((resultado) => {
          setFavProduct(resultado[0].fav);
        });
    }
  }, [produto.product_id]);

  //Stars//

  //Heart//

  const handleClickHeart = async () => {
    if (favProduct === "notFav") {
      setFavProduct("fav");
      try {
        await axios.put(`${url}/favProduct`, {
          product_id: produto.product_id,
          user_id: customerData[0].customer_id,
        });
      } catch (error) {
        console.log(error);
      }
    } else if (favProduct === "fav") {
      setFavProduct("notFav");
      try {
        await axios.post(`${url}/deletFavProduct`, {
          product_id: produto.product_id,
          user_id: customerData[0].customer_id,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
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
              {favProduct === "notFav" && (
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => {
                    handleClickHeart();
                  }}
                  style={{ color: ` `, transition: "all 0.3s" }}
                />
              )}

              {favProduct === "fav" && (
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => {
                    handleClickHeart();
                  }}
                  style={{ color: `red`, transition: "all 0.3s" }}
                />
              )}

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
                  <i>{`${totalStars.current}`} avalia????es</i>
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
            {favProduct === "notFav" && (
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => {
                  handleClickHeart();
                }}
                style={{ color: ` `, transition: "all 0.3s" }}
              />
            )}

            {favProduct === "fav" && (
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => {
                  handleClickHeart();
                }}
                style={{ color: `red`, transition: "all 0.3s" }}
              />
            )}
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
                <i>{`${totalStars.current}`} avalia????es</i>
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
