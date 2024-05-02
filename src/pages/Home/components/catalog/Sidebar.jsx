import styles from "./sidebar.module.css";
import studioLogoImg from "../../assets/logo.webp";
export default function SideBar() {
  return (
    <aside>
      <div className={styles.sidebarCard}>
        <img
          className={styles.sidebarLogo}
          src={studioLogoImg}
          alt={"Studio Logo"}
        />
        <div className={styles.sidebarText}>
          <h1>Did you know?</h1>
          <p>
            Endour Studio has released three games, and you can get them for{" "}
            <span>free!</span>
          </p>
        </div>
        <div className={styles.sidebarFooter}>
          <hr />
          <div className={styles.sidebarFooterText}>
            <h2>Endour Studio</h2>
            <p>Created by : Endour Team</p>
            <p>Since Aug. 2021</p>
            <p>
              Part of <a href="https://endour.rf.gd">Endour Company</a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
