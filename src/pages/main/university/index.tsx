import "../index.scss";
import SectionHead from "../../../components/section-head";
import Blocktech from "./assets2/Blocktech_212.png";
import Blocktech2 from "./assets2/blocktech.png";
import Bristol from "./assets2/Bristol_212.png";
import KingsCollege from "./assets2/Kings College_212.png";
import GeorgiaTech from "./assets2/Georgia Tech_212.png";
import Imperial from "./assets2/Imperial_212.png";
import CollegeDAO from "./assets2/College DAO_212.png";
import QM from "./assets2/QM_212.png";
import Leeds from "./assets2/Leeds_212.png";
import Oxford from "./assets2/Oxford_212.png";
import southampton from "./assets2/southampton_212.png";
import TAU from "./assets2/TAU_212.png";
import UCL from "./assets2/UCL_212.png";
import Bocconi from "./assets2/Bocconi_212.png";
import Penn from "./assets2/Penn_212.png";
import LBS from "./assets2/LBS_212.png";
import cbstrans from "./assets2/cambridge.png";
import conflux from "./assets2/conflux.png";
import { Email, Link } from "../../../constant";

const top3List = [
  {
    name: "Blocktech",
    src: Blocktech,
  },
  {
    name: "Bristol",
    src: Bristol,
  },
  {
    name: "KingsCollege",
    src: KingsCollege,
  },
];
const logoList = [
  {
    name: "Georgia Tech",
    src: GeorgiaTech,
  },
  {
    name: "Imperial",
    src: Imperial,
  },
  {
    name: "College DAO",
    src: CollegeDAO,
  },
  {
    name: "QM",
    src: QM,
  },
  {
    name: "Leeds",
    src: Leeds,
  },
  {
    name: "Oxford",
    src: Oxford,
  },
  {
    name: "southampton",
    src: southampton,
  },
  {
    name: "TAU",
    src: TAU,
  },
  {
    name: "UCL",
    src: UCL,
  },
  {
    name: "Bocconi",
    src: Bocconi,
  },
  {
    name: "Penn",
    src: Penn,
  },
  {
    name: "LBS",
    src: LBS,
  },
];

const University = () => {
  return (
    <div className="university">
      <SectionHead title="Participating Universities" theme="white" />
      <div className="content">
        <div className="top-3">
          {top3List.map((item) => (
            <img key={item.src} src={item.src} alt={item.name} />
          ))}
        </div>
        <div className="logo-list">
          {logoList.map((item) => (
            <img key={item.src} src={item.src} alt={item.name} />
          ))}
        </div>

        <a href={Email}>
          <div className="w-g-link">
            <div className="text">Add my university</div>
            <div className="bg" />
          </div>
        </a>

        <div className="hosts">
          <a className="hosts-text" href={Link} target="_blank">
            HOSTS
          </a>
        </div>

        <div className="hosts-logo">
          <a href="https://cambridgeblockchain.org" target="_blank">
            <div className="item">
              <img className="cbstrans" src={cbstrans} />
              <div className="w-1 desc">
                A student-run society scaling the blockchain space at Cambridge
                & beyond
              </div>
            </div>
          </a>
          <a href="https://confluxnetwork.org/" target="_blank">
            <div className="item">
              <img className="codnflux" src={conflux} />
              <div className="w-2 desc">
                High TPS, low blocktime & low gas fee, EVM compatible L1 chain
                with a hybrid PoW & PoS consensus mechanism
              </div>
            </div>
          </a>

          <a href="https://twitter.com/BlockTechldn" target="_blank">
            <div className="item">
              <img className="blocktech" src={Blocktech2} />
              <div className="w-3 desc">
                BlockTech London is a university-run blockchain hub, fostering
                adoption through education and devlopment
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default University;
