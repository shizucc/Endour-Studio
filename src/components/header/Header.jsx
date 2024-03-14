import classes from "./header.module.css";
import endourStudioImg from "../../assets/endour_studio_favicon.png";
import HamburgerIcon from "./HamburgerIcon";
import { useEffect, useState } from "react";

export default function Header() {
  const [hamburgerMenuDisplay, setShowHamburgerDisplay] = useState("none");
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  function handleShowHamburgerMenu() {
    setShowHamburgerDisplay((prev) => (prev === "none" ? "block" : "none"));
  }

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < 10 ||
          hamburgerMenuDisplay === "block"
      );
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hamburgerMenuDisplay, prevScrollPos]);

  return (
    <nav
      className={`${classes.navigationBar} ${
        visible ? classes.navigationBarVisible : classes.navigationBarHidden
      }`}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <section style={{ display: "flex", alignItems: "center" }}>
          <img src={endourStudioImg} alt="" />
          <div className={classes.navigationTitle}>
            <h1 style={{ fontWeight: 500 }}>ENDOUR</h1>
            <h1 style={{ fontWeight: 300 }}>STUDIO</h1>
          </div>
        </section>
        <ul className={classes.navigationMenu}>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#games">Games</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <HamburgerIcon
          isOpen={hamburgerMenuDisplay !== "none" ? true : false}
          className={classes.hamburgerIcon}
          onClick={handleShowHamburgerMenu}
        />
      </div>
      <div
        className={classes.hamburgerMenu}
        style={{ display: hamburgerMenuDisplay }}
      >
        <ul>
          <li>
            <a href="#intro" onClick={() => setShowHamburgerDisplay("none")}>
              Home
            </a>
          </li>
          <li>
            <a href="#games" onClick={() => setShowHamburgerDisplay("none")}>
              Games
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setShowHamburgerDisplay("none")}>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
