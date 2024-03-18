import Game from "./Game";
import classes from "./catalog.module.css";
import { games } from "./list_games";

export default function Catalog() {
  return (
    <section className={classes.container}>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <Game title={game.title} cover={game.cover} desc={game.description} url={game.url} isLast={index+1 == games.length} />
          </li>
        ))}
      </ul>
    </section>
  );
}
