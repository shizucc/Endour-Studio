import classes from "./intro.module.css";
export default function Intro({ ...props }) {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.coloumn}>
          <h1 className={classes.title}>What is Endour Studio?</h1>
          <p className={classes.desc}>
            "Endour Studio is an amateur game studio since 2021"
          </p>
          <button className={classes.button}>Let me know!</button>
        </div>
        <div className={classes.coloumn}>
          <img src="src/assets/Logo.png" alt="" />
        </div>
      </section>
    </>
  );
}
