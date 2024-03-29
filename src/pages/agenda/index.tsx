import { Collapse } from "antd";
import SectionHead from "../../components/section-head";
import "./index.scss";
import { isMobile } from "../../constant";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);

const LinkMap = {
  WATCH: "watchLink",
  "BOOK A SLOT": "bookLink",
  JOIN: "joinLink",
};

const WeekIndex = {
  "OPENING WEEK": 0,
  "WEEK 1": 1,
  "WEEK 2": 2,
  "WEEK 3": 3,
  "WEEK 4": 4,
  "CLOSING WEEK": 5,
};
const WeekNum = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toLocalTime = (time: string) => {
  /* // 获取当前系统时区
  const systemTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // 将指定时间转换为系统时区时间
  const res = dayjs(time).tz(systemTimezone); */
  const res = dayjs(time);
  return res;
};

const formatData = (data: Array<any>) => {
  const tempWeeks = [
    {
      key: "1",
      label: "OPENING WEEK",
      children: [],
    },
    {
      key: "2",
      label: "WEEK 1",
      children: [],
    },
    {
      key: "3",
      label: "WEEK 2",
      children: [],
    },
    {
      key: "4",
      label: "WEEK 3",
      children: [],
    },
    {
      key: "5",
      label: "WEEK 4",
      children: [],
    },
    {
      key: "6",
      label: "CLOSING WEEK",
      children: [],
    },
  ];

  const WeekDayMap = {
    "OPENING WEEK": {},
    "WEEK 1": {},
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
      const localDay = toLocalTime(day);
      const num = localDay.day();
      const date = localDay.format("MM/DD");
      const dayVal = weekVal[day];
      return {
        week: WeekNum[num],
        date: date,
        day,
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
          const { activeStatus, dateUTC, startTimeUTC, endTimeUTC, button } =
            item;
          const start = toLocalTime(`${dateUTC} ${startTimeUTC}:00`).format(
            "h:mm A"
          );
          const end = toLocalTime(`${dateUTC} ${endTimeUTC}:00`).format(
            "h:mm A"
          );
          const time = !startTimeUTC
            ? ""
            : !endTimeUTC
            ?  `${start} GMT`
            : `${start} - ${end} GMT`;
          const link = item[LinkMap[button]] || "";
          const isActive = activeStatus === "active";
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
                  {/* {isM ? null : <img className="rect" src={rect} />} */}
                  <div className="info">
                    <div className="workshop">{item.type}</div>
                    <div className="recording">{item.format}</div>
                  </div>
                  {/* {isM ? null : <img className="rect" src={rect} />} */}
                  {isActive ? (
                    <a href={link} target="_blank">
                      <div className="w-link">
                        <div className="text">{item.button}</div>
                        <div className="bg"></div>
                      </div>
                    </a>
                  ) : (
                    <div className="w-link w-link-disabled">
                      <div className="text">{item.button}</div>
                      <div className="bg"></div>
                    </div>
                  )}
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
  const [keys, setKeys] = useState([]);

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
          const newKeys = [];
          const newWeeks = newData.map((week, index) => {
            const len = week.children.length;
            if (len > 0) {
              const start = week.children[0].day;
              const end = week.children[len-1].day;
              if (dayjs().diff(start, 'days') >= 0 && dayjs().diff(end, 'days') <= 0) {
                newKeys.push(week.key);
              }
              
            }
            return {
              key: index + 1,
              label: <div className="warp-item">{week.label}</div>,
              children: <Weeks data={week.children} />,
            };
          });
          setWeeks(newWeeks);
          setKeys(newKeys);
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
        <Collapse activeKey={keys} ghost items={weeks} onChange={(vals) => { setKeys(vals) }}/>
      </div>
    </div>
  );
};

export default Agenda;
