import logoSvg from "../assets/logo2.svg";
import followSvg from "../assets/follow-logo.svg";
import cbsLogo from "../assets/cbs-logo.png";
import footerLogo from "../assets/footer-logo.svg";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1 className="title">
          <img className="head-logo" src={logoSvg} />
        </h1>
        <h2 className="sub-color-title">UNLOCK, UNITE, UNLEASH</h2>
        <h2 className="sub-title">WEB3 UNIVERSITY WORLD HACKATHON SERIES</h2>
        <div className="info-box">
          <span className="info">
            <span>100k Prize Pool</span>
          </span>
          <span className="info">
            <span>Feb 10th - Mar 14th 2024</span>
          </span>
          <span className="info">
            <span>Online</span>
          </span>
        </div>

        <a className="follow" href="https://twitter.com/U_HackWeb3">
          <div className="follow-log">
            <img src={followSvg} />
          </div>
          <div className="follow-text">Follow us on</div>
        </a>

        <div className="more-info">More info </div>
        <div className="coming-soon">Coming Soon...</div>
      </div>
      <footer className="footer">
        <div className="circle" />
        <div className="logo">
          <img className="cbs-logo" src={cbsLogo} />
          <img className="footer-logo" src={footerLogo} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
