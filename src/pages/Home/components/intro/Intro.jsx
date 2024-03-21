import classes from "./intro.module.css";
import endourStudioLogoImg from "../../assets/logo_for_glow.png";

export default function Intro({ ...props }) {
  return (
    <>
      <section className={classes.container} {...props}>
        <div className={classes.mainContent}>
          <h1 className={classes.title}>What is Endour Studio?</h1>
          <p className={classes.desc}>
            &quot;Endour Studio is an amateur game studio since 2021&quot;
          </p>
          <a href="#games" className={classes.button}>
            Let me know!
          </a>
        </div>
        <div className={classes.imageContent}>
          <img src={endourStudioLogoImg} alt="studio-logo" />
        </div>
        <div></div>
      </section>
    </>
  );
}
