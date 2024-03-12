import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Intro from "./components/intro/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Catalog />
        <About />
      </main>
      <Footer />
    </>
  );
}
