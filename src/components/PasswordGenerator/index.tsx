import { ReactElement, useState } from "react";

// Styles
import styles from "./styles.module.scss";

interface PasswordGeneratorProps {
  pwdgTitle: string;
  pwdgDescription: ReactElement<any, any>;
  pwdgButton: ReactElement<any, any>;
}

const PasswordGenerator = ({
  pwdgTitle,
  pwdgDescription,
  pwdgButton,
}: PasswordGeneratorProps) => {
  const [password, setPassword] = useState<string>("Simple-Mémo");

  const [randomString, setRandomString] = useState({
    rdmstr1: Math.random().toString(36).substring(2, 15),
    rdmstr2: Math.random().toString(36).substring(2, 15),
    rdmstr3: Math.random().toString(36).substring(2, 15),
    rdmstr4: Math.random().toString(36).substring(2, 15),
    rdmstr5: Math.random().toString(36).substring(2, 15),
    rdmstr6: Math.random().toString(36).substring(2, 15),
    rdmstr7: Math.random().toString(36).substring(2, 15),
    rdmstr8: Math.random().toString(36).substring(2, 15),
  });

  const updateRandomString = () => {
    setRandomString({
      rdmstr1: Math.random().toString(36).substring(2, 15),
      rdmstr2: Math.random().toString(36).substring(2, 15),
      rdmstr3: Math.random().toString(36).substring(2, 15),
      rdmstr4: Math.random().toString(36).substring(2, 15),
      rdmstr5: Math.random().toString(36).substring(2, 15),
      rdmstr6: Math.random().toString(36).substring(2, 15),
      rdmstr7: Math.random().toString(36).substring(2, 15),
      rdmstr8: Math.random().toString(36).substring(2, 15),
    });
  };

  return (
    <div id="Generateur" className={styles.__password_generator}>
      <h2 className={styles.__title}>{pwdgTitle}</h2>
      <p className={styles.__description}>{pwdgDescription}</p>
      <div className={styles.__table}>
        <table>
          <tbody>
            <tr>
              <td>{randomString.rdmstr1}</td>
              <td className={styles.__middle_column}>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
              <td>{randomString.rdmstr2}</td>
            </tr>
            <tr>
              <td>{randomString.rdmstr3}</td>
              <td className={styles.__middle_column}>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
              <td>{randomString.rdmstr4}</td>
            </tr>
            <tr>
              <td>{randomString.rdmstr5}</td>
              <td className={styles.__middle_column}>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
              <td>{randomString.rdmstr6}</td>
            </tr>
            <tr>
              <td>{randomString.rdmstr7}</td>
              <td className={styles.__middle_column}>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
              <td>{randomString.rdmstr8}</td>
            </tr>
            <tr>
              <td className={styles.__last_row}></td>
              <td className={`${styles.__last_row} ${styles.__middle_column}`}>
                <button onClick={() => updateRandomString()}>
                  {pwdgButton}
                </button>
              </td>
              <td className={styles.__last_row}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordGenerator;
