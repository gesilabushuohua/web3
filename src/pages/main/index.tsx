import { useEffect, useRef } from "react";
import { Link, Telegram, Twitter, navlist } from "./constant";
import logoSvg from "../../assets/home/logo2.svg";
import xSvg from "../../assets/index/x.svg";
import telegramSvg from "../../assets/index/telegram.svg";
import uLogoAnim from "../../assets/lottie/U_logo_anim.json";
import "./index.scss";
import Lottie from "lottie-web";
import OurMission from "./our-mission";
import University from "./university";
import Hackathon from "./hackathon";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import FAQ from "./faq";

let logoLttile = null;
const Index = () => {
  useEffect(() => {
    !logoLttile &&
      (logoLttile = Lottie.loadAnimation({
        container: document.getElementById("b-logo"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: uLogoAnim,
      }));
  }, []);

  const scrollToSection = (nav) => {
    const { id } = nav;
    const dom = document.getElementById(id);
    const top = dom?.offsetTop;
    window.scrollTo({ top: top - 80, behavior: "smooth" });
  };

  return (
    <div className="main">
      <div className="head">
        <div className="logo">
          <img className="head-logo" src={logoSvg} />
        </div>
        <ul className="navs">
          {navlist.map((nav) => (
            <li
              className="nav"
              key={nav.id}
              onClick={() => scrollToSection(nav)}
            >
              {nav.text}
            </li>
          ))}
        </ul>
        <div className="head-links">
          <a className="link" href={Twitter} target="_blank">
            <img src={xSvg} />
          </a>
          <a className="link" href={Telegram} target="_blank">
            <img src={telegramSvg} />
          </a>
        </div>
      </div>
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
            <a href={Link} target="_blank">
              <div className="link">
                <div className="text">APPLY NOW</div>
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
    </div>
  );
};

export default Index;
