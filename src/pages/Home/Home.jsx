import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Intro from "./components/intro/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro id={"intro"} />
        <Catalog id={"games"} />
        <About id={"about"} />
      </main>
      <Footer />
    </>
  );
}
