import { useEffect, useRef, useState } from "react";
import classes from "./hamburger_icon.module.css";

export default function HamburgerIcon({ isOpen, ...props }) {
  const [firstLoad, setFirstLoad] = useState(true);
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();

  useEffect(() => {
    if (!firstLoad) {
      bar1.current.classList.toggle(classes.changeBar1);
      bar2.current.classList.toggle(classes.changeBar2);
      bar3.current.classList.toggle(classes.changeBar3);
    }
  }, [isOpen]);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  return (
    <>
      <div className={classes.container} {...props}>
        <div ref={bar1} className={classes.bar1}></div>
        <div ref={bar2} className={classes.bar2}></div>
        <div ref={bar3} className={classes.bar3}></div>
      </div>
    </>
  );
}
