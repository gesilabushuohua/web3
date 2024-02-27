import SectionHead from "../../../components/section-head";
import img1 from "./assest/person/1.png";
import img2 from "./assest/person/2.png";
import img3 from "./assest/person/3.png";
import img4 from "./assest/person/4.jpeg";
import img5 from "./assest/person/5.jpeg";
import img6 from "./assest/person/6.png";
import img7 from "./assest/person/7.png";
import img8 from "./assest/person/8.png";
import img9 from "./assest/person/9.png";
import img10 from "./assest/person/10.png";
import img11 from "./assest/person/11.png";
import img12 from "./assest/person/12.png";
import img13 from "./assest/person/13.png";
import img14 from "./assest/person/14.png";
import img15 from "./assest/person/15.png";
import img16 from "./assest/person/16.png";

import AniketRajDevFolio from "./assest/person2/AniketRajDevFolio.png";
import EthanFrancisParticleNetwork from "./assest/person2/EthanFrancisParticleNetwork.png";
import JasonTProtocol from "./assest/person2/JasonTProtocol.png";
import MattSwappi from "./assest/person2/MattSwappi.png";
import RobinsonBurkeyWormhole from "./assest/person2/RobinsonBurkeyWormhole.png";
import YoziTimeless from "./assest/person2/YoziTimeless.png";
import YuriiKyparusWallchain from "./assest/person2/YuriiKyparusWallchain.png";
import j1 from "./assest/person3/1.jpg";
import j2 from "./assest/person3/2.png";
import j3 from "./assest/person3/3.png";
import j4 from "./assest/person3/4.png";
import j5 from "./assest/person3/5.png";
import j6 from "./assest/person3/6.png";

const speakers = [
  { role: 'SPEAKER', name: "Chef Fran",  desc: "PancakeSwap",  src: img1, link: "https://twitter.com/ChefFranPS", },
  { role: 'SPEAKER', name: "BKT",  desc: "ACryptoS", src: img2, link: "https://twitter.com/CryptoBKT", },
  { role: 'SPEAKER', name: "Martin Carrica",  desc: "Mountain Protocol", src: img3, link: "https://twitter.com/mcarrica", },
  { role: 'SPEAKER', name: "Jean",  desc: "MUX Protocol", src: img4, link: "https://twitter.com/muxprotocol", },
  { role: 'SPEAKER', name: "Anton Buenavista",  desc: "Pendle", src: img5, link: "https://twitter.com/ayobuenavista", },
  { role: 'SPEAKER', name: "Darren Langley",  desc: "Rocket Pool", src: img6, link: "https://twitter.com/langerstwit", },
  { role: 'SPEAKER', name: "Aiham",  desc: "Silo Finance", src: img7, link: " https://twitter.com/aiham_eth", },
  { role: 'SPEAKER', name: "Soloman Kong",  desc: "Single Finance", src: img8, link: "https://twitter.com/solomankong", },
  { role: 'SPEAKER', name: "Felix Farris ",  desc: "Otex", src: img9, link: "https://twitter.com/FiliusJff", },
  { role: 'SPEAKER', name: "DeFi Yaco",  desc: "Lido Finance", src: img10, link: "https://twitter.com/defiyaco", },
  { role: 'SPEAKER', name: "Aniket Raj",  desc: "DevFolio", src: AniketRajDevFolio, link: "https://twitter.com/AniketRaj314", },
  { role: 'SPEAKER', name: "Ethan Francis",  desc: "Particle Network", src: EthanFrancisParticleNetwork, link: "https://twitter.com/TABASCOweb3", },
  { role: 'SPEAKER', name: "Jason",  desc: "TProtocol", src: JasonTProtocol, link: "https://twitter.com/0xKofe", },
  { role: 'SPEAKER', name: "Matt",  desc: "Swappi", src: MattSwappi, link: "https://twitter.com/3point0_0", },
  { role: 'SPEAKER', name: "Robinson Burkey",  desc: "Wormhole", src: RobinsonBurkeyWormhole, link: "https://twitter.com/RobinsonBurkey", },
  { role: 'SPEAKER', name: "Yozi",  desc: "Timeless", src: YoziTimeless, link: "https://twitter.com/yoziXYZ", },
  { role: 'SPEAKER', name: "Yurii Kyparus",  desc: "Wallchain", src: YuriiKyparusWallchain, link: "https://twitter.com/kyparus", },
  { role: 'SPEAKER', name: "Nandini Govindarajan",  desc: "Chainlink", src: img11, link: "https://twitter.com/NotaNumberG", },
  { role: 'SPEAKER', name: "Monica",  desc: "OKX", src: img12, link: "https://twitter.com/Monicaweb30", },
  { role: 'SPEAKER', name: "Sasha",  desc: "Waku", src: img13, link: "https://twitter.com/web_oko", },
  { role: 'SPEAKER', name: "Ande Zheng",  desc: "Pyth", src: img14, link: "https://twitter.com/ande_western", },
  { role: 'SPEAKER', name: "Irene Wu",  desc: "LayerZero", src: img15, link: "https://twitter.com/IreneWu27", },
  { role: 'SPEAKER', name: "Phoenix",  desc: "QuillAudits", src: img16, link: "https://twitter.com/phoenix244001", },
  { role: 'JUDGE', name: "Jane Yang",  desc: "Aspecta", src: j1, link: "https://twitter.com/janeyang0515", },
  { role: 'JUDGE', name: "Fiona Ma",  desc: "DWF Labs", src: j2, link: "https://twitter.com/fionaclairema", },
  { role: 'JUDGE', name: "JackRyan",  desc: "Conflux Network", src: j3, link: "https://twitter.com/jackryan_eth", },
  { role: 'JUDGE', name: "Gui Silva",  desc: "Capital Sagus", src: j4, link: "https://twitter.com/CapitalTagus", },
  { role: 'JUDGE', name: "Donnie Liu",  desc: "IMO Ventures", src: j5, link: "https://imo.vc/team-detail/hai", },
  { role: 'JUDGE', name: "Liz Harkavy",  desc: "a16z", src: j6, link: "https://twitter.com/liz_harkavy", },
];

const Speakers = () => {
  return (
    <div className="speakers" id="speakers">
      <SectionHead title="SPEAKERS" theme="green" />
      <div className="content">
        {speakers.map((item, index) => (
          <a key={index} href={item.link} target="_blank" className={item.role}>
            <div className="item" >
              <div className="img">
                <div className="mask"></div>
                <img src={item.src} />
              </div>
              <div className="bottom">
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
                <div className="role">{item.role}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
