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
    src: dwflabsfeher,
  },
  {
    name: "conflux",
    src: conflux,
  },
];

const grayLogoList = [
  {
    name: "oasis_feher",
    src: oasisfeher,
  },
  {
    name: "arab",
    src: arab,
  },
  {
    name: "swappi",
    src: swappi,
  },
  {
    name: "logotxt",
    src: logotxt,
  },
];

const bottomLogoList = [
  {
    name: "M-POST",
    src: MPOST,
  },
  {
    className: "CAMBRIDGE",
    name: "CAMBRIDGE",
    src: CAMBRIDGE,
  },
  {
    name: "BlockBooster",
    src: BlockBooster,
  },
  {
    name: "Blocktech",
    src: Blocktech,
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
                <img key={item.src} src={item.src} alt={item.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="section uniter">
        <div className="title">uniter</div>
          <div className="inner-box ">
            <div className="logos">
              {grayLogoList.map((item) => (
                <img key={item.src} src={item.src} alt={item.name} />
              ))}
              <div className="goledo">
                <img src={goledo} alt="goledo" />
                <span className="text">GOLEDO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="title-rect-line-white">
          <span className="text">Media partners & contributors</span>
        </div>

        <div className="bottom-logos">
          {bottomLogoList.map((item) => (
            <img  key={item.src} className={item.className} src={item.src} alt={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
