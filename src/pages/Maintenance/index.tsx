// Styles
import styles from "../../styles/pages/maintenance.module.scss";

// Assets
import logo from "../../assets/images/logo.png";

const Maintenance = () => {
  return (
    <div className={styles.__maintenance}>
      <div>
        <img src={logo} alt="logo umbrella" />
        <h1>Umbrella</h1>
        <p>Site d'informations et de préventions sur l'utilisation de mot de passe.</p>
        <p>En cours de développement...</p>
      </div>
    </div>
  );
};

export default Maintenance;
