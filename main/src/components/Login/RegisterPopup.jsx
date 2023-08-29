import { Modal, Button } from "react-bootstrap";
import "./Login.css";
function RegisterPopup(props) {
  const { Open, Close } = props;
  return (
    <Modal
      className="login-popup "
      // className="bg-dark opacity-5"
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
            <p className="mt-2">New Account</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form">
          <div className=" input_user mb-3 ">
            <input
              placeholder="Username"
              type="text"
              className=" border-none mt-3"
              id="username"
            />
            <input
              placeholder="Email"
              type="text"
              className=" border-none mt-3"
              id="username"
            />
            <input
              placeholder="Password"
              type="text"
              className=" border-none mt-3"
              id="Password"
            />
          </div>
          <div className="input_pass">
            <input
              type="password"
              placeholder="confirm Password"
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
          onClick={Open}
        >
          Register
        </Button>
        <div className="d-flex justify-content-center w-100">
          <p className="text-center">
            If You Have Account
            <button className="btn" onClick={Close}>
              <span className="text-underline">Login</span>
            </button>
          </p>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterPopup;
