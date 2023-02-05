// Styles
import styles from "./styles.module.scss";

interface PasswordManagerProps {
  pwdManagers: {
    name: string;
    link: string;
    features: string;
    platforms: string;
    price: string;
  }[];
}

const PasswordManager = ({ pwdManagers }: PasswordManagerProps) => {

  return (
    <div id="Gestionnaire" className={styles.__password_manager}>
      <h2>Gestionnaire de mot de passe.</h2>
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
              <th>FONCTIONNALITES</th>
              <th>PLATEFORMES</th>
              <th>PRIX</th>
            </tr>
          </thead>
          <tbody>
            {pwdManagers.map((pwdManager, index) => (
              <tr key={`pwdm-${index}`}>
                <td>
                  <a href={pwdManager.link} target="_blank" rel="noopener noreferrer">{pwdManager.name}</a>
                </td>
                <td>{pwdManager.features}</td>
                <td>{pwdManager.platforms}</td>
                <td>{pwdManager.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordManager;
