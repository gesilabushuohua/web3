import { Collapse } from "antd";
import SectionHead from "../../components/section-head";
import "./index.scss";
import { isMobile } from "../../constant";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const LinkMap = {
  "WATCH": 'watchLink',
  "BOOK A SLOT": "bookLink",
  "JOIN": "joinLink",
}

const WeekIndex = {
  "OPENING WEEK": 0,
  "WEEK 2": 1,
  "WEEK 3": 2,
  "WEEK 4": 3,
  "CLOSING WEEK": 4,
};
const WeekNum = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatData = (data: Array<any>) => {
  const tempWeeks = [
    {
      key: "1",
      label: "OPENING WEEK",
      children: [],
    },
    {
      key: "2",
      label: "WEEK 2",
      children: [],
    },
    {
      key: "3",
      label: "WEEK 3",
      children: [],
    },
    {
      key: "4",
      label: "WEEK 4",
      children: [],
    },
    {
      key: "5",
      label: "CLOSING WEEK",
      children: [],
    },
  ];

  const WeekDayMap = {
    "OPENING WEEK": {},
    "WEEK 2": {},
    "WEEK 3": {},
    "WEEK 4": {},
    "CLOSING WEEK": {},
  };

  data.forEach((day) => {
    const { week, dateUTC } = day;
    if (WeekDayMap[week][dateUTC]) {
      WeekDayMap[week][dateUTC].push(day);
    } else {
      WeekDayMap[week][dateUTC] = [day];
    }
  });

  Object.keys(WeekDayMap).forEach((week) => {
    const index = WeekIndex[week];
    const weekVal = WeekDayMap[week] || {};
    const children = Object.keys(weekVal).map((day) => {
      const num = dayjs(day).day();
      const date = dayjs(day).format("MM/DD");
      const dayVal = weekVal[day];
      return {
        week: WeekNum[num],
        date: date,
        children: dayVal,
      };
    });
    tempWeeks[index].children = children;
  });
  return tempWeeks;
};

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
          const { dateUTC, startTimeUTC, endTimeUTC, button } = item;
          const start = dayjs(`${dateUTC} ${startTimeUTC}:00`).format("h:mm A");
          const end = dayjs(`${dateUTC} ${endTimeUTC}:00`).format("h:mm A");
          const time = `${start} - ${end}`;
          const link = LinkMap[button];
          return (
            <div key={index} className="inner-box">
              <div className="title">
                <div className="text">{item.title}</div>
                {isM ? null : <div className="time">{time}</div>}
              </div>
              <div className="content">
                <div className="desc">{item.description}</div>
                <div className="links">
                  {isM ? <div className="time">{time}</div> : null}
                  <div className="person">
                    <div className="name">{item.name}</div>
                    <div className="name">{item.company}</div>
                  </div>
                  <div className="info">
                    <div className="workshop">{item.type}</div>
                    <div className="recording">{item.format}</div>
                  </div>
                  <a href={link}>
                    <div className="w-link">
                      <div className="text">{item.button}</div>
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

const Agenda = () => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "X-Master-Key",
      "$2a$10$Ey186RusT.vPCGO0g9Az0.kpfWLuJPEiu6NcUhnkUzJVUdFybX0ga"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.jsonbin.io/v3/b/65c25032dc74654018a11e0b",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        if (!result) {
          return;
        }
        try {
          const data = JSON.parse(result);
          const newData = formatData(data.record);
          console.log({ newData });
          const newWeeks = newData.map((week, index) => {
            return {
              key: index + 1,
              label: <div className="warp-item">{week.label}</div>,
              children: <Weeks data={week.children} />,
            };
          });
          setWeeks(newWeeks);
        } catch (err) {
          console.error(err);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="agenda">
      <SectionHead title="AGENDA" theme="green" />
      <div className="list">
        <Collapse defaultActiveKey={[1]} ghost items={weeks} />
      </div>
    </div>
  );
};

export default Agenda;
