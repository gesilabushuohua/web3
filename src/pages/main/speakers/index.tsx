import SectionHead from "../section-head";
import bImg from "./assest/b.png";

const speakers = new Array(15).fill({ name: 'Jane Doe', src: bImg, desc: "lorem ipsum" },);

const Speakers = () => {
  return (
    <div className="speakers" id="speakers">
      <SectionHead title="SPEAKERS" theme="green" />
      <div className="content">
        {speakers.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Speakers;
