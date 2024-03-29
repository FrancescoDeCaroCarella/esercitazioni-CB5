import "./App.css";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
const today = new Date();

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src="fdcc-logo.png" className="App-logo" alt="logo" />
          <p>
            Hello World!<br></br>I'm Francesco De Caro Carella!
          </p>
        </header>
        <div>
          <Text
            as="h2"
            content="Benvenuto all'edizione Quizzone 2022!"
            variant="title"
          ></Text>
          <Text
            as="h3"
            content="1) A quando risale la scoperta dell'America?"
          ></Text>
          <div className="btns-container">
            <Button
              variant=""
              children="1492"
              onClick={() => {console.log("Hai vinto!");
            alert("Hai vinto!")}}
            />
            <Button
              variant="primary"
              children="1942"
              onClick={() => {console.log("Hai perso!");
            alert("Hai perso!")}}
            />
            <Button
              variant="secundary"
              children="1429"
              onClick={() => {console.log("Hai perso!");
            alert("Hai perso!")}}
            />
          </div>
        </div>
        <div id="footer">
          <h3>Follow me</h3>
          <nav className="nav-social">
            <a
              href="https://www.francescodecarocarella.it"
              className="fa-solid fa-globe"
            ></a>
            <a
              href="https://it.linkedin.com/in/francescodecarocarella"
              className="fa-brands fa-linkedin-in"
            ></a>
            <a
              href="https://www.instagram.com/fdcc_webdev/"
              className="fa-brands fa-instagram"
            ></a>
            <a
              href="https://github.com/FrancescoDeCaroCarella"
              className="fa-brands fa-github"
            ></a>
            <a
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%65%40%66%72%61%6E%63%65%73%63%6F%64%65%63%61%72%6F%63%61%72%65%6C%6C%61%2E%69%74"
              className="fa-regular fa-envelope"
            ></a>
          </nav>
          <h5>
            Made with ❤️ by Fdcc<br></br>
            <span>Copyright {today.getFullYear()}</span>
          </h5>
        </div>
      </div>
    </>
  );
}

export default App;
