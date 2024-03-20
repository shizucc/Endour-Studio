import Game from "./Game";
import SideBar from "./Sidebar";
import classes from "./catalog.module.css";
import { games } from "./list_games";

export default function Catalog({ ...props }) {
  return (
    <section className={classes.container}>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <Game title={game.title} cover={game.cover} desc={game.description} url={game.url} isLast={index+1 == games.length} />
          </li>
        ))}
      </ul>
      <SideBar />
    </section>
  );
}
