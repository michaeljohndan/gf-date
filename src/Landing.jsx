import { useNavigate } from "react-router-dom";
import "../style/css/styles.css";

function Landing() {
  const navigate = useNavigate();

  function handleYesClick() {
    navigate("/yes");
  }

  function moveButton() {
    var x =
      Math.random() *
      (window.innerWidth - document.getElementById("noButton").offsetWidth);
    var y =
      Math.random() *
      (window.innerHeight - document.getElementById("noButton").offsetHeight);

    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
  }

  return (
    <>
      <h1 className="header_text">Do you wanna go out with me hehe</h1>

      <div className="gif_container">
        <img
          src="https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={handleYesClick}>
          Yes
        </button>
        <button className="btn" id="noButton" onMouseOver={moveButton}>
          No
        </button>
      </div>
    </>
  );
}

export default Landing;
