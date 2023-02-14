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
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>Instantané</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>2 secondes</td>
    <td>7 secondes</td>
    <td>31 secondes</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Instantané</td>
    <td>Instantané</td>
    <td>2 minutes</td>
    <td>7 minutes</td>
    <td>39 minutes</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Instantané</td>
    <td>10 secondes</td>
    <td>1 heure</td>
    <td>7 heures</td>
    <td>2 jours</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Instantané</td>
    <td>4 minutes</td>
    <td>3 jours</td>
    <td>3 semaines</td>
    <td>5 mois</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Instantané</td>
    <td>2 heures</td>
    <td>5 mois</td>
    <td>3 années</td>
    <td>34 années</td>
  </tr>
  <tr>
    <td>12</td>
    <td>2 secondes</td>
    <td>2 jours</td>
    <td>24 années</td>
    <td>200 années</td>
    <td>3000 années</td>
  </tr>
  <tr>
    <td>13</td>
    <td>19 secondes</td>
    <td>2 mois</td>
    <td>1000 années</td>
    <td>12000 années</td>
    <td>202000 années</td>
  </tr>
  <tr>
    <td>14</td>
    <td>3 minutes</td>
    <td>4 années</td>
    <td>64000 années</td>
    <td>750000 années</td>
    <td>16m années</td>
  </tr>
  <tr>
    <td>15</td>
    <td>32 minutes</td>
    <td>100 années</td>
    <td>3m années</td>
    <td>173m années</td>
    <td>3md années</td>
  </tr>
  <tr>
    <td>16</td>
    <td>5 heures</td>
    <td>3000 heures</td>
    <td>173m années</td>
    <td>3md années</td>
    <td>92md années</td>
  </tr>
  <tr>
    <td>17</td>
    <td>2 jours</td>
    <td>69000 années</td>
    <td>9md années</td>
    <td>179md années</td>
    <td>7b années</td>
  </tr>
  <tr>
    <td>18</td>
    <td>3 semaines</td>
    <td>2m années</td>
    <td>467md années</td>
    <td>11b années</td>
    <td>438b années</td>
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
