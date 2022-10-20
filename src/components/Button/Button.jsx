import "./Button.css";

export const Button = ({ fn, txt, classes }) => {
  return (
    <button className={`button-component ${classes}`} onClick={fn}>
      {txt}
    </button>
  );
};
