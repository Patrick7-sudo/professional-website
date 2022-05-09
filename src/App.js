import style from './App.module.css';
import LandingPage from './landingpage/landingPage';
import Homepage from './homepage/homepage';
import UnderConstruction from './underConstruction/underconstruction';
import AboutMe from './aboutme/aboutme';



function App() {
  return (
    <div className={style.App}>
      <section className={style.snapping} id="LandingPage">
        <LandingPage />
      </section>
      <section className={style.snapping} id="HomePage">
        <Homepage />
      </section>
      <section className={style.snapping} id="AboutMe">
        <AboutMe />
      </section>
      <section className={style.snapping} id="UnderConstruction">
        <UnderConstruction />
      </section>
    </div>
  );
}

export default App;
