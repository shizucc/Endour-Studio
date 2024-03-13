import classes from "./header.module.css";
import endourStudioImg from "../assets/endour_studio_favicon.png";

export default function Header() {
  return (
    <nav className={classes.navigationBar}>
      <section style={{ display: "flex", alignItems: "center" }}>
        <img src={endourStudioImg} alt="" />
        <div className={classes.navigationTitle}>
          <h1 style={{ fontWeight: 500 }}>ENDOUR</h1>
          <h1 style={{ fontWeight: 300 }}>STUDIO</h1>
        </div>
      </section>
      <ul className={classes.navigationMenu}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Games</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
}
