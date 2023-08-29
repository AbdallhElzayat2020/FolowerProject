import footer_img from "../../../public/images/footer.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer p-0 m-0">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="image_footer">
                <img src={footer_img} alt="" />
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>
                  <a href="" className=" fw-bold">
                    Useful links
                  </a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <ul>
                <li>
                  <a href="" className=" text-decoration-none fw-bold">
                    Need Help?
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-decoration-none ">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-decoration-none ">
                    Policy
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-decoration-none  ">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-decoration-none ">
                    Terms
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <ul className="list-unstyled">
                <li>
                  <a href="" className=" text-decoration-none fw-bold">
                    Need Help?
                  </a>
                </li>
                <li>
                  <a className=" text-decoration-none list-unstyled" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className=" text-decoration-none list-unstyled" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className=" text-decoration-none list-unstyled" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className=" text-decoration-none list-unstyled" href="#">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
