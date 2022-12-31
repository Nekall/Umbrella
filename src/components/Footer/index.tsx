// Styles
import styles from "./styles.module.scss";

// Assets
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className={styles.__footer}>
      <div className={styles.__brand}>
        <img className={styles.__logo} src={logo} alt="logo umbrella" />
        <span className={styles.__name}>Umbrella</span>
      </div>
      <div className={styles.__infos}>
        <div className={styles.__description}>
          <p>Site d'information & de prévention.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt
            beatae sapiente repellendus id fugiat quidem perspiciatis,
            temporibus eaque. Optio ex alias eos beatae repellendus sequi,
            doloremque tenetur rem obcaecati.
          </p>
        </div>
        <div className={styles.__links}>
          <div>
            <p>UsefullLinks</p>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link1
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link2
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link3
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link4
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>UsefullLinks</p>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link1
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link2
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link3
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link4
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>UsefullLinks</p>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link1
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link2
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link3
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Link4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.__sentence}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatem
        possimus sequi repellat saepe aliquid quas abcaecati officia tempora.
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
