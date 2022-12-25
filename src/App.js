import DashLogo from "./assets/Full-logo.png";
import DispatchBicycle from "./assets/rider-mobile.png";
import FineYellowGirl from "./assets/fineyellowgirl1.png";
import FineYellowGirl2 from "./assets/yellowPS.png";
import BicycleIcon from "./assets/bicycleIcon.png";
import ShieldIcon from "./assets/shieldIcon.png";
import HeadPhoneIcon from "./assets/headphoneIcon.png";
import PriceIcon from "./assets/priceIcon.png";
import GuaranteeImage from "./assets/guaranteeImage1.png";
import InstagramIcon from "./assets/instagramIcon.png";
import TwitterIcon from "./assets/twitterIcon.png";
import BikeRider from "./assets/bikeRider1.png";
import WaitlistDropdown from "./components/WaitlistDropdown";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import IndividualWaitlist from "./pages/IndividualWaitlist";
import BusinessWaitlist from "./pages/BusinessWaitlist";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./pages/AboutUs";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    console.log("working from dropdown");
  };

  const [footerDropdown, setFooterDropdown] = useState(false);
  const toggleFooterDropdown = () => {
    setFooterDropdown((prevFooterDropdown) => !prevFooterDropdown);
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App bg-[url('./assets/background-img.png')] bg-auto  pt-[19px]">
              <div className="flex items-center pr-[20px] md:flex md:items-center justify-between md:pr-[30px]">
                <div className="rectangle bg-[#FFFFFF] md:w-1/6 flex justify-center items-center py-[7px] h-[48px] w-[120px] md:h-[75px] rounded-r-full md:max-w-[217px]">
                  <img className="w-[60%]" src={DashLogo} alt="logo" />
                </div>
                <div className="flex items-center gap-[46px]">
                <Link
                onClick={() => {
                  setShowDropdown(false)
                  setFooterDropdown(false)
                }}
                 className="font-[500] text-[18px] leading-[22.68px] text-[#ABD1C6]" to="/about_us">
                About Us</Link>
                <button
                  className="hidden md:block bg-[#F9BC60]  py-[15px] px-[22px] rounded-[10px] text-[20px] font-[500] hover:bg-[#ac8a58]"
                  onClick={toggleDropdown}
                >
                  <span className="mr-[16px] cursor-pointer">
                    Join the waitlist
                  </span>
                  {!showDropdown && (
                    <i class="fa fa-angle-down animate-fade"></i>
                  )}
                  {showDropdown && <i class="fa fa-angle-up animate-fade"></i>}
                </button>
                </div>
                
              </div>

              <div className="hero flex flex-col justify-between items-center md:grid md:grid-cols-[1.5fr_1fr] md:px-[49px] md:gap-[30px] relative mt-[50px]">
                <div className="hero-text text-center md:text-left">
                  <h1 className="text-white text-[40px] font-[700] leading-[42.2px] md:text-[60px] lg:text-[96px] md:leading-[60.2px] lg:leading-[101.28px]">
                    Make fast <br /> delivery with <br />{" "}
                    <span className="text-[#F9BC60]">Daash</span>
                  </h1>
                  <p className="text-[#ABD1C6] mt-[23px] text-[24px] font-[400] leading-[30.24px] md:text-[16px] md:mt-[18px] lg:text-[24px]">
                    Anything. Anywhere. Anytime.
                  </p>
                  <button
                    className="md:hidden mt-[36px] bg-[#F9BC60]  py-[15px] px-[22px] rounded-[10px] text-[20px] font-[500] hover:bg-[#ac8a58]"
                    onClick={toggleDropdown}
                  >
                    <span className="mr-[16px] cursor-pointer">
                      Join the waitlist
                    </span>
                    {!showDropdown && (
                      <i class="fa fa-angle-down animate-fade"></i>
                    )}
                    {showDropdown && (
                      <i class="fa fa-angle-up animate-fade"></i>
                    )}
                  </button>
                </div>

                {showDropdown && (
                  <WaitlistDropdown toggleDropdown={toggleDropdown} mdTop="md:top-[-50px]" mdRight="md:right-[26px]" />
                )}

                <div className="hero-img mt-[30px] w-full">
                  <img
                    data-aos="fade-down"
                    className="mx-auto md:mx-[0] md:hidden w-[55%]"
                    src={DispatchBicycle}
                    alt="dispatch-rider"
                  />
                  <img
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    className="hidden md:block w-[100%] lg:w-[70%]"
                    src={BikeRider}
                    alt="bikeRider"
                  />
                </div>
              </div>

              <div className="features bg-white pt-[40px] px-[15px] text-[#001E1D]">
                <div className="features-heading flex flex-col justify-center items-center">
                  <p className="font-[400] text-[20px] leading-[25.2px] md:text-[24px] md:leading-[30.24px]">
                    Join us and engage with our
                  </p>
                  <h2 className="font-[600] text-[32px] leading-[40.32px] mt-[7px] md:text-[50px] md:leading-[63px]">
                    Exciting Features
                  </h2>
                </div>

                <div className="features-image-and-text lg:grid lg:grid-cols-[1.5fr_1fr] lg:items-center]">
                  <div className="features-image">
                    <img
                      className=" hidden lg:block mx-auto mr-[-50px] lg:w-[300em] lg:mr-[-100px] lg:h-auto"
                      src={FineYellowGirl}
                      alt="a-girl"
                    />
                    <img
                      className="lg:hidden mt-[2px] mx-auto w-[70%]"
                      src={FineYellowGirl2}
                      alt="fineyellowgirl"
                    />
                  </div>

                  <div className="features-text mt-[50px] md:ml-[-80px]">
                    <div className="text-center md:text-left max-w-[325px] mx-auto lg:max-w-[100%]">
                      <h3 className="font-[600] text-[24px] leading-[30.24px]">
                        Tracking
                      </h3>
                      <p className="font-[400] text-[20px] leading-[25.2px] px-[4px] mt-[9px] lg:w-[520px] lg:text-[24px] lg:leading-[30.24px]">
                      We handle and track every delivery from individuals and businesses to their various destinations. No matter the size, we ensure that our customers can get the maximum customer satisfaction at a better, cheaper and cost effective price. We have factored in a way to ensure that customers goods are safe and don’t need to constantly call dispatch riders, they can simply track real time and view an estimated time of delivery to the drop-off location of choosing. Our customers convenience matters to us.
                      </p>
                    </div>
                    <div
                      className="text-center mt-[30px]
            md:text-left max-w-[325px] mx-auto lg:max-w-[100%]"
                    >
                      <h3 className="font-[600] text-[24px] leading-[30.24px]">
                      Our APIs
                      </h3>
                      <p className="font-[400] text-[20px] leading-[25.2px] px-[4px] mt-[9px] lg:w-[520px] lg:text-[24px] lg:leading-[30.24px]">
                      Our Integratable APIs allow already existing delivery apps and logistics businesses to integrate with our product and get more and better order fulfillment. This is to ensure there is visibility across board in terms of reconciliation at the end of day and give competitive pricing, hence, More orders and ROI.
                      </p>
                    </div>
                    <div className="text-center mt-[30px] md:text-left max-w-[325px] mx-auto lg:max-w-[100%]">
                      <h3 className="font-[600] text-[24px] leading-[30.24px]">
                      Security
                      </h3>
                      <p className="font-[400] text-[20px] leading-[25.2px] px-[4px] mt-[9px] lg:w-[520px] lg:text-[24px] lg:leading-[30.24px]">
                      With Daash, you can be rest assured that your goods and orders are secured and there is no need to panic about who is paying. You can simply choose if the sender is paying or the recipient is paying. Our product allows you to feel safe and secured not just in terms of goods sent but also in terms of payment and the satisfaction that all orders are delivered same day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service bg-white px-[21px] md:px-[50px]">
                <h2 className="font-[600] text-[32px] leading-[40.32px] pt-[75.05px] text-center md:text-[50px] md:leading-[63px]">
                  Seamless <br /> Delivery Service
                </h2>

                <div className="service-cards flex flex-col gap-[35px] mt-[30px] md:mt-[73px] lg:flex-row lg:justify-between">
                  <div
                    className="card flex flex-col items-center justify-center gap-[4px] rounded-[10px] bg-[#004643] h-[108px] text-[#FFFFFE] lg:w-[292px] lg:h-[138px]"
                    data-aos="fade-down"
                  >
                    <img src={BicycleIcon} alt="bicycle" />
                    <p className="font[400] text-[24px] leading-[30.24px]">
                      Fast Delivery
                    </p>
                  </div>
                  <div
                    className="card flex flex-col items-center justify-center gap-[4px] rounded-[10px] bg-[#F9BC60] h-[108px] lg:w-[292px] lg:h-[138px]"
                    data-aos="fade-down"
                  >
                    <img src={ShieldIcon} alt="shield" />
                    <p className="font[400] text-[24px] leading-[30.24px] text-[#001E1D]">
                      Reliable Service
                    </p>
                  </div>
                  <div
                    className="card flex flex-col items-center justify-center gap-[4px] rounded-[10px] bg-[#004643] h-[108px] text-[#FFFFFE] lg:w-[292px] lg:h-[138px]"
                    data-aos="fade-up"
                  >
                    <img src={HeadPhoneIcon} alt="headphone" />
                    <p className="font[400] text-[24px] leading-[30.24px]">
                      Great Support
                    </p>
                  </div>
                  <div
                    className="card flex flex-col items-center justify-center gap-[4px] rounded-[10px] bg-[#F9BC60] h-[108px] lg:w-[292px] lg:h-[138px]"
                    data-aos="fade-up"
                  >
                    <img src={PriceIcon} alt="price" />
                    <p className="font[400] text-[24px] leading-[30.24px] text-[#001E1D]">
                      Best Price
                    </p>
                  </div>
                </div>
              </div>

              <div className="guarantee bg-[#FFFFFE] pt-[94px] px-[20px] pb-[238px] flex flex-col-reverse gap-[31px] justify-center lg:items-center lg:space-x-[89px] text-center lg:flex-row lg:text-left">
                <div className="guarantee-image">
                  <img
                    className="mx-auto md:w-[70%] lg:w-[659px]"
                    src={GuaranteeImage}
                    alt="guarantee"
                  />
                </div>
                <div className="guarantee-text">
                  <h2 className="font-[600] text-[32px] leading-[40.32px] mt-[20px] text-center lg:text-left lg:text-[50px] lg:leading-[63px]">
                    Guaranteed <br /> Delivery Always
                  </h2>
                </div>
              </div>

              <div className="footer relative">
                <div className="footer-box w-[319px] h-[250px]   bg-[#ABD1C6] rounded-[10px] flex flex-col justify-center items-center py-[48px] px-[35px] text-center m-auto mt-[-29%]">
                  <h4 className="font-[600] text-[32px] text">
                    Built just for you. Join the team
                  </h4>
                  <button
                    className="mt-[36px] bg-[#F9BC60]  py-[15px] px-[22px] rounded-[10px] text-[20px] font-[500] hover:bg-[#ac8a58]"
                    onClick={toggleFooterDropdown}
                  >
                    <span className="mr-[16px] cursor-pointer">
                      Join the waitlist
                    </span>
                    {!footerDropdown && (
                      <i class="fa fa-angle-down animate-fade"></i>
                    )}
                    {footerDropdown && (
                      <i class="fa fa-angle-up animate-fade"></i>
                    )}
                  </button>
                  {footerDropdown && (
                    <div className="absolute top-[53%] left-[22.5%]">
                      <WaitlistDropdown toggleDropdown={toggleFooterDropdown} />
                    </div>
                  )}
                </div>

                <div className="footer-links flex pt-[53px] justify-center gap-[55px] pb-[65px]">
                  <div className="flex flex-col gap-[16px]">
                    <p className="font-[500] text-[16px] leading-[20.16px] text-[#FFFFFE]">
                      Company
                    </p>
                    <p className="font-[400] text-[16px] leading-[20.16px] text-[#ABD1C6]">
                      About us
                    </p>
                  </div>

                  <div className="flex flex-col gap-[16px]">
                    <p className="font-[500] text-[16px] leading-[20.16px] text-[#FFFFFE]">
                      Connect with us
                    </p>
                    <div className="flex gap-[10px]">
                      <img src={InstagramIcon} alt="instagramIcon" />
                      <img src={TwitterIcon} alt="twitterIcon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/individual_waitlist" element={<IndividualWaitlist setFooterDropdown={setFooterDropdown} setShowDropdown={setShowDropdown} />} />
        <Route path="/business_waitlist" element={<BusinessWaitlist  setFooterDropdown={setFooterDropdown} setShowDropdown={setShowDropdown}/>} />
        <Route 
        path="/about_us" 
        element={
        <AboutUs 
          showDropdown={showDropdown} 
          setShowDropdown={setShowDropdown}
          toggleDropdown={toggleDropdown}
          footerDropdown={footerDropdown}
          toggleFooterDropdown={toggleFooterDropdown}
        />} />
      </Routes>
    </Router>
  );
}

export default App;
