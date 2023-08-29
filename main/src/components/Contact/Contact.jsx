import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="head text-center text-black">
            <div className="box_head">
              <h2 className="fw-bold">Contact Us</h2>
              <p className="fs-5">
                Any Question or Suggestion? Just write us a message!
              </p>
            </div>
          </div>
          <div className="row contact_main d-flex align-items-center justify-content-center ">
            <div className="col-lg-4 left ">
              <div className="left-head my-5 text-white">
                <div className="main_head">
                  <h3 className=" fw-bold">Contact information</h3>
                  <h5>Say something to start a live chat!</h5>
                </div>
                <div className="left-body text-white">
                  <div className="box fs-5 mt-5">
                    <i className="fa-brands fa-whatsapp me-1 fs-4"></i> +20 109
                    508 3774
                  </div>
                  <div className="box fs-5 mt-4">
                    <i className="fa-solid fa-envelope me-2 fs-5"></i>
                    kreemkhaled112@gmail.com
                  </div>
                </div>
                <div className="icons mt-5 d-flex align-items-center just-content-center mx-auto ">
                  <a href="">
                    <i className="fa-brands fa-telegram text-white fs-3"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-facebook text-white fs-3"></i>
                  </a>
                  <a href="">
                    <i className="fa-solid fa-square-phone text-white fs-3"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-youtube text-white fs-3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right bg-white ">
              <form className="form d-flex flex ">
                <input className="input" type="text" placeholder="User Name" />
                <input className="input" type="email" placeholder="Email" />
              </form>
              <p className="mt-4 ms-3">Select Subject ?</p>
              <div className="check-box d-flex align-items-center just-content-center">
                <div className="check form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Problem
                  </label>
                </div>
                <div className="check form-check mt-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Suggestion
                  </label>
                </div>
                <div className="check form-check mt-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label className="form-check-label" for="flexRadioDefault3">
                    Other
                  </label>
                </div>
              </div>
              <textarea
                className="text"
                placeholder="Write your message..."
              ></textarea>
              <a className="bttn d-flex justify-content-center align-items-center">
                Send
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
