import logoSvg from "../assets/logo.svg";
import followSvg from "../assets/follow-logo.svg";
import cbsLogo from "../assets/cbs-logo.png";
import footerLogo from "../assets/footer-logo.svg";
import "./MHome.scss";

const MHome = () => {
  return (
    <div className="m-home">
      <div className="content">
        <h1 className="title">
          <img className="logo" src={logoSvg} />
        </h1>
        <h2 className="sub-color-title">Unlock, Unite, Unleash</h2>
        <h2 className="sub-title">WEB3 UNIVERSITY WORLD HACKATHON SERIES</h2>
        <div className="info-box">
          <p className="info">
            <span>100k Prize Pool</span>
          </p>
          <p className="info">
            <span>Jan 27th - Febr 28th 2024</span>
          </p>
          <p className="info">
            <span>Online</span>
          </p>
        </div>
        <div className="follow">
          <div className="follow-log">
            <img src={followSvg} />
          </div>
          <div className="follow-text">Follow us on</div>
        </div>
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

export default MHome;
