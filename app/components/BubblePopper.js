'use client'
import { useState } from "react"
import classes from "./bubble-styles.module.css";
<new></new>
    
const BubblePopper = () => {
    const [filled, setFilled] = useState(false);
  
    const toggleFill = () => {
      setFilled(!filled);
    };
  
    return (
      <div
        className={`${classes.unpopped} ${filled ? classes.popped : ''}`}
        onClick={toggleFill}
      >POP!
      </div>
      
    );
};
export default BubblePopper