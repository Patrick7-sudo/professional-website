import {useRef,useEffect,useState} from "react";
import styles from "./canvas.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function Canvas(){
    const newBackDrop =useRef(null);
    const skills =useRef(null);
    const [dots,setDots] = useState([]);
    const [sprinkle,setSprinkle] =useState([])
    const [heightMainport, setheightMainPort] = useState(window.innerheight);
    const [widthMainport, setWidthMainPort] = useState(window.innerWidth);

    const skillsList=['HTML','CSS','REACT','PYTHON','SQL','MONGODB','JEST','EXPRESS.JS','NODE.JS','FIGMA','xD DESIGN','GITHUB']

      useEffect(() => {
        function heightChanging() {
          setheightMainPort(window.innerHeight);
        }
        window.addEventListener("resize", heightChanging);
        heightChanging();
      }, [heightMainport]);

      useEffect(() => {
        function widthChanging() {
          setWidthMainPort(window.innerWidth);
        }
        window.addEventListener("resize", widthChanging);
        widthChanging();

      }, [widthMainport]);

    useEffect(() => {
      function toTwenty() {
        let nums = [];
        if (widthMainport > 900) {
          for (let i = 0; i < 110; i++) {
            nums.push(i);
          }
        } else if (widthMainport > 500) {
          for (let i = 0; i < 100; i++) {
            nums.push(i);
          }
        } else if (widthMainport > 200) {
          for (let i = 0; i < 100; i++) {
            nums.push(i);
          }
        }
        setDots(nums);
        //  console.log(nums);
      }

      toTwenty();
    }, [widthMainport]);

    useEffect(() => {
      const interval = setInterval(() => {
        let numArry = [];

        for (let i = 0; i < 20; i++) {
          numArry.push(Math.floor(Math.random() * dots.length));
        }

        setSprinkle(numArry);
      }, 3000);
      return () => clearInterval(interval);
    }, [dots]);

    useEffect(() => {
      gsap.to(newBackDrop.current, {
        // paused: true,
        scrollTrigger: {
        duration:2,
          trigger: newBackDrop.current,
          toggleClass: `${styles.canvasContainer}`,
        },
      });
    }, []);
    useEffect(() => {
      gsap.to(skills.current, {
        scrollTrigger: {
          duration: 2,
          trigger: skills.current,
          toggleClass: `${styles.individualSkillsContainer}`,
        },
      });
    }, []);


    return (
      <div className={styles.canvasContainer} ref={newBackDrop}>
        <div className={styles.starsWrapper}>
          {dots.map((input, index) => {
            return (
              <div key={index} className={styles.starsComponent}>
                {sprinkle.includes(index) ? (
                  <div
                    className={`${styles.starsIndividual}    ${styles.starsIndividualBright}`}
                  ></div>
                ) : (
                  <div className={styles.starsIndividual}></div>
                )}
                {/* <div>{input}</div> */}
              </div>
            );
          })}
        </div>
        <div className={styles.individualSkillsContainer} ref={skills}>
          {skillsList.map((input, index) => {
            return (
              <div key={index} >
                <p
                  style={{ margin: "0px" }}
                  className={styles.individualSkills}
                >
                  {input}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default Canvas