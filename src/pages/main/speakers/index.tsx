import SectionHead from "../section-head";
import img1 from "./assest/person/1.png";
import img2 from "./assest/person/2.png";
import img3 from "./assest/person/3.png";
import img4 from "./assest/person/4.jpeg";
import img5 from "./assest/person/5.jpeg";
import img6 from "./assest/person/6.png";
import img7 from "./assest/person/7.png";
import img8 from "./assest/person/8.png";

const speakers = [
  { name: "Chef Fran",  desc: "PancakeSwap", src: img1, link: "https://twitter.com/ChefFranPS", },
  { name: "BKT",  desc: "ACryptoS", src: img2, link: "https://twitter.com/CryptoBKT", },
  { name: "Martin Carrica",  desc: "BKT", src: img3, link: "https://twitter.com/mcarrica", },
  { name: "Jean",  desc: "Jean", src: img4, link: "https://twitter.com/muxprotocol", },
  { name: "Anton Buenavista",  desc: "Anton Buenavista", src: img5, link: "https://twitter.com/ayobuenavista", },
  { name: "Darren Langley",  desc: "Darren Langley", src: img6, link: "https://twitter.com/langerstwit", },
  { name: "Aiham",  desc: "Silo Finance", src: img7, link: " https://twitter.com/aiham_eth", },
  { name: "Soloman Kong",  desc: "Single Finance", src: img8, link: "https://twitter.com/solomankong", },
];

const Speakers = () => {
  return (
    <div className="speakers" id="speakers">
      <SectionHead title="SPEAKERS" theme="green" />
      <div className="content">
        {speakers.map((item, index) => (
          <a href={item.link} target="_blank">
            <div className="item" key={index}>
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
