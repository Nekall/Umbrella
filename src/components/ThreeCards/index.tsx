// Styles
import styles from "./styles.module.scss";

interface ThreeCardsProps {
  cards: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[];
}

const ThreeCards = ({ cards }: ThreeCardsProps) => {
  return (
    <div className={styles.__three_cards}>
      {cards.map(({ id, icon, title, description }) => (
        <div className={styles.__card} key={`card-${id}`}>
          <p>{icon}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreeCards;
