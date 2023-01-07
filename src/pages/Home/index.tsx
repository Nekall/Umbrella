// Components
import Hero from "../../components/Hero";
import Hacks from "../../components/Hacks";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThreeCards from "../../components/ThreeCards";
import PasswordManager from "../../components/PasswordManager";
import PasswordGenerator from "../../components/PasswordGenerator";

// Styles
import styles from "../../styles/pages/home.module.scss";

const Home = () => {
  // Data Header
  const links = [
    { id: 1, name: "Hacks", url: "#Hacks" },
    { id: 2, name: "Generateur", url: "#Generateur" },
    { id: 3, name: "Gestionnaire", url: "#Gestionnaire" },
    { id: 4, name: "Liens Utiles", url: "#Lien-Utiles" },
  ];

  return (
    <div className={styles.__home}>
      <Header links={links} />
      <Hero />
      <ThreeCards />
      <Hacks />
      <PasswordGenerator />
      <PasswordManager />
      <Footer />
    </div>
  );
};

export default Home;
