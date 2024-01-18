import SectionHead from "./section-head";
import "./index.scss";

const OurMission = () => {
  return (
    <div className="our-mission">
      <div className="line"></div>
      <SectionHead title="OUR MISSION" theme="green" />
      <div className="content">
        <div className="overview">
          unite the brightest minds of the next generation and equip them with
          the necessary knowledge to unlock blockchain’s full potential in
          tackling global challenges
        </div>
        <div className="list">
          <div className="item">
            <div className="title unite">Unite</div>
            <div className="desc">
              We challenge students from top universities worldwide to unlock
              blockchain’s potential in solving economic, social and
              environmental challenges of the next decade.
            </div>
          </div>
          <div className="item">
            <div className="title unlock">Unlock</div>
            <div className="desc">
              U-Hack is uniting the top thinkers and creators by starting a
              series of global Web3 university hackathons
            </div>
          </div>
          <div className="item">
            <div className="title unleash">Unleash</div>
            <div className="desc">
              We give them with the necessary tools to unleash these projects to
              the world and make impact on a global scale.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
