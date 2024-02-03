import { Collapse, Space } from "antd";
import type { CollapseProps } from "antd";
import SectionHead from "../../components/section-head";
import "./index.scss";

const openWeeks = [
  {
    week: "Tue",
    date: "02/11",
    title:
      "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
    time: "01:00PM-05:00PM",
    desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
    person: ["Anton Buenvista", "Pendle"],
    link: "#",
  },
  {
    week: "Tue",
    date: "02/11",
    title:
      "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
    time: "01:00PM-05:00PM",
    desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
    person: ["Anton Buenvista", "Pendle"],
    link: "#",
  },
  {
    week: "Tue",
    date: "02/11",
    title:
      "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
    time: "01:00PM-05:00PM",
    desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
    person: ["Anton Buenvista", "Pendle"],
    link: "#",
  },
  {
    week: "Tue",
    date: "02/11",
    title:
      "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
    time: "01:00PM-05:00PM",
    desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
    person: ["Anton Buenvista", "Pendle"],
    link: "#",
  },
];

const Weeks = ({ data }) => {
  return (
    <div className="videos">
      {data.map((item, index: number) => {
        return (
          <div key={index} className="video">
            <div className="title">{item.title}</div>
            <a className="link" href={item.link}>
              <div className="play"></div>
            </a>
            <div className="info">
              <div className="person">
                {item.person.map((name: string) => {
                  return <span key={name} className="name">{name}</span>;
                })}
              </div>

              <div className="time">{item.date} Technical workshop</div>
            </div>
            <div className="desc">{item.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <div className="warp-item">OPENING WEEK</div>,
    children: <Weeks data={openWeeks} />,
  },
  {
    key: "2",
    label: "WEEK 2",
    children: <Weeks data={openWeeks} />,
  },
  {
    key: "3",
    label: "WEEK 3",
    children: <Weeks data={openWeeks} />,
  },
  {
    key: "4",
    label: "WEEK 4",
    children: <Weeks data={openWeeks} />,
  },
  {
    key: "5",
    label: <div className="warp-item">CLOSING WEEK</div>,
    children: <Weeks data={openWeeks} />,
  },
];

const Archive = () => {
  return (
    <div className="archive">
      <SectionHead title="ARCHIVE" theme="green" />
      <div className="list">
        <Collapse defaultActiveKey={["1"]} ghost items={items} />
      </div>
    </div>
  );
};

export default Archive;
