import SectionHead from "../section-head";
import "../index.scss";
import conflux from "./assets/conflux.svg";
import dwflabsfeher from "./assets/dwf_labs_feher.svg";
import oasisfeher from "./assets/oasis_feher.svg";
import arab from "./assets/arab.svg";
import swappi from "./assets/swappi.svg";
import logotxt from "./assets/logotxt.svg";
import goledo from "./assets/goledo-white.svg";
import MPOST from "./assets/M-POST.svg";
import CAMBRIDGE from "../university/assets/cbs_trans.svg";
import BlockBooster from "./assets/BlockBooster.svg";
import Blocktech from "../university/assets/Blocktech.svg";

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
              <div className="goledo">
                <a href="https://www.goledo.cash/" target="_blank">
                  <img src={goledo} alt="goledo" />
                  <span className="text">GOLEDO</span>
                </a>
              </div>
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
