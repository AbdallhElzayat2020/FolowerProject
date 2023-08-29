import land from "../../../public/images/land.png";
import refer from "../../../public/images/land_3.png";
import "./MainPage.css";
import img_2 from "../../../public/images/land_2.png";
import "./About.css";
import "../Timer/Timer.css";
import Timer from "../Timer/Timer";
import Timer2 from "../Timer/Timer2";
import Timer3 from "../Timer/Timer3";
import Timer4 from "../Timer/Timer4";
// import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TimelineFinal from "../Timeline/TimelineFinal";
import "../Pages/MainPage.css";
import RegisterPage from "../Login/TryFree";
AOS.refresh();
const MainPage = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <>
      <section className="home position-relative">
        <div className="container">
          <div className="row d-flex pt-5 align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <h2 className=" head ">ADD4LIKE</h2>
              <div className="box ">
                <div className="boxer d-flex gap-2">
                  <i className="fa-solid fa-bolt fs-2"></i>
                  <div className="text">
                    <h5 className="font-2 ">Free & paid services</h5>
                    <p>
                      Get hundreds of High Quality Social Media Services from
                      freer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="box ">
                <div className="boxer d-flex gap-2">
                  <i className="fa-solid fa-shield fs-4 "></i>
                  <div className="text">
                    <h5 className="font-2 ">Safe & Secure</h5>
                    <p>
                      Freer dashboard super friendly and you will get all the
                      info you need from your dashboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="box ">
                <div className="boxer d-flex gap-2">
                  <i className="fa-solid fa-basketball fs-4"></i>
                  <div className="text">
                    <h5 className="font-2 ">Free For All</h5>
                    <p>
                      Our social networking tools free for all. No matter from
                      which city/country you are. You can use our social
                      networking tools in free for lifetime.
                    </p>
                  </div>
                </div>
              </div>
              <RegisterPage />
            </div>
            <div className="col-lg-6 img-landing  d-flex pt-5 align-items-center justify-content-center">
              <img src={land} className="img_land" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="timer ">
        <div className="container ">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-3 ">
              <h5 className="text-center fw-bold">Other User</h5>
              <div className="box d-flex fs-4 align-items-center justify-content-center bg-light p-3 text-black gap-1">
                <Timer />
              </div>
              <i className="fa-solid fa-users fs-2 icon text-center "></i>
            </div>
            <div className="col-lg-3 ">
              <h5 className="text-center">start From </h5>
              <div className="box d-flex fs-4 align-items-center justify-content-center bg-light p-3 text-black gap-1">
                <Timer2 />
              </div>
              <i className="fa-solid fa-hourglass-start fs-2 icon text-center"></i>
            </div>
            <div className="col-lg-3 ">
              <h5 className="text-center">Tasks Available</h5>
              <div className="box d-flex fs-4 align-items-center justify-content-center bg-light p-3 text-black gap-1">
                <Timer3 />
              </div>
              <i className="fa-solid fa-list-check fs-2 icon text-center"></i>{" "}
            </div>
            <div className="col-lg-3 ">
              <h5 className="text-center">Amount spent</h5>
              <div className="box d-flex fs-4 align-items-center justify-content-center bg-light p-3 text-black gap-1">
                <Timer4 />
              </div>
              <i className="fa-solid fa-money-bill-trend-up fs-2 icon text-center"></i>
            </div>
          </div>
        </div>
      </section>
      <TimelineFinal />
      <div className="about mt-5" id="#about">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6">
              <h3>Get FREE Facebook Likes, Followers, Share</h3>
              <p className="my-5">
                Facebook is the fastest growing and most renowned social network
                of the world, therefore, its of vital importance to represent
                your business here. With the help of Addmefast, you can gain
                thousands of likes, followers and shares ABSOLUTELY FOR FREE.
                Here is the full list of Facebook features.
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
      </div>
      <div className="refer">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-7">
              <div className="image">
                <img className="img__2" src={refer} alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <h3>Refer & Earn </h3>
              <h5>Earn bonuses by referring others! </h5>
              <p className="mt-3">
                In our Referral section, you can monitor your referral's
                progress and potentially collect more than 250 credits in
                bonuses / per referral. For each person who registers and
                collects 500 points
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
