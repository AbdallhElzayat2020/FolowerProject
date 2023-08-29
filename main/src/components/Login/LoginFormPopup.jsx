import { Modal, Button } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import RemberPass from "./RemberPass";
function LoginFormPopup(props) {
  const { Open, Close } = props;
  const [showPass, setShowPass] = useState(false);
  const PopupPass = () => {
    setShowPass(!showPass);
  };
  return (
    <Modal
      className="login-popup"
      dialogClassName="blue-modal"
      // style={{ backgroundColor: "#707070", opacity: "0.8" }}
      show={true}
      onHide={Open}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center justify-content-center w-100 h-100 gap-2">
          <div className="d-flex flex-column align-items-center">
            <i className="fa-solid fa-user fs-1"></i>
            <p className="mt-2">Welcome back</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form">
          <div className=" input_user mb-3 ">
            <input
              placeholder="Username"
              type="text"
              className=" border-none"
              id="username"
            />
          </div>
          <div className="input_pass">
            <input
              type="password"
              placeholder="Password"
              className=""
              id="password"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className=" d-flex align-items-center justify-content-center w-100 h-100"
          variant="success"
        >
          Login
        </Button>
        <div className="login_or d-flex justify-content-center w-100">
          <span className="line">OR</span>
          <button onClick={PopupPass} className="forget btn">
            Forgot password?
          </button>
          {showPass && <RemberPass Open={PopupPass} Close={showPass} />}

          <span className="check checkbox">Remember me</span>
        </div>
        <div className="d-flex justify-content-center w-100">
          <p className="text-center">
            If You Don't Have Account
            <button className="btn" onClick={Close}>
              <span className="text-underline">Register</span>
            </button>
          </p>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginFormPopup;
