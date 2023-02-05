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

  // Data PasswordManager
  const pwdManagers = [
    {
      name: "LastPass",
      link: "https://www.lastpass.com",
      features:
        "Stockage en ligne sécurisé, remplissage automatique des mots de passe, chiffrement AES 256 bits, partage de mots de passe en toute sécurité.",
      platforms: "Windows, macOS, Linux, iOS, Android",
      price: "Gratuit / Payant",
    },
    {
      name: "1Password",
      link: "https://1password.com/fr/",
      features:
        "Stockage en ligne sécurisé, remplissage automatique des mots de passe, génération de mots de passe forts, chiffrement AES 256 bits.",
      platforms: "Windows, macOS, iOS, Android",
      price: "Payant",
    },
    {
      name: "Dashlane",
      link: "https://www.dashlane.com/fr",
      features:
        "	Stockage en ligne sécurisé, remplissage automatique des mots de passe, génération de mots de passe forts, chiffrement AES 256 bits.",
      platforms: "Windows, macOS, iOS, Android",
      price: "Gratuit / Payant",
    },
    {
      name: "Keepass",
      link: "https://keepass.info",
      features:
        "Stockage local sécurisé, chiffrement AES et Twofish, plugin pour différentes plateformes.",
      platforms: "Windows, macOS, Linux",
      price: "Gratuit",
    },
    {
      name: "Bitwarden",
      link: "https://bitwarden.com",
      features:
        "Stockage en ligne sécurisé, remplissage automatique des mots de passe, génération de mots de passe forts, chiffrement AES 256 bits.",
      platforms: "Windows, macOS, Linux, iOS, Android",
      price: "Gratuit / Payant",
    },
  ];

  // Data PasswordGenerator
  const pwdgTitle = "Generer des mots de passes efficaces & sécurisés.";
  const pwdgDescription = (
    <>
      <span>Logique :</span> Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </>
  );
  const pwdgButton = (
    <>
      Generer
      <br />
      des mots de passes
    </>
  );

  // Data ThreeCards
  const cards = [
    {
      id: 1,
      icon: "🔑",
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem amet ea recusandae architecto quas eos sapiente minus repudiandae ipsum accusantium earum ut, veritatis voluptates eveniet vitae. Sed neque, pariatur eveniet iure corporis ullam, enim aspernatur impedit ab officiis vitae qui at sapiente necessitatibus beatae, iste asperiores illum est minima.",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem amet ea recusandae architecto quas eos sapiente minus repudiandae ipsum accusantium earum ut, veritatis voluptates eveniet vitae. Sed neque, pariatur eveniet iure corporis ullam, enim aspernatur impedit ab officiis vitae qui at sapiente necessitatibus beatae, iste asperiores illum est minima.",
    },
    {
      id: 3,
      icon: "🔒",
      title: "Card 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem amet ea recusandae architecto quas eos sapiente minus repudiandae ipsum accusantium earum ut, veritatis voluptates eveniet vitae. Sed neque, pariatur eveniet iure corporis ullam, enim aspernatur impedit ab officiis vitae qui at sapiente necessitatibus beatae, iste asperiores illum est minima.",
    },
  ];

  // Data Hero
  const heroTitle = (
    <>
      Lorem <br />& Ipsum
    </>
  );
  const heroDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione sed facere aperiam accusantium iure repellat nihil voluptatem qui deleniti quibusdam dolorum, quam dolores corporis, aliquam ad perferendis totam dolore.";

  // Data Hacks
  const hTitle = "Hacks.";
  const hContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam voluptate consequatur culpa dolor aut? Deleniti officiis porro provident dolorum, corrupti harum voluptatem dolorem rem facere excepturi modi. Ex dolor, blanditiis quisquam vero omnis velit excepturi eos earum. Vel, doloribus culpa.";
  const hTitle2 =
    "Temps qu'il faut à un hacker pour bruteforce un mot de passe en 2022 :";
  const hContent2 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, perspiciatis a, placeat corporis, quaerat facilis fugit corrupti aspernatur nostrum non ratione. Quisquam, animi? Eaque mollitia quis sint suscipit saepe eum laudantium vel nostrum, ratione provident laborum vero repudiandae optio similique explicabo, laboriosam officiis molestiae unde tempora dignissimos. Necessitatibus sed dolor quam, id in aspernatur pariatur nobis? Beatae cupiditate, magnam, saepe maxime dignissimos atque maiores sed minima ratione dicta optio ad error, minus repellendus? Quae, iusto similique! Laboriosam similique deserunt eaque.";
  const hSubContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est similique porro necessitatibus nemo beatae doloribus.";

  return (
    <div className={styles.__home}>
      <Header links={links} />
      <div className={styles.__container}>
        <Hero heroTitle={heroTitle} heroDescription={heroDescription} />
        <ThreeCards cards={cards} />
        <Hacks
          hTitle={hTitle}
          hContent={hContent}
          hTitle2={hTitle2}
          hContent2={hContent2}
          hSubContent={hSubContent}
        />
        <PasswordGenerator
          pwdgTitle={pwdgTitle}
          pwdgDescription={pwdgDescription}
          pwdgButton={pwdgButton}
        />
        <PasswordManager pwdManagers={pwdManagers} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
