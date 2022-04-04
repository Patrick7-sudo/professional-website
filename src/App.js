import './App.css';
import LandingPage from './landingpage/landingPage';
import Homepage from './homepage/homepage';
import Navbar from './Navbar/navbar';
import UnderConstruction from './underConstruction/underconstruction';




function App() {
  return (
    <div className="App">
      <section id="LandingPage">
        <LandingPage />
      </section>
      <section>
        <div id="HomePage">
          <Homepage />
        </div>
        <div id="UnderConstruction">
          <UnderConstruction />
        </div>
      </section>
    </div>
  );
}

export default App;
