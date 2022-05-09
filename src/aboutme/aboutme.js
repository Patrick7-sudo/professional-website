import Navbar from "../navFolder/navbar"
import styles from "./aboutme.module.css"
import {useState, useEffect, useRef} from "react" 
import Pagination from "../pagination/pagination";
import Canvas from "../canvas/canvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutMeContent from "../aboutmecontent/aboutmecontent";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function AboutMe(){
    const [heightMainport, setheightMainPort] = useState(window.innerheight);
    const [widthMainport, setWidthMainPort] = useState(window.innerWidth);

    const backdrop =useRef(null);

    useEffect(() => {
        function heightChanging() {
         setheightMainPort(window.innerHeight);
        }
       
        window.addEventListener("resize", heightChanging);

        heightChanging();

        function widthChanging() {
          setWidthMainPort(window.innerWidth);
        }

        window.addEventListener("resize", widthChanging);

        widthChanging();
    }, [heightMainport]);

    useEffect(() => {
      gsap.to(backdrop.current, {
        // paused: true,
        scrollTrigger: {
          trigger: backdrop.current,
          toggleClass: `${styles.aboutmeknowledgeballcontent}`,
        },
      });
    }, []);
    // console.log(heightMainport)

    return (
      <div
        className={styles.aboutmepagewrapper}
        style={{ height: heightMainport }}
      >
        <div className={styles.aboutme_main}>
          <div className={styles.aboutme_navbar}>
            <Navbar />
          </div>
          <div className={styles.aboutme_content}>
            <Pagination/>
            <div style={{ width: "90%", backgroundColor: "black" }}>
              <div className={styles.aboutme_contentwrapper}>
                {/* about me mini section */}
                <div className={styles.aboutmeStory}>
                  <AboutMeContent/>
                </div>
                {/* about me mini section */}
                {/* knowledge ball container */}
                <div className={styles.aboutmeknowledge}>
                  <div className={styles.aboutmeknowledgeball}>
                    <div
                      // className={styles.aboutmeknowledgeballcontent}
                      ref={backdrop}
                    >
                      <Canvas />
                    </div>
                  </div>
                </div>
                {/* end of knowledge ball container */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutMe