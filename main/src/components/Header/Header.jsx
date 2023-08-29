import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import back from "../../../public/images/image 2.png";
import "./Header.css";
import LoginPage from "../Login/LoginPage";
// import Register from "../Login/Register";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container text-center">
          <Link className="navbar-brand" to="/">
            <img className="" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ms-lg-5">
                <a className="nav-link text-white" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item ms-lg-5">
                <a className="nav-link text-white" href="#About">
                  About Us
                </a>
              </li>
              <li className="nav-item ms-lg-5">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <button className="btn  btn-outline-light login">Login</button> */}
            <a className="">
              <LoginPage />
            </a>
            {/* <a href="">
              <Log />
            </a> */}
            {/* <a className="ms-3">
              <Register blur={blur} />
            </a> */}
          </div>
        </div>
        <img src={back} className="img_nav" alt="" />
      </nav>
    </>
  );
};

export default Header;
