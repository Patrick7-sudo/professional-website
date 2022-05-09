import styles from "./navbar.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
ScrollTrigger.saveStyles(`${styles.homepage_navbarTogglehide}`);

function Navbar(){

    let navBarAnimation = useRef(null);

    const [toggle, setToggle] = useState(true);
    const [navbarActive, setNavbarActive] = useState(false);
     const [heightMainport, setheightMainPort] = useState(window.innerheight);
     const [widthMainport, setWidthMainPort] = useState(window.innerWidth);

       useEffect(() => {
         ScrollTrigger.matchMedia({
           "(min-width:800px)": function () {
             //  animation start //
            //  gsap.to(navBarAnimation.current, {
            //    xPercent: -100,
            //    duration: 2,
            //    //  borderTop: "2px solid white",
            //    //  borderBottom: "2px solid white",
            //    scrollTrigger: {
            //      trigger: navBarAnimation.current,
            //      toggleActions: "play reset complete reset",
            //    },
            //  });
             gsap.to(navBarAnimation.current, {
               duration: 1,
               delay: 2,

               borderTop: "none",

               //  borderBottom: "4px solid white",
               height: "95%",
               scrollTrigger: {
                 trigger: navBarAnimation.current,
                 toggleClass: `${styles.homepage_navbarhoverlightactive}`
               },
             });
           },
         });
         //  gsap.fromTo()
       }, []);
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
       Toggling()
    
     }, [heightMainport,widthMainport]);
     

    function Toggling() {
      if (widthMainport > 800) {
        setToggle(true);
        setNavbarActive(false);
      } else if (widthMainport < 800 && navbarActive === true) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    }

    function toggleForTheBest() {
      setToggle(!toggle);
      setNavbarActive(!navbarActive);
    }
    return (
      <div
        className={styles.navbar_container}
      >
        <div
          className={styles.homepage_navbarHolder}
          data-testid="homepage_navbarHolder"
        >
          <div className={styles.homepage_navbarContainer}>
            <div
              className={styles.iconWrapper}
              onClick={() => {
                toggleForTheBest();
              }}
            >
              <FontAwesomeIcon icon={faBars} className={styles.barsIcon} />
            </div>

            <div
              className={`${styles.homepage_navbarMainWrapper} ${
                toggle
                  ? styles.homepage_navbarToggleShow
                  : styles.homepage_navbarTogglehide
              }`}
            >
              <ul className={`${styles.homepage_navbarUl}`}>
                <li className={`${styles.homepage_navbarli}`}>
                  <Link
                    to="LandingPage"
                    spy={true}
                    smooth={true}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <p>About Me</p>
                    <div className={styles.homepage_navbarhoverlight_wrapper}>
                      <div
                        className={`${styles.homepage_navbarhoverlight} `}
                        ref={navBarAnimation}
                      ></div>
                    </div>
                  </Link>
                </li>

                <li className={styles.homepage_navbarli}>
                  <Link
                    to="LandingPage"
                    spy={true}
                    smooth={true}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <p>Project</p>
                    <div className={styles.homepage_navbarhoverlight_wrapper}>
                      <div className={styles.homepage_navbarhoverlight}></div>
                    </div>
                  </Link>
                </li>

                <li className={styles.homepage_navbarli}>
                  <Link
                    to="LandingPage"
                    spy={true}
                    smooth={true}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <p>Get In touch</p>
                    <div className={styles.homepage_navbarhoverlight_wrapper}>
                      <div className={styles.homepage_navbarhoverlight}></div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar