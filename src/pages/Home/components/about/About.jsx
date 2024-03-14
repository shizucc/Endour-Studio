import classes from "./about.module.css";
export default function About({ ...props }) {
  return <section {...props} className={classes.container}></section>;
}
