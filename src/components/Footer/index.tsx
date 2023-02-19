// Styles
import styles from "./styles.module.scss";

// Assets
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const usefullLinks = [
    {
      title: "Services",
      links: [
        {
          name: "Force de mon mot de passe",
          url: "https://www.security.org/how-secure-is-my-password/",
        },
        {
          name: "Have i been pwned?",
          url: "https://haveibeenpwned.com/",
        },
        {
          name: "Firefox Monitor",
          url: "https://monitor.firefox.com/",
        },
        {
          name: "Dehashed",
          url: "https://www.dehashed.com/",
        },
      ],
    },
    {
      title: "Articles",
      links: [
        {
          name: "Are Your Passwords in the Green?",
          url: "https://www.hivesystems.io/blog/are-your-passwords-in-the-green",
        },
        {
          name: "CNIL recommandations",
          url: "https://www.cnil.fr/fr/mots-de-passe-une-nouvelle-recommandation-pour-maitriser-sa-securite",
        },
        {
          name: "Gouvernement - Sécurisé mots de passe",
          url: "https://www.economie.gouv.fr/particuliers/creer-mot-passe-securise",
        },
        {
          name: "Gouvernement - Gestion mots de passe",
          url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/mots-de-passe",
        },
      ],
    },
    {
      title: "Réseaux",
      links: [
        {
          name: "Cyber Victimes Twitter",
          url: "https://twitter.com/cybervictimes",
        },
        {
          name: "Hive Systems Blog",
          url: "https://www.hivesystems.io/act",
        },
        {
          name: "Kaspersky Blog",
          url: "https://www.kaspersky.fr/blog/",
        },
      ],
    },
  ];

  return (
    <footer id="Lien-Utiles" className={styles.__footer}>
      <div className={styles.__brand}>
        <img className={styles.__logo} src={logo} alt="logo umbrella" />
        <span className={styles.__name}>Umbrella</span>
      </div>
      <div className={styles.__infos}>
        <div className={styles.__description}>
          <p>Site d'information & de prévention.</p>
          <p>
            La sécurité de vos informations personnelles en ligne est d'une
            importance cruciale, et la protection de vos comptes en ligne
            commence par un mot de passe solide. Il est donc essentiel d'adopter
            de bonnes pratiques de gestion de mots de passe pour minimiser les
            risques de piratage et de vol d'informations.
          </p>
        </div>
        <div className={styles.__links}>
          {usefullLinks.map((usefullLink, index) => (
            <div key={index} className={styles.__usefullLink}>
              <h3>{usefullLink.title}</h3>
              <ul>
                {usefullLink.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <p className={styles.__sentence}>
        La sécurité informatique commence par vous. Soyez vigilant et
        protégez-vous contre les menaces en ligne.
      </p>
      <hr />
      <p className={styles.__signature}>
        Site développer par{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Nekall"
        >
          @Nekall
        </a>{" "}
        &{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/stephanietako"
        >
          @stephanietako
        </a>{" "}
        avec <span>❤</span>
      </p>
    </footer>
  );
};

export default Footer;
