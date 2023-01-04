// Styles
import styles from "./styles.module.scss";

const ThreeCards = () => {
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
