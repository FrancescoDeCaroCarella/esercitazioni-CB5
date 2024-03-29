import styles from "./styles.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../../utils/https.js";

const User = () => {
  let { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    GET("users", userId).then((data) => setUserData(data));
  }, [userId]);

  const prevHandler = () => navigate(`/users/${parseInt(userId) - 1}`);
  const nextHandler = () => navigate(`/users/${parseInt(userId) + 1}`);
  const contactPage = () => navigate(`/users/`);

  return (
    <div className={styles.User}>
      <div className={styles.card}>
        <img src={userData?.image} alt={userData?.username} />
        <div className={styles.info}>
          <h4 className={styles.name}>
            {userData?.firstName} {userData?.lastName}
          </h4>
          <h5>{userData?.birthDate}</h5>
          <h5>
            {userData?.address?.city}, {userData?.address?.state}{" "}
          </h5>
        </div>
      </div>
      <div className={styles.btns}>
        <button disabled={userId == 1 ? true : false} onClick={prevHandler}>
          Indietro
        </button>
        <button onClick={nextHandler}>Avanti</button>
      </div>
      <div>
        <button onClick={contactPage}>TORNA ALLA PAGINA CONTATTI</button>
      </div>
    </div>
  );
};

export default User;
