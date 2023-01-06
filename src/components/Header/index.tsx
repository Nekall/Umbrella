// Styles
import styles from "./styles.module.scss";

// Assets
import logo from "../../assets/images/logo.png";

interface HeaderProps {
    links: {
        id: number;
        name: string;
        url: string;
    }[];
}

const Header = ({ links }: HeaderProps) => {

    type Link = {
        id: number;
        name: string;
        url: string;
    }

  return (
    <header id="Accueil" className={styles.__header}>
      <div className={styles.__brand}>
        <img className={styles.__logo} src={logo} alt="logo umbrella" />
        <span className={styles.__name}>Umbrella</span>
      </div>
      <ul>
        {links.map(({ id, name, url }: Link) => {
          return (
            <li key={`link-${name}-${id}`}>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
