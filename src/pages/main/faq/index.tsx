import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import SectionHead from "../../../components/section-head";


const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Who can apply to U-Hack?",
    children: "Any university student can apply for U-Hack!",
  },
  {
    key: "2",
    label: "Can team members be from different universities?",
    children: "Teams can consist of 1-5 students. Each members can come from different universities!",
  },
  {
    key: "3",
    label: "What is the end goal of Uhack? ",
    children: "To turn promising submissions into functioning protocols in the real world, and team members into founders. All pitch decks will be circulated among VC networks for maximum exposure.",
  },
  {
    key: "4",
    label: "Do I have to know solidity? ",
    children: "Proficiency in solidity is recommended, but workshops will be held throughout U-Hack to bolster your technical capabilities. Workshops & mentoring will also be regularly held to give your protocol a competitive edge.",
  },
  {
    key: "5",
    label: "What is the timeline for Uhack? ",
    children: "Applications open on Jan 16th & closes Feb 9th. Hackathon’s opening ceremony begins on Feb 29th & submissions are due March 14th. Winners are announced on March 16th.",
  },
  {
    key: "6",
    label: "Where will Uhack be held? ",
    children: "U-Hack will be held entirely online!",
  },
  {
    key: "7",
    label: "Are there any fees to apply?",
    children: "No, there are 0 fees to participate in U-Hack!",
  },
];

const FAQ = () => {
  return (
    <div className="faq" id="faq">
      <SectionHead title="FAQ" theme="white" />
      <div className="list">
        <Collapse ghost items={items} />
      </div>
    
    </div>
  );
};

export default FAQ;
