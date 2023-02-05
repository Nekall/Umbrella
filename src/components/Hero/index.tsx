import { ReactElement } from "react";

// Assets
import umbrella from "../../assets/images/logo.png";

// Styles
import styles from "./styles.module.scss";

interface HeroProps {
  heroTitle: ReactElement<any, any>;
  heroDescription: string;
}

const Hero = ({ heroTitle, heroDescription }: HeroProps) => {
  return (
    <div className={styles.__hero}>
      <div className={styles.__box_1}>
        <h1>
          {heroTitle}
        </h1>
        <p>
          {heroDescription}
        </p>
      </div>
      <div className={styles.__box_2}>
        <img src={umbrella} alt="Logo Parapluie" />
      </div>
    </div>
  );
};

export default Hero;
