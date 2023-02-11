// assets
import up from "../../assets/images/icons/up.svg";

// styles
import styles from "./styles.module.scss";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={styles.__scroll_to_top_btn}
      onClick={() => scrollToTop()}
    >
      <img src={up} alt="chevron" />
      <img src={up} alt="chevron" />
    </button>
  );
};

export default ScrollToTop;
