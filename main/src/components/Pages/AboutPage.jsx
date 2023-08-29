import img_2 from "../../../public/images/land_2.png";
import "./About.css";
const AboutPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6">
              <h3>Get FREE Facebook Likes Followers Share</h3>
              <p className="my-5">
                Facebook is the fastest growing and most renowned social network
                of the world therefore its of vital importance to represent your
                business here. With the help of Addmefast you can gain thousands
                of likes followers and shares ABSOLUTELY FOR FREE. Here is the
                full list of Facebook features.
              </p>
              <div className="icons">
                <div className="check   ">
                  <div className="icon">
                    <i className="fa-solid fa-circle-check me-2 fs-5"></i>
                    <span className="">Facebook Followers</span>
                  </div>
                  <div className="icon mt-5">
                    <i className="fa-solid fa-circle-check me-2 fs-5"></i>
                    <span className="">Facebook Likes</span>
                  </div>
                </div>
                <div className="check">
                  <div className="icon">
                    <i className="fa-solid fa-circle-check me-2 fs-5"></i>
                    <span className="">Facebook Comment</span>
                  </div>
                  <div className="icon mt-5">
                    <i className="fa-solid fa-circle-check me-2 fs-5"></i>
                    <span className="">Facebook Share</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image">
                <img src={img_2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
