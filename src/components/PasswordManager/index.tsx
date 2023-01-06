// Styles
import styles from "./styles.module.scss";

const PasswordManager = () => {
  return (
    <div id="Gestionnaire" className={styles.__password_manager}>
      <h2>Gestionnaire de mot de passe :</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        culpa libero, cumque unde fugiat obcaecati doloremque similique tenetur
        earum autem veniam voluptates consectetur cupiditate soluta.
      </p>
      <div>
        <table>
          <thead>
            <tr>
              <th>NOM</th>
              <th>PRIX</th>
              <th>FONCTIONNALITES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordManager;
