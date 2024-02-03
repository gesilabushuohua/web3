import { Telegram, Twitter, isMobile, navlist } from "../../constant";
import logoSvg from "../../assets/home/logo2.svg";
import xSvg from "../../assets/index/x.svg";
import telegramSvg from "../../assets/index/telegram.svg";
import { Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";
import "./m-index.scss";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useRef } from "react";

const scrollToSection = (id: string) => {
  if (!id) {
    return;
  }
  const dom = document.getElementById(id);
  const top = dom?.offsetTop;
  window.scrollTo({ top: top - 80, behavior: "smooth" });
};

const Head = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const isM = isMobile();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (pathname === "/") {
      scrollToSection(target.current);
      target.current = "";
    }
  }, [pathname]);

  const target = useRef("");
  const goPath = (id: string) => {
    console.log({ pathname, id });
    if (pathname !== "/") {
      navigate("/");
      target.current = id;
      return;
    }
    scrollToSection(id);
  };

  const hackathon = {
    text: "HACKATHON",
    id: "hackathon",
    children: [
      {
        label: (
          <div className="menu-item-line" onClick={() => goPath("speakers")}>
            SPEAKERS
          </div>
        ),
        id: "speakers",
        key: "speakers",
      },
      {
        label: (
          <div className="menu-item-line" onClick={() => goPath("spnosors")}>
            SPONSORS
          </div>
        ),
        id: "spnosors",
        key: "spnosors",
      },
      {
        label: (
          <div className="menu-item" onClick={() => goPath("faq")}>
            FAQ
          </div>
        ),
        id: "faq",
        key: "faq",
      },
    ],
  };

  const mItems = [
    {
      label: (
        <div className="menu-item-line" onClick={() => goPath("hackathon")}>
          HACKATHON
        </div>
      ),
      id: "hackathon",
      key: "hackathon",
    },
    {
      label: (
        <div className="menu-item-line" onClick={() => goPath("speakers")}>
          SPEAKERS
        </div>
      ),
      id: "speakers",
      key: "speakers",
    },
    {
      label: (
        <div className="menu-item-line" onClick={() => goPath("spnosors")}>
          SPONSORS
        </div>
      ),
      id: "spnosors",
      key: "spnosors",
    },
    {
      label: (
        <div className="menu-item-line" onClick={() => goPath("faq")}>
          FAQ
        </div>
      ),
      id: "faq",
      key: "faq",
    },
    {
      label: (
        <div className="menu-item-line" onClick={() => navigate("/agenda")}>
          AGENDA
        </div>
      ),
      id: "agenda",
      key: "agenda",
    },
    {
      label: (
        <div className="menu-item-line" onClick={() => navigate("/archive")}>
          ARCHIVE
        </div>
      ),
      id: "archive",
      key: "archive",
    },
    {
      label: (
        <div className="menu-item" onClick={() => {}}>
          SUBMIT
        </div>
      ),
      id: "submit",
      key: "submit",
    },
  ];

  return (
    <div className="head">
      <div className="content">
        <div className="logo" onClick={() => navigate("/")}>
          <img className="head-logo" src={logoSvg} />
        </div>
        {isM ? (
          <Dropdown
            overlayClassName="head-dropdown-over"
            placement="bottom"
            menu={{ items: mItems }}
          >
            <div className="menu">
              <MenuOutlined />
            </div>
          </Dropdown>
        ) : (
          <ul className="navs">
            <Dropdown
              overlayClassName="head-dropdown-over"
              placement="bottom"
              menu={{ items: hackathon.children }}
            >
              <li
                className="nav"
                key={hackathon.id}
                onClick={() => goPath("hackathon")}
              >
                {hackathon.text}
              </li>
            </Dropdown>

            {navlist.map((nav) => (
              <li
                className="nav"
                key={nav.path}
                onClick={() => navigate(nav.path)}
              >
                {nav.text}
              </li>
            ))}

            <a className="nav" href="#">
              <div className="r-link">
                <div className="text">SUBMIT</div>
                <div className="bg"></div>
              </div>
            </a>
          </ul>
        )}

        <div className="head-links">
          <a className="link" href={Twitter} target="_blank">
            <img src={xSvg} />
          </a>
          <a className="link" href={Telegram} target="_blank">
            <img src={telegramSvg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
