import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import UpdateProfil from "../components/Profil/UpdateProfil";
import { isEmpty } from "../components/Utils";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        isEmpty(uid) && (
          <div className="log-container">
            <Log signUp={true} signIn={false} />
            <div className="img-container">
              <img src="./img/log.svg" alt="" />
            </div>
          </div>
        )
      )}
      ;
    </div>
  );
};

export default Profil;
