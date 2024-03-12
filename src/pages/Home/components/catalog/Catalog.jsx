import Game from "./Game";
import classes from "./catalog.module.css";

export default function Catalog() {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Ini adalah Katalog</h1>
      <ul>
        <Game title={"Angry Birds"} />
        <Game title={"PVZ"} />
        <Game title={"Lykaia"} />
      </ul>
    </section>
  );
}
