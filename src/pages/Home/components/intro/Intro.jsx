import classes from "./intro.module.css";
export default function Intro() {
  return (
    <>
      <section className={classes.container}>
        <h1 className={classes.title}>Ini adalah Intro</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos iste
          officiis, expedita possimus perferendis quod a culpa odio omnis amet,
          nisi veniam nihil unde saepe quae iure reiciendis rem!
        </p>
      </section>
    </>
  );
}
