import Style from "./under.module.css"
import  {gsap} from "gsap";
import {useEffect, useRef} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
function UnderConstruction(){
  let hello = useRef(null);
 
    useEffect(()=>{
        

        gsap.to(hello.current, {
          // paused: true,
          scrollTrigger: {
            trigger: hello.current,
            toggleClass: `${Style.text}`,
            
          },
        });
    },[]);
    console.log(`${Style.text}`)
    return (
      <div className={Style.pageContainer}>
        <div className={Style.paragraphWrapper}>
          <p  ref={hello}>
            
            Page under Construction
          </p>
        </div>
      </div>
    );
}

export default UnderConstruction;