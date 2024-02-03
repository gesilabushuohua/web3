import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import SectionHead from "../../components/section-head";
import "./index.scss";
import { isMobile } from "../../constant";

const openWeeks = [
  {
    week: "Tue",
    date: "02/11",
    children: [
      {
        title:
          "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
        time: "01:00PM-05:00PM",
        desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
        person: ["Anton Buenvista", "Pendle"],
        link: "#",
      },
    ],
  },
  {
    week: "Tue",
    date: "02/12",
    children: [
      {
        title:
          "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
        time: "01:00PM-05:00PM",
        desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
        person: ["Anton Buenvista", "Pendle"],
        link: "#",
      },
    ],
  },
  {
    week: "Tue",
    date: "02/13",
    children: [
      {
        title:
          "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
        time: "01:00PM-05:00PM",
        desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
        person: ["Anton Buenvista", "Pendle"],
        link: "#",
      },
      {
        title:
          "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
        time: "01:00PM-05:00PM",
        desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
        person: ["Anton Buenvista", "Pendle"],
        link: "#",
      },
    ],
  },
];
const week2 = [
  {
    week: "Tue",
    date: "02/11",
    children: [
      {
        title:
          "How Pendle is bringing a $6T TradFi Fixed-income industry into DeFi",
        time: "01:00PM-05:00PM",
        desc: "Pendle is a yield-trading protocol on the blockchain, enabling you to earn a fixed yield or long DeFi yields. Learn how this financial primitive fits in the greater decentralized finance landscape",
        person: ["Anton Buenvista", "Pendle"],
        link: "#",
      },
    ],
  },
];

const Weeks = ({ data }) => {
  const isM = isMobile();
  return data.map((day) => (
    <div key={day.date} className="box">
      <div className="left">
        <div className="week">{day.week}</div>
        <div className="date">{day.date}</div>
      </div>
      <div className="right">
        {day.children.map((item, index: number) => {
          return (
            <div key={index} className="inner-box">
              <div className="title">
                <div className="text">{item.title}</div>
                {isM ? null : <div className="time">{item.time}</div>}
              </div>
              <div className="content">
                <div className="desc">{item.desc}</div>
                <div className="links">
                  {isM ? <div className="time">{item.time}</div> : null}
                  <div className="person">
                    {item.person.map((name: string) => {
                      return <div key={name} className="name">{name}</div>;
                    })}
                  </div>
                  <div className="info">
                    <div className="workshop">Technical workshop</div>
                    <div className="recording">Recording</div>
                  </div>
                  <a href={item.link}>
                    <div className="w-link">
                      <div className="text">WATCH</div>
                      <div className="bg"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ));
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
    children: <Weeks data={week2} />,
  },
  {
    key: "3",
    label: "WEEK 3",
    children: <Weeks data={week2} />,
  },
  {
    key: "4",
    label: "WEEK 4",
    children: <Weeks data={week2} />,
  },
  {
    key: "5",
    label: <div className="warp-item">CLOSING WEEK</div>,
    children: <Weeks data={week2} />,
  },
];

const Agenda = () => {
  return (
    <div className="agenda">
      <SectionHead title="AGENDA" theme="green" />
      <div className="list">
        <Collapse defaultActiveKey={["1"]} ghost items={items} />
      </div>
    </div>
  );
};

export default Agenda;
