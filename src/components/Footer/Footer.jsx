import "./Footer.css";
import { Icon } from "../Icons/Icon";

export const Footer = () => {
  return (
    <footer className="container">
      <div className="footer__top">
        <div className="footer__top-items">
          <div className="footer__top-item">
            <strong>
              Sobre a <br />
              HackFashion
            </strong>
            <ul>
              <li>O Grupo HackFashion</li>
              <li>Carreira</li>
              <li>Proteção da marca</li>
            </ul>
          </div>
          <div className="footer__top-item">
            <strong>Ajuda/Suporte</strong>
            <ul>
              <li>Preço de envio </li>
              <li>Devolução</li>
              <li>Como pedir</li>
              <li>Como Rastrear</li>
              <li>Guia de tamanhos</li>
              <li>HackFashion VIP</li>
            </ul>
          </div>
          <div className="footer__top-item">
            <strong>Atendimento ao Cliente</strong>
            <ul>
              <li>Contate-Nos </li>
              <li>Método de Pagamento</li>
              <li>Pontos Bônus</li>
            </ul>
          </div>
          <div className="footer__top-item">
            <strong>Loja</strong>
            <ul>
              <li>Jeans</li>
              <li>Camisas</li>
              <li>Suéter</li>
              <li>Calças de moletom</li>
              <li>Camisas de moletom</li>
            </ul>
          </div>
          <div className="footer__top-item">
            <strong>Encontre-nos em:</strong>
            <ul className="footer__social-media">
              <li>
                <Icon icon="fa-brands fa-instagram footer__social-icon" />
              </li>
              <li>
                <Icon icon="fa-brands fa-facebook footer__social-icon" />
              </li>
              <li>
                <Icon icon="fa-brands fa-twitter footer__social-icon" />
              </li>
              <li>
                <Icon icon="fa-brands fa-youtube footer__social-icon" />
              </li>
              <li>
                <Icon icon="fa-brands fa-tiktok footer__social-icon" />
              </li>
            </ul>
            <strong>Pagamento</strong>
            <ul className="footer__pagamentos">
              <li>
                <img src="/img/footer/boleto.png" alt="boleto" />
              </li>
              <li>
                <img src="/img/footer/elo.png" alt="cartão elo" />
              </li>
              <li>
                <img src="/img/footer/maestro.png" alt="cartão maestro" />
              </li>
              <li>
                <img src="/img/footer/mastercard.png" alt="cartão mastercard" />
              </li>
              <li>
                <img src="/img/footer/PayPal.png" alt="PayPal" />
              </li>
              <li>
                <img src="/img/footer/visa.png" alt="cartão visa" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <ul>
          <li>Mapa da página|</li>
          <li>Créditos|</li>
          <li>Termos e condições|</li>
          <li>Termos de privacidade|</li>
          <li>Guia de tamanhos|</li>
          <li>
            <div>
              <img src="/img/footer/brasil.png" alt="bandeira do brasil" />
              <b>Brasil</b>
            </div>
          </li>
          <li>&copy HackADev - 2022</li>
        </ul>
      </div>
    </footer>
  );
};
