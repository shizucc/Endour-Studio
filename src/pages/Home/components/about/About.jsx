import classes from "./about.module.css";
export default function About({ ...props }) {
  return (
    <section {...props} className={classes.container}>
      <div className={classes.socialMedia}>
        <h1>Find out more about us!</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/endour.std/"
              style={{ color: "#ED8975" }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/endour_studio"
              style={{ color: "#0084B4" }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://endourstudio.itch.io/"
              style={{ color: "#292929" }}
            >
              itch.io
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
