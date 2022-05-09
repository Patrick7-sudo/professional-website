import styles from "./pagination.module.css";
import {useState,useRef,useEffect} from"react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function Pagination(){
    let num2=useRef(null);

    useEffect(() => {
      gsap.fromTo(
        num2.current,
        { bottom: "13%", duration: 1},
        {
          duration: 1,
          bottom: "60%",
          scrollTrigger: {
            trigger: num2.current,
            toggleActions: "play complete complete reset",
            toggleClass: `${styles.paginationPageNumOneActive}`,
          },
        }
      );
    }, []);
    return (
      <div className={styles.pagination_Holder}>
        <div className={styles.paginationWrapper}>
          <div className={styles.paginationBar}></div>
          <div className={styles.paginationPageNum} style={{ bottom: "70%" }}>
            <Link to="HomePage" spy={true} smooth={true}>
              1
            </Link>
          </div>
          <div className={styles.paginationPageNum} ref={num2}>
            2
          </div>
          <div className={styles.paginationPageNum}>3</div>
          <div className={styles.paginationPageNum}>4</div>
        </div>
      </div>
    );
}

export default Pagination