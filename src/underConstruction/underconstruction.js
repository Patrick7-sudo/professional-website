import Style from "./under.module.css"
import  {gsap} from "gsap";
import {useEffect, useRef,useState} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
function UnderConstruction(){
  let hello = useRef(null);
  const [widthwork, setWidthwork] = useState(window.innerHeight);
 
    useEffect(()=>{
        

        gsap.to(hello.current,{
          // paused: true,
          scrollTrigger: {
            trigger: hello.current,
            toggleClass: `${Style.text}`,
          },
        })
     
    },[]);

    useEffect(()=>{
      function allo(){
        setWidthwork(window.innerHeight);
      }

      window.addEventListener("resize", allo);

      allo()
    },[widthwork])
    console.log(`${Style.text}`)
    console.log(widthwork);
    return (
      <div style={{display:'block'}}>
        <div className={Style.pageContainer} style={{ height: widthwork }}>
          <div className={Style.paragraphWrapper}>
            <p ref={hello}>Page under Construction</p>
          </div>
        </div>
      </div>
    );
}

export default UnderConstruction;