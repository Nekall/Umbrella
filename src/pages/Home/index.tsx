// Components
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThreeCards from "../../components/ThreeCards";
import PasswordGenerator from "../../components/PasswordGenerator";

// Styles
import styles from "../../styles/pages/home.module.scss";

const Home = () => {
  // Data Header
  const links = [
    { id: 1, name: "Lorem ipsum", url: "#" },
    { id: 2, name: "Consectetur", url: "#" },
    { id: 3, name: "Adipiscing", url: "#" },
    { id: 4, name: "Eiusmod", url: "#" },
  ];

  return (
    <div className={styles.__home}>
      <Header links={links} />
      <Hero />
      <ThreeCards />
      <PasswordGenerator />
      <p className={styles.__fake_content}>Content</p>
      <Footer />
    </div>
  );
};

export default Home;
