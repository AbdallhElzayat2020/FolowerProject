import { useState } from "react";
import LoginFormPopup from "./LoginFormPopup";
import RegisterPopup from "./RegisterPopup";
function RegisterPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showReg, setShowReg] = useState(false);
  const PopupLogin = () => {
    setShowLogin(!showLogin);
  };
  const PopupRegister = () => {
    setShowReg(!showReg);
  };
  const ShowReg = () => {
    setShowLogin(!showLogin);
    setShowReg(!showReg);
  };
  const ShowLog = () => {
    setShowReg(!showReg);
    setShowLogin(!showLogin);
  };
  return (
    <>
      <button className="button_land" onClick={PopupLogin}>
        TRY FOR FREE
      </button>
      {showLogin && <LoginFormPopup Open={PopupLogin} Close={ShowReg} />}
      {showReg && <RegisterPopup Open={PopupRegister} Close={ShowLog} />}
    </>
  );
}

export default RegisterPage;
