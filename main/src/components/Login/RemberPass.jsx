import { Modal, Button } from "react-bootstrap";
import "./Login.css";
function RemberPass({ Open, Close }) {
  console.log({ Open, Close });
  return (
    <Modal
      className="login-popup"
      dialogClassName="blue-modal"
      show={true}
      onHide={Open}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center justify-content-center w-100 h-100 gap-2">
          <div className="d-flex flex-column align-items-center">
            <i className="fa-solid fa-user fs-1"></i>
            <p className="mt-2">Password Recovery</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form">
          <div className=" input_user mb-3 ">
            <input
              placeholder="New Password"
              type="password"
              className=" border-none"
              id="username"
            />
          </div>
          <div className="input_pass">
            <input
              type="password"
              placeholder="Confirm Password"
              className=""
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className=""
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className=""
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className=""
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className=""
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
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
          onClick={Close}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default RemberPass;
