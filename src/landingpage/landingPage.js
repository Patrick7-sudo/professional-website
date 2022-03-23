import Styles from './landingPage.module.css'
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import {useState,useEffect} from "react"

function LandingPage(){
    let lines=[]
    const [widthwork,setWidthwork]=useState(window.innerWidth);

    
    function arrow(){
        let line = 220;
        for(let i=0;i<9;i++){
            
            lines.push(line)
            line = line - 25;
        }
    }
    arrow()

        useEffect(() => {
          function allo() {
            setWidthwork(window.innerHeight);
          }

          window.addEventListener("resize", allo);

          allo();
        }, [widthwork]);

    return (
      
        <div
          className={Styles.landingPage}
          style={{ height: widthwork }}
          data-testid="landingPage"
        >
          <div className={Styles.landingPageWrapper} data-testid="welcomeTag">
            <div className={Styles.text_welcome_wrapper}>
              <p>
                Welcom<span className={Styles.suspends}>e</span>
              </p>
              <p>
                Welcom<span className={Styles.suspends}>e</span>
              </p>
            </div>

            <Link to="UnderConstruction" spy={true} smooth={true}>
              <div className={Styles.arrow} data-testid="arrowWrapper">
                <div
                  onClick={() => {
                    console.log("hello world");
                  }}
                  className={Styles.arrow_wrapper}
                >
                  {lines.map((input, index) => {
                    return (
                      <div key={index} className={Styles.work}>
                        {input % 2 !== 0 ? (
                          <div
                            className={Styles.containerArrow}
                            style={{
                              width: `${input}px`,
                              margin: "2px",
                              borderRadius: "50px",
                            }}
                          >
                            <div className={Styles.rightArrow}></div>
                          </div>
                        ) : (
                          <div
                            className={Styles.containerArrow}
                            style={{
                              width: `${input}px`,
                              margin: "2px",
                              borderRadius: "50px",
                            }}
                          >
                            <div className={Styles.leftArrow}></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          </div>
        </div>
     
    );
}

export default LandingPage;