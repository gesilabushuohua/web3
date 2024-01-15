import "../index.scss";
import SectionHead from "../section-head";
import Blocktech from "./assets/Blocktech.svg";
import Bristol from "./assets/Bristol.svg";
import KingsCollege from "./assets/KingsCollege.svg";
import GeorgiaTech from "./assets/GeorgiaTech.svg";
import Imperial from "./assets/Imperial.svg";
import CollegeDAO from "./assets/CollegeDAO.svg";
import QM from "./assets/QM.svg";
import Leeds from "./assets/Leeds.svg";
import Oxford from "./assets/Oxford.svg";
import southampton from "./assets/southampton.svg";
import TAU from "./assets/TAU.svg";
import UCL from "./assets/UCL.svg";
import Bocconi from "./assets/Bocconi.svg";
import Penn from "./assets/Penn.svg";
import LBS from "./assets/LBS.svg";
import cbstrans from "./assets/cbs_trans.svg";
import conflux from "./assets/conflux.svg";
import { Email, LINK, Link } from "../constant";

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
      <SectionHead title="PARTICIPTING UNIVERSITIES" theme="white" />
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
          <a href="https://confluxnetwork.org/" target="_blank">
            <div className="item">
              <img className="cbstrans" src={cbstrans} />
              <div className="w-1 desc">
                A student-run society scaling the blockchain space at Cambridge
                & beyond
              </div>
            </div>
          </a>
          <a href="https://cambridgeblockchain.org" target="_blank">
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
              <img className="blocktech" src={Blocktech} />
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
