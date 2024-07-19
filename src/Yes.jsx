import { useNavigate } from "react-router-dom";
import "../style/css/yes_styles.css";

function Yes() {
  const navigate = useNavigate();
  function returnLanding() {
    navigate("/");
  }

  return (
    <>
      <div className="container">
        <h1 className="header_text">Yippie!!! </h1>

        <div className="gif_container">
          <img
            src="./style/images/cute-cat.gif"
            alt="Cute animated illustration"
          />
        </div>
        <p className="text"> See you soon for a suprise!</p>
        <button className="btn" id="goBackButton" onClick={returnLanding}>
          Go back
        </button>
      </div>
    </>
  );
}

export default Yes;
