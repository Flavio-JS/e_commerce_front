import "./Button.css";

export const Button = ({ fn, txt, classes }) => {
  return (
    <>
      {classes && (
        <button className={`button-component ${classes}`} onClick={fn}>
          {txt}
        </button>
      )}
      {!classes && (
        <button className={`button-component`} onClick={fn}>
          {txt}
        </button>
      )}
    </>
  );
};
