import Header from "./components/Header";
import Choose from "./components/Choose";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TopAlert from "./components/TopAlert";

function Home() {
  return (
    <>
      <TopAlert />
      <Nav />
      <Header />
      <Choose />
      <Categories />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
