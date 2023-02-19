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
        Voici une liste de gestionnaires de mot de passe. Il est important de
        choisir un gestionnaire de mot de passe qui vous convient. Il est
        recommandé d'utiliser un gestionnaire de mot de passe pour générer des
        mots de passe forts et les stocker en ligne de manière sécurisée.
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
