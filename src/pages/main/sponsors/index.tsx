import SectionHead from "../../../components/section-head";
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
import logo1 from "./assets3/1-gold-Logo.svg";
import logo2 from "./assets3/2-black_2.svg";
import logo3 from "./assets3/3-blockbeats_white.svg";
import logo4 from "./assets3/4-blocklike_white.svg";
import logo5 from "./assets3/5-cointeleggraph_white.svg";
import logo6 from "./assets3/6-marsbit_white.svg";
import logo7 from "./assets3/7-PANews_white.svg";
import logo8 from "./assets3/8-polkaworld.svg";
import logo9 from "./assets3/9-techflow_white.svg";
import logo10 from "./assets3/10-wjb.svg";
import logo11 from "./assets3/11-antalphalabs.svg";
import logo12 from "./assets3/12-blockchainacademy.svg";
import logo13 from "./assets3/13-buidlerdao.svg";
import logo14 from "./assets3/14-gwg.svg";
import logo15 from "./assets3/15-linkz dao_white.svg";
import logo16 from "./assets3/16-moledao_white.svg";
import logo17 from "./assets3/17-nextdao_white.svg";
import logo18 from "./assets3/18-oneblock+.svg";
import logo19 from "./assets3/19-rebase.svg";
import logo20 from "./assets3/20-tintin.svg";
import logo21 from "./assets3/21-wecdao_white.svg";
import logo22 from "./assets3/22-big-sea.svg";
import logo23 from "./assets3/23-logo.svg";
import logo24 from "./assets3/24-1783_dao_logo_white.svg";
import logo25 from "./assets3/25-Logo_white.svg";
import logo26 from "./assets3/26-web3logo_white.svg";
import logo27 from "./assets3/27-techub_logo_white.svg";
import logo28 from "./assets3/28-metaera_white.svg";
import logo29 from "./assets3/29-chain_catcher_white.svg";
import logo30 from "./assets3/30-ChainDD_logo_white.svg";
import logo31 from "./assets3/31-odaily.png";
import Cointelegraph from "./assets4/Cointelegraph.svg";
import IMOVenturesUnleasher from "./assets4/IMOVenturesUnleasher.png";
import TheGraphUniter from "./assets4/TheGraphUniter.png";
import GoogleCloudUniter from "./assets4/GoogleCloudUniter.png";
import CyberscopeUniter from "./assets4/CyberscopeUniter.png";
import ABCPoolUsher from "./assets4/ABCPoolUsher.png";
import HalbornUsher from "./assets4/HalbornUsher.png";
import HashkeyUsher from "./assets4/HashkeyUsher.png";
import ParticleNetworkUsher from "./assets4/ParticleNetworkUsher.png";

const redLogoList = [
  {
    name: "dwf_labs_feher",
    className: "dwf_labs_feher",
    src: dwflabsfeher,
    link: "https://www.dwf-labs.com/",
  },
  {
    name: "conflux",
    className: "conflux",
    src: conflux,
    link: "https://confluxnetwork.org/",
  },
  {
    name: "IMO",
    className: "IMO",
    src: IMOVenturesUnleasher,
    link: "https://imo.vc/",
  },
];

const grayLogoList = [
  {
    name: "oasis_feher",
    className: "oasis_feher",
    src: oasisfeher,
    link: "https://www.rakdao.com/",
  },
  {
    name: "arab",
    className: "arab",
    src: arab,
    link: "https://www.rak.ae/wps/portal",
  },
  {
    name: "swappi",
    className: "swappi",
    src: swappi,
    link: "https://swappi.io/",
  },
  {
    name: "logotxt",
    className: "logotxt",
    src: logotxt,
    link: "https://www.nucleon.space/",
  },
  {
    name: "goledo",
    className: "goledo",
    src: goledo,
    link: "https://www.goledo.cash/",
  },
  {
    name: "newtribe",
    className: "newtribe",
    src: newtribe,
    link: "https://www.newtribe.capital",
  },
  {
    name: "TheGraph",
    className: "TheGraph",
    src: TheGraphUniter,
    link: "https://thegraph.com/",
  },
  {
    name: "GoogleCloud",
    className: "GoogleCloud",
    src: GoogleCloudUniter,
    link: "https://cloud.google.com/",
  },
  {
    name: "Cyberscope",
    className: "Cyberscope",
    src: CyberscopeUniter,
    link: "https://www.cyberscope.io/",
  },
];

const greenLogoList = [
  {
    name: "ABCPoolUsher",
    className: "ABCPoolUsher",
    src: ABCPoolUsher,
    link: "https://confluxpos.cn/",
  },
  {
    name: "HalbornUsher",
    className: "HalbornUsher",
    src: HalbornUsher,
    link: "https://www.halborn.com/",
  },
  {
    name: "HashkeyUsher",
    className: "HashkeyUsher",
    src: HashkeyUsher,
    link: "https://www.hashkey.com/en-US/",
  },
  {
    name: "ParticleNetworkUsher",
    className: "ParticleNetworkUsher",
    src: ParticleNetworkUsher,
    link: "https://particle.network/",
  },
];

const bottomLogoList = [
  {
    name: "M-POST",
    className: "MPOST",
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
    className: "BlockBooster",
    src: BlockBooster,
    link: "https://blockbooster.io/",
  },
  {
    name: "Blocktech",
    className: "Blocktech",
    src: Blocktech,
    link: "https://twitter.com/BlockTechldn",
  },
  {
    name: "aspecta",
    className: "aspecta",
    src: aspecta,
    link: "https://aspecta.id/",
  },
  {
    name: "devfolio",
    className: "devfolio",
    src: devfolio,
    link: " https://devfolio.co/",
  },
  {
    name: "today",
    className: "today",
    src: today,
    link: "https://u.today/",
  },
  {
    name: "logo1",
    className: "logo1",
    src: logo1,
    link: "",
  },
  {
    name: "logo2",
    className: "logo2",
    src: logo2,
    link: "",
  },
  {
    name: "logo3",
    className: "logo3",
    src: logo3,
    link: "",
  },
  {
    name: "logo4",
    className: "logo4",
    src: logo4,
    link: "",
  },
  {
    name: "logo5",
    className: "logo5",
    src: logo5,
    link: "",
  },
  {
    name: "logo6",
    className: "logo6",
    src: logo6,
    link: "",
  },
  {
    name: "logo7",
    className: "logo7",
    src: logo7,
    link: "",
  },
  {
    name: "logo8",
    className: "logo8",
    src: logo8,
    link: "",
  },
  {
    name: "logo9",
    className: "logo9",
    src: logo9,
    link: "",
  },
  {
    name: "logo10",
    className: "logo10",
    src: logo10,
    link: "",
  },
  {
    name: "logo11",
    className: "logo11",
    src: logo11,
    link: "",
  },
  {
    name: "logo12",
    className: "logo12",
    src: logo12,
    link: "",
  },
  {
    name: "logo13",
    className: "logo13",
    src: logo13,
    link: "",
  },
  {
    name: "logo14",
    className: "logo14",
    src: logo14,
    link: "",
  },
  {
    name: "logo15",
    className: "logo15",
    src: logo15,
    link: "",
  },
  {
    name: "logo16",
    className: "logo16",
    src: logo16,
    link: "",
  },
  {
    name: "logo17",
    className: "logo17",
    src: logo17,
    link: "",
  },
  {
    name: "logo18",
    className: "logo18",
    src: logo18,
    link: "",
  },
  {
    name: "logo19",
    className: "logo19",
    src: logo19,
    link: "",
  },
  {
    name: "logo20",
    className: "logo20",
    src: logo20,
    link: "",
  },
  {
    name: "logo21",
    className: "logo21",
    src: logo21,
    link: "",
  },
  {
    name: "logo22",
    className: "logo22",
    src: logo22,
    link: "",
  },
  {
    name: "logo23",
    className: "logo23",
    src: logo23,
    link: "",
  },
  {
    name: "logo24",
    className: "logo24",
    src: logo24,
    link: "",
  },
  {
    name: "logo25",
    className: "logo25",
    src: logo25,
    link: "",
  },
  {
    name: "logo26",
    className: "logo26",
    src: logo26,
    link: "",
  },
  {
    name: "logo27",
    className: "logo27",
    src: logo27,
    link: "",
  },
  {
    name: "logo28",
    className: "logo28",
    src: logo28,
    link: "",
  },
  {
    name: "logo29",
    className: "logo29",
    src: logo29,
    link: "",
  },
  {
    name: "logo30",
    className: "logo30",
    src: logo30,
    link: "",
  },
  {
    name: "logo31",
    className: "logo31",
    src: logo31,
    link: "",
  },
  {
    name: "Cointelegraph",
    className: "Cointelegraph",
    src: Cointelegraph,
    link: "",
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
                <a key={item.src} href={item.link} target="_blank">
                  <img
                    className={item.className}
                    src={item.src}
                    alt={item.name}
                  />
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
                <a key={item.src} href={item.link} target="_blank">
                  <img
                    className={item.className}
                    src={item.src}
                    alt={item.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="section usher">
          <div className="title">Usher</div>
          <div className="inner-box ">
            <div className="logos">
              {greenLogoList.map((item) => (
                <a key={item.src} href={item.link} target="_blank">
                  <img
                    className={item.className}
                    src={item.src}
                    alt={item.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="title-rect-line-white">
          <span className="text">Media partners & contributors</span>
        </div>

        <div className="bottom-logos">
          {bottomLogoList.map((item) =>
            item.link ? (
              <a key={item.src} href={item.link} target="_blank">
                <img
                  className={item.className}
                  src={item.src}
                  alt={item.name}
                />
              </a>
            ) : (
              <img
                key={item.src}
                className={item.className}
                src={item.src}
                alt={item.name}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
