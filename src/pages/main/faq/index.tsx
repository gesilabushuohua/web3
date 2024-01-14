import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import SectionHead from "../section-head";
import xSvg from "../../../assets/index/x.svg";
import telegramSvg from "../../../assets/index/telegram.svg";
import USvg from "./assets/U.svg";
import hSvg from "./assets/h.svg";
import aSvg from "./assets/a.svg";
import cSvg from "./assets/c.svg";
import kSvg from "./assets/k.svg";

const text = `test`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Who can apply to U-Hack?",
    children: "Any university student can apply for U-Hack!",
  },
  {
    key: "2",
    label: "Can team members be from different universities?",
    children: text,
  },
  {
    key: "3",
    label: "Do I have to know Solidity?",
    children: text,
  },
  {
    key: "4",
    label: "What is the end goal of U-Hack? ",
    children: text,
  },
  {
    key: "5",
    label: "What is the duration of U-Hack? ",
    children: text,
  },
  {
    key: "6",
    label: "Where will U-Hack be held?",
    children: text,
  },
];

const FAQ = () => {
  return (
    <div className="faq" id="faq">
      <SectionHead title="FAQ" theme="white" />
      <div className="list">
        <Collapse ghost items={items} />
      </div>
      <div className="green-box">
        <div className="item">Connect</div>
        <div className="item">Organized by</div>
        <div className="item">get in touch</div>
      </div>
      <div className="footer">
        <div className="links">
          <a className="link" href="#">
            <img src={xSvg} />
          </a>
          <a className="link" href="#">
            <img src={telegramSvg} />
          </a>
        </div>
        <div className="u-hack">
          <img src={USvg} />
          <img className="h" src={hSvg} />
          <img className="a" src={aSvg} />
          <img className="c" src={cSvg} />
          <img className="k" src={kSvg} />
        </div>
        <div className="concat">
          <div className="e-mail">
            <a href="mailto:uhack@mail.com">uhack@mail.com</a>
          </div>
          <a href="mailto:uhack@mail.com">
            <div className="w-link">
              <div className="text">APPLY</div>
              <div className="bg"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
