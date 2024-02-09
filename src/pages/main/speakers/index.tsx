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
import AniketRajDevFolio from "./assest/person2/AniketRajDevFolio.png";
import EthanFrancisParticleNetwork from "./assest/person2/EthanFrancisParticleNetwork.png";
import JasonTProtocol from "./assest/person2/JasonTProtocol.png";
import MattSwappi from "./assest/person2/MattSwappi.png";
import RobinsonBurkeyWormhole from "./assest/person2/RobinsonBurkeyWormhole.png";
import YoziTimeless from "./assest/person2/YoziTimeless.png";
import YuriiKyparusWallchain from "./assest/person2/YuriiKyparusWallchain.png";

const speakers = [
  { /* role: 'speaker', */ name: "Chef Fran",  desc: "PancakeSwap",  src: img1, link: "https://twitter.com/ChefFranPS", },
  { /* role: 'judge', */ name: "BKT",  desc: "ACryptoS", src: img2, link: "https://twitter.com/CryptoBKT", },
  { /* role: 'mentor',  */name: "Martin Carrica",  desc: "Mountain Protocol", src: img3, link: "https://twitter.com/mcarrica", },
  { name: "Jean",  desc: "MUX Protocol", src: img4, link: "https://twitter.com/muxprotocol", },
  { name: "Anton Buenavista",  desc: "Pendle", src: img5, link: "https://twitter.com/ayobuenavista", },
  { name: "Darren Langley",  desc: "Rocket Pool", src: img6, link: "https://twitter.com/langerstwit", },
  { name: "Aiham",  desc: "Silo Finance", src: img7, link: " https://twitter.com/aiham_eth", },
  { name: "Soloman Kong",  desc: "Single Finance", src: img8, link: "https://twitter.com/solomankong", },
  { name: "Felix Farris ",  desc: "Otex", src: img9, link: "https://twitter.com/FiliusJff", },
  { name: "DeFi Yaco",  desc: "Lido Finance", src: img10, link: "https://twitter.com/defiyaco", },
  { name: "Aniket Raj",  desc: "DevFolio", src: AniketRajDevFolio, link: "https://twitter.com/AniketRaj314", },
  { name: "Ethan Francis",  desc: "Particle Network", src: EthanFrancisParticleNetwork, link: "https://twitter.com/TABASCOweb3", },
  { name: "Jason",  desc: "TProtocol", src: JasonTProtocol, link: "https://twitter.com/0xKofe", },
  { name: "Matt",  desc: "Swappi", src: MattSwappi, link: "https://twitter.com/3point0_0", },
  { name: "Robinson Burkey",  desc: "Wormhole", src: RobinsonBurkeyWormhole, link: "https://twitter.com/RobinsonBurkey", },
  { name: "Yozi",  desc: "Timeless", src: YoziTimeless, link: "https://twitter.com/yoziXYZ", },
  { name: "Yurii Kyparus",  desc: "Wallchain", src: YuriiKyparusWallchain, link: "https://twitter.com/kyparus", },
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
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
