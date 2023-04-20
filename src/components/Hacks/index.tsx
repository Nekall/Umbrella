// Styles
import styles from "./styles.module.scss";

interface HacksProps {
  hTitle: string;
  hContent: string;
  hTitle2: string;
  hContent2: any;
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
      <div className={styles.__pwd_table}>
        <table>
          <thead>
            <tr>
              <th>Nombre de caractères</th>
              <th>Nombres</th>
              <th>Lettres minuscules</th>
              <th>Lettres minuscules & majuscules</th>
              <th>Lettres minuscules, majuscules & nombres</th>
              <th>Lettres minuscules, majuscules, nombres & symboles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
            </tr>
            <tr>
              <td>5</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
            </tr>
            <tr>
              <td>6</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
            </tr>
            <tr>
              <td>7</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__red}>2 sec</td>
              <td className={styles.__red}>7 sec</td>
              <td className={styles.__red}>31 sec</td>
            </tr>
            <tr>
              <td>8</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__red}>2 min</td>
              <td className={styles.__red}>7 min</td>
              <td className={styles.__red}>39 min</td>
            </tr>
            <tr>
              <td>9</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__red}>10 sec</td>
              <td className={styles.__red}>1 h</td>
              <td className={styles.__red}>7 h</td>
              <td className={styles.__red}>2 j</td>
            </tr>
            <tr>
              <td>10</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__red}>4 min</td>
              <td className={styles.__red}>3 j</td>
              <td className={styles.__red}>3 sem</td>
              <td className={styles.__red}>5 mois</td>
            </tr>
            <tr>
              <td>11</td>
              <td className={styles.__pink}>Instant</td>
              <td className={styles.__red}>2 h</td>
              <td className={styles.__red}>5 mois</td>
              <td className={styles.__orange}>3 an</td>
              <td className={styles.__orange}>34 an</td>
            </tr>
            <tr>
              <td>12</td>
              <td className={styles.__red}>2 sec</td>
              <td className={styles.__red}>2 j</td>
              <td className={styles.__orange}>24 an</td>
              <td className={styles.__orange}>200 an</td>
              <td className={styles.__orange}>3000 an</td>
            </tr>
            <tr>
              <td>13</td>
              <td className={styles.__red}>19 sec</td>
              <td className={styles.__red}>2 mois</td>
              <td className={styles.__orange}>1000 an</td>
              <td className={styles.__orange}>12000 an</td>
              <td className={styles.__yellow}>202000 an</td>
            </tr>
            <tr>
              <td>14</td>
              <td className={styles.__red}>3 min</td>
              <td className={styles.__orange}>4 an</td>
              <td className={styles.__orange}>64000 an</td>
              <td className={styles.__yellow}>750000 an</td>
              <td className={styles.__yellow}>16m an</td>
            </tr>
            <tr>
              <td>15</td>
              <td className={styles.__red}>32 min</td>
              <td className={styles.__orange}>100 an</td>
              <td className={styles.__yellow}>3m an</td>
              <td className={styles.__yellow}>173m an</td>
              <td className={styles.__yellow}>3md an</td>
            </tr>
            <tr>
              <td>16</td>
              <td className={styles.__red}>5 h</td>
              <td className={styles.__orange}>3000 h</td>
              <td className={styles.__yellow}>173m an</td>
              <td className={styles.__yellow}>3md an</td>
              <td className={styles.__green}>92md an</td>
            </tr>
            <tr>
              <td>17</td>
              <td className={styles.__red}>2 j</td>
              <td className={styles.__orange}>69000 an</td>
              <td className={styles.__yellow}>9md an</td>
              <td className={styles.__green}>179md an</td>
              <td className={styles.__green}>7b an</td>
            </tr>
            <tr>
              <td>18</td>
              <td className={styles.__red}>3 sem</td>
              <td className={styles.__yellow}>2m an</td>
              <td className={styles.__green}>467md an</td>
              <td className={styles.__green}>11b an</td>
              <td className={styles.__green}>438b an</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>{hContent2}</p>
      <p>{hSubContent}</p>
    </div>
  );
};

export default Hacks;
