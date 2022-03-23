import './App.css';
import LandingPage from './landingpage/landingPage';
import Homepage from './homepage/homepage';
import Navbar from './Navbar/navbar';
import UnderConstruction from './underConstruction/underconstruction';




function App() {
  return (

      <div className="App">
        <section>
          <LandingPage />
        </section>
        <section>
          <div id="UnderConstruction">
            <UnderConstruction />
          </div>

          {/* <Homepage /> */}
        </section>
      </div>

  );
}

export default App;
