import xSvg from "../../assets/index/x.svg";
import telegramSvg from "../../assets/index/telegram.svg";
import USvg from "./assets/U.svg";
import hSvg from "./assets/h.svg";
import aSvg from "./assets/a.svg";
import cSvg from "./assets/c.svg";
import kSvg from "./assets/k.svg";
import { Email, Telegram, Twitter, Link } from "../../constant";
import "./index.scss";
import "./m-index.scss";

const Footer = () => {
  return (
    <>
      <div className="green-box">
        <div className="item">Connect</div>
        <div className="item">Organized by</div>
        <div className="item">get in touch</div>
      </div>
      <div className="footer">
        <div className="links">
          <a className="link" href={Twitter} target="_blank">
            <img src={xSvg} />
          </a>
          <a className="link" href={Telegram} target="_blank">
            <img src={telegramSvg} />
          </a>
        </div>
        <div className="u-hack">
          <img src={USvg} />
          <img className="h" src={hSvg} />
          <img className="a" src={aSvg} />
          <img className="c" src={cSvg} />
          <img className="k" src={kSvg} />
        </div>
        <div className="concat">
          <div className="e-mail">
            <a href={Email}>business@uhack.xyz</a>
          </div>
          <a href="https://u-hack.devfolio.co/overview" target="_blank">
            <div className="w-link">
              <div className="text">Submit Now</div>
              <div className="bg"></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
