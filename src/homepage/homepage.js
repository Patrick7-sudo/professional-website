import Styles from "./homepage.module.css";
import {Link} from "react-scroll"
import { useState, useEffect,useRef } from "react";
import  {gsap}  from "gsap";
import  {ScrollTrigger}  from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
ScrollTrigger.saveStyles(`${Styles.homepage_navbarTogglehide}`);

function Homepage(){
  let navBarAnimation=useRef(null);
  let liAnimation = useRef(null);
  let textHighlight = useRef(null);
  let skills =useRef(null);
  let num1=useRef(null);

  const [heightMainport,setheightMainPort]=useState(window.innerheight);
  const [widthMainport, setWidthMainPort] = useState(window.innerWidth);
  const [arrayTriangle, setArrayTraingle] = useState([]);

  const [toggle, setToggle]=useState(true);
  const [navbarActive, setNavbarActive]=useState(false);
  const [count,setCount]=useState([]);

  function Toggling(){
    if(widthMainport > 800){
      setToggle(true);
      setNavbarActive(false);
    }else if( widthMainport < 800 && navbarActive===true ){
      setToggle(true);
    } else{
      setToggle(false);
    }
  }

  function toggleForTheBest(){
    setToggle(!toggle);
    setNavbarActive(!navbarActive);
  }

   useEffect(() => {
     ScrollTrigger.matchMedia({
       "(min-width:800px)" : function(){
         //  animation start //
         gsap.to(navBarAnimation.current, {
           xPercent: -100,
           duration: 2,
          //  borderTop: "2px solid white",
          //  borderBottom: "2px solid white",
           scrollTrigger: {
             trigger: navBarAnimation.current,
             toggleActions: "play reset complete reset",
           },
         });
         gsap.to(navBarAnimation.current, {
           duration: 1,
           delay: 2,

           borderTop: "none",
          
           //  borderBottom: "4px solid white",
           height:'95%',
           scrollTrigger: {
             trigger: navBarAnimation.current,
             toggleActions: "play pause complete reset",
           },
         });
        }
     })
    //  gsap.fromTo()
         
   }, []);

  useEffect(() => {
    function heightChanging() {
      setheightMainPort(window.innerHeight);
    }
    window.addEventListener("resize", heightChanging);
    heightChanging()
  }, [heightMainport])

  useEffect(() => {
    function widthChanging() {
      setWidthMainPort(window.innerWidth);
    }
    window.addEventListener("resize", widthChanging);
    widthChanging();
    
    Toggling()
  }, [widthMainport]);

  useEffect(() => {
    gsap.to(textHighlight.current, {
      // paused: true,
      scrollTrigger: {
        trigger: textHighlight.current,
        toggleClass: `${Styles.textHolder_highLight}`,
      },
    }); 
  }, []);

  useEffect(()=>{
     gsap.to(skills.current, {
       // paused: true,
       scrollTrigger: {
         trigger: skills.current,
         toggleClass: `${Styles.skillsWhenLoaded}`,
       },
     });
  },[])

  useEffect(()=>{
     gsap.fromTo(
       num1.current,
       { bottom: "13%",duration: 1 },
       {
         duration: 1,
         bottom: "70%",
         scrollTrigger: {
           trigger: num1.current,
           toggleActions: "play complete complete reset",
           //  toggleClass: `${Styles.paginationPageNumActive} `,
           toggleClass: `${Styles.paginationPageNumOneActive}`,
         },
       }
     );
  },[])

// console.log(widthMainport);
  // console.log(heightMainport);

  //for loop for tirangle section
  useEffect(()=>{
    function toTwenty(){

      let nums = [];
      if(widthMainport>900){
        for (let i = 0; i < 132; i++) {
          nums.push(i);
        }
      }else if(widthMainport>500){
        for (let i = 0; i < 60; i++) {
          nums.push(i);
        }
      }else if(widthMainport>200){
        for (let i = 0; i < 30; i++) {
          nums.push(i);
        }
      }
      setArrayTraingle(nums);
    //  console.log(nums);
    }
    
    toTwenty()
  },[widthMainport])

   useEffect(() => {
     const interval = setInterval(() => {
      let numArry=[];
      
      for(let i=0; i<3;i++){
        numArry.push(Math.floor(Math.random() * arrayTriangle.length))
      }
      
       setCount(numArry)
    
     }, 3000);
     return () => clearInterval(interval);
   }, [arrayTriangle]);
   
//  console.log(count)
  

    return (
      <div
        className={Styles.homepage_main_wrapper}
        data-testid="homepage_main_wrapper"
        style={{ height: heightMainport }}
        onClick={() => {
          return toggle ? setToggle(false) : null;
        }}
      >
        <div className={Styles.homepage_main} data-testid="homepage_main">
          <div
            className={Styles.homepage_navbarHolder}
            data-testid="homepage_navbarHolder" style={{'position':'fix'}}
          >
            <div className={Styles.homepage_navbarContainer}>
              <div
                className={Styles.iconWrapper}
                onClick={() => {
                  toggleForTheBest();
                }}
              >
                <FontAwesomeIcon icon={faBars} className={Styles.barsIcon} />
              </div>

              <div
                className={`${Styles.homepage_navbarMainWrapper} ${
                  toggle
                    ? Styles.homepage_navbarToggleShow
                    : Styles.homepage_navbarTogglehide
                }`}
              >
                <ul
                  className={`${Styles.homepage_navbarUl}`}
                  ref={navBarAnimation}
                >
                  <li className={Styles.homepage_navbarli}>
                    <Link
                      to="AboutMe"
                      spy={true}
                      smooth={true}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <p>About Me</p>
                      <div className={Styles.homepage_navbarhoverlight_wrapper}>
                        <div className={Styles.homepage_navbarhoverlight}></div>
                      </div>
                    </Link>
                  </li>

                  <li className={Styles.homepage_navbarli}>
                    <Link
                      to="LandingPage"
                      spy={true}
                      smooth={true}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <p>Project</p>
                      <div className={Styles.homepage_navbarhoverlight_wrapper}>
                        <div className={Styles.homepage_navbarhoverlight}></div>
                      </div>
                    </Link>
                  </li>

                  <li className={Styles.homepage_navbarli}>
                    <Link
                      to="LandingPage"
                      spy={true}
                      smooth={true}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <p>Get In touch</p>
                      <div className={Styles.homepage_navbarhoverlight_wrapper}>
                        <div className={Styles.homepage_navbarhoverlight}></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* content holder section */}
          <div
            className={Styles.homepage_contentHolder}
            data-testid="homepage_contentHolder"
          >
            <div
              className={Styles.homepage_triangleHolder}
              data-testid="homepage_triangleHolder"
            >
              <div className={Styles.homepage_triangle_wrapper}>
                {arrayTriangle.map((input, index) => {
                  return (
                    <>
                      {count.includes(index) ? (
                        <div
                          className={`${Styles.innerTriangle1} ${Styles.innertriangleanimation}`}
                        ></div>
                      ) : (
                        <div className={`${Styles.innerTriangle1}`}></div>
                      )}
                      <div
                        className={`${Styles.innerTriangle1} ${
                          count === index ? Styles.innertriangleanimation : null
                        }`}
                      ></div>
                    </>
                  );
                })}
              </div>

              <div
                className={Styles.homepage_textHolder}
                data-testid="homepage_textHolder"
              >
                <div className={Styles.textHolder_wrapper}>
                  <div className={Styles.textHolder_welcome}>
                    <p>Hi, I'm Tasniim Bari</p>
                  </div>

                  <div className={Styles.textHolder_paraContent}>
                    <p>
                      An enthusiastic London-based
                      <br />
                      <span
                        // className={Styles.textHolder_highLight}
                        ref={textHighlight}
                      >
                        Full-Stack Junior Software Engineer
                      </span>
                      <br />
                      who enjoyed discovering different aspect of tech sectors
                      from web development to cyber security with experience in
                      <span
                        // className={Styles.skillsWhenLoaded}
                        ref={skills}
                      >
                        React.js, CSS, Testing, SQL and No SQL
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of content holder section */}
            {/* start of pagination */}
            <div
              className={Styles.homepage_paginationHolder}
              data-testid="homepage_paginationHolder"
            >
              <div className={Styles.paginationWrapper}>
                <div className={Styles.paginationBar}></div>
                <div className={Styles.paginationPageNum} ref={num1}>
                  1
                </div>
                <div
                  className={Styles.paginationPageNum}
                >
                  2
                </div>
                <div
                  className={Styles.paginationPageNum}
                >
                  3
                </div>
                <div className={Styles.paginationPageNum}>4</div>
              </div>
            </div>

            {/* end of start of pagination */}
          </div>
        </div>
      </div>
    );
}

export default Homepage;