// Assets
import umbrella from "../../assets/images/logo.png";

// Styles
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.__hero}>
      <div className={styles.__box_1}>
        <h1>
          Lorem <br />& Ipsum
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione
          sed facere aperiam accusantium iure repellat nihil voluptatem qui
          deleniti quibusdam dolorum, quam dolores corporis, aliquam ad
          perferendis totam dolore.
        </p>
      </div>
      <div className={styles.__box_2}>
        <img src={umbrella} alt="Logo Parapluie" />
      </div>
    </div>
  );
};

export default Hero;
