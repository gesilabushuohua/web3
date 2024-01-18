import SectionHead from "../section-head";
import "../index.scss";
import conflux from "./assets2/conflux.png";
import dwflabsfeher from "./assets2/dwf.png";
import oasisfeher from "./assets2/oasis.png";
import arab from "./assets2/gov_rak.png";
import swappi from "./assets2/swappi.png";
import logotxt from "./assets2/nucleon.png";
import goledo from "./assets2/goledo.png";
import MPOST from "./assets2/M-POST.png";
import CAMBRIDGE from "./assets2/cambridge.png";
import BlockBooster from "./assets2/blockbuster.png";
import Blocktech from "./assets2/blocktech.png";
import newtribe from "./assets2/WechatIMG580.png";
import aspecta from "./assets2/aspecta.svg";
import devfolio from "./assets2/devfolio.svg";
import today from "./assets2/utoday.svg";



const redLogoList = [
  {
    name: "dwf_labs_feher",
    className: 'dwf_labs_feher',
    src: dwflabsfeher,
    link: "https://www.dwf-labs.com/",
  },
  {
    name: "conflux",
    className: 'conflux',
    src: conflux,
    link: "https://confluxnetwork.org/",
  },
];

const grayLogoList = [
  {
    name: "oasis_feher",
    className: 'oasis_feher',
    src: oasisfeher,
    link: "https://www.rakdao.com/",
  },
  {
    name: "arab",
    className: 'arab',
    src: arab,
    link: "https://www.rak.ae/wps/portal",
  },
  {
    name: "swappi",
    className: 'swappi',
    src: swappi,
    link: "https://swappi.io/",
  },
  {
    name: "logotxt",
    className: 'logotxt',
    src: logotxt,
    link: "https://www.nucleon.space/",
  },
  {
    name: "goledo",
    className: 'goledo',
    src: goledo,
    link: "https://www.goledo.cash/",
  },
  {
    name: "newtribe",
    className: 'newtribe',
    src: newtribe,
    link: "https://www.newtribe.capital",
  },
];

const bottomLogoList = [
  {
    name: "M-POST",
    className: 'MPOST',
    src: MPOST,
    link: "https://mpost.io/ ",
  },
  {
    className: "CAMBRIDGE",
    name: "CAMBRIDGE",
    src: CAMBRIDGE,
    link: "https://cambridgeblockchain.org",
  },
  {
    name: "BlockBooster",
    className: 'BlockBooster',
    src: BlockBooster,
    link: "https://blockbooster.io/",
  },
  {
    name: "Blocktech",
    className: 'Blocktech',
    src: Blocktech,
    link: "https://twitter.com/BlockTechldn",
  },
  
  {
    name: "aspecta",
    className: 'aspecta',
    src: aspecta,
    link: "https://aspecta.id/",
  },
  {
    name: "devfolio",
    className: 'devfolio',
    src: devfolio,
    link: " https://devfolio.co/",
  },
  {
    name: "today",
    className: 'today',
    src: today,
    link: "https://u.today/",
  },
];

const Sponsors = () => {
  return (
    <div className="sponsors" id="spnosors">
      <SectionHead title="SPONSORS" theme="red" />
      <div className="content">
        <div className="section unleasher">
          <div className="title">unleasher</div>
          <div className="inner-box ">
            <div className="logos">
              {redLogoList.map((item) => (
                <a href={item.link} target="_blank">
                  <img className={item.className} key={item.src} src={item.src} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="section uniter">
          <div className="title">uniter</div>
          <div className="inner-box ">
            <div className="logos">
              {grayLogoList.map((item) => (
                <a href={item.link} target="_blank">
                  <img className={item.className} key={item.src} src={item.src} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="title-rect-line-white">
          <span className="text">Media partners & contributors</span>
        </div>

        <div className="bottom-logos">
          {bottomLogoList.map((item) => (
            <a href={item.link} target="_blank">
              <img
                key={item.src}
                className={item.className}
                src={item.src}
                alt={item.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
