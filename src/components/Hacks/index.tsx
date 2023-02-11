// Styles
import styles from "./styles.module.scss";

interface HacksProps {
  hTitle: string;
  hContent: string;
  hTitle2: string;
  hContent2: string;
  hSubContent: string;
}

const Hacks = ({
  hTitle,
  hContent,
  hTitle2,
  hContent2,
  hSubContent,
}: HacksProps) => {
  return (
    <div id="Hacks" className={styles.__hacks}>
      <h2>{hTitle}</h2>
      <p>{hContent}</p>
      <br />
      <p>{hTitle2}</p>
      <div className={styles.__pwd_table}></div>
      <p>{hContent2}</p>
      <p>{hSubContent}</p>
    </div>
  );
};

export default Hacks;
