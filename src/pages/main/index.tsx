import { useEffect } from "react";
import { Link, Telegram, Twitter, navlist } from "../../constant";
import logoSvg from "../../assets/home/logo2.svg";
import xSvg from "../../assets/index/x.svg";
import telegramSvg from "../../assets/index/telegram.svg";
import uLogoAnim from "../../assets/lottie/U_logo_anim.json";
import Lottie from "lottie-web";
import OurMission from "./our-mission";
import University from "./university";
import Hackathon from "./hackathon";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import FAQ from "./faq";
import "./index.scss";
import "./m-index.scss";

let logoLttile = null;
const Index = () => {
  useEffect(() => {
    if (logoLttile) {
      return;
    }
    logoLttile = Lottie.loadAnimation({
      container: document.getElementById("b-logo"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: uLogoAnim,
    });
    logoLttile.setSpeed(0.8);
  }, []);

  return (
    <>
      <div className="banner">
        <div className="content">
          <div className="bg">
            <div className="start"></div>
            <div className="start"></div>
            <div className="start"></div>
            <div className="start"></div>
            <div className="start"></div>
            <div className="start"></div>
            <div className="start"></div>
          </div>
          <div className="left">
            <div className="title">THE WEB3 UNIVERSITY HACKATHON SERIES</div>
            <a href="https://guide.devfolio.co/hackers/participate/project-submission" target="_blank">
              <div className="link">
                <div className="text">Guide to Submit</div>
                <div className="bg" />
              </div>
            </a>
            <div className="date">
              <div className="time">Feb 10 - Mar 14 2024</div>
              <div className="price">100k Prize Pool</div>
            </div>
          </div>
          <div className="right">
            <div className="sub-title">Unite. Unlock. Unleash.</div>
            <div id="b-logo" className="b-logo">
              <div className="symbol">!</div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <OurMission />
      <University />
      <Hackathon />
      <Speakers />
      <Sponsors />
      <FAQ />
    </>
  );
};

export default Index;
