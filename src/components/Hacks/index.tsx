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
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
            </tr>
            <tr>
              <td>5</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
            </tr>
            <tr>
              <td>6</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
            </tr>
            <tr>
              <td>7</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__red}>2 secondes</td>
              <td className={styles.__red}>7 secondes</td>
              <td className={styles.__red}>31 secondes</td>
            </tr>
            <tr>
              <td>8</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__red}>2 minutes</td>
              <td className={styles.__red}>7 minutes</td>
              <td className={styles.__red}>39 minutes</td>
            </tr>
            <tr>
              <td>9</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__red}>10 secondes</td>
              <td className={styles.__red}>1 heure</td>
              <td className={styles.__red}>7 heures</td>
              <td className={styles.__red}>2 jours</td>
            </tr>
            <tr>
              <td>10</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__red}>4 minutes</td>
              <td className={styles.__red}>3 jours</td>
              <td className={styles.__red}>3 semaines</td>
              <td className={styles.__red}>5 mois</td>
            </tr>
            <tr>
              <td>11</td>
              <td className={styles.__pink}>Instantané</td>
              <td className={styles.__red}>2 heures</td>
              <td className={styles.__red}>5 mois</td>
              <td className={styles.__orange}>3 années</td>
              <td className={styles.__orange}>34 années</td>
            </tr>
            <tr>
              <td>12</td>
              <td className={styles.__red}>2 secondes</td>
              <td className={styles.__red}>2 jours</td>
              <td className={styles.__orange}>24 années</td>
              <td className={styles.__orange}>200 années</td>
              <td className={styles.__orange}>3000 années</td>
            </tr>
            <tr>
              <td>13</td>
              <td className={styles.__red}>19 secondes</td>
              <td className={styles.__red}>2 mois</td>
              <td className={styles.__orange}>1000 années</td>
              <td className={styles.__orange}>12000 années</td>
              <td className={styles.__yellow}>202000 années</td>
            </tr>
            <tr>
              <td>14</td>
              <td className={styles.__red}>3 minutes</td>
              <td className={styles.__orange}>4 années</td>
              <td className={styles.__orange}>64000 années</td>
              <td className={styles.__yellow}>750000 années</td>
              <td className={styles.__yellow}>16m années</td>
            </tr>
            <tr>
              <td>15</td>
              <td className={styles.__red}>32 minutes</td>
              <td className={styles.__orange}>100 années</td>
              <td className={styles.__yellow}>3m années</td>
              <td className={styles.__yellow}>173m années</td>
              <td className={styles.__yellow}>3md années</td>
            </tr>
            <tr>
              <td>16</td>
              <td className={styles.__red}>5 heures</td>
              <td className={styles.__orange}>3000 heures</td>
              <td className={styles.__yellow}>173m années</td>
              <td className={styles.__yellow}>3md années</td>
              <td className={styles.__green}>92md années</td>
            </tr>
            <tr>
              <td>17</td>
              <td className={styles.__red}>2 jours</td>
              <td className={styles.__orange}>69000 années</td>
              <td className={styles.__yellow}>9md années</td>
              <td className={styles.__green}>179md années</td>
              <td className={styles.__green}>7b années</td>
            </tr>
            <tr>
              <td>18</td>
              <td className={styles.__red}>3 semaines</td>
              <td className={styles.__yellow}>2m années</td>
              <td className={styles.__green}>467md années</td>
              <td className={styles.__green}>11b années</td>
              <td className={styles.__green}>438b années</td>
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
