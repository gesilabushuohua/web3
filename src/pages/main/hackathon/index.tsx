import SectionHead from "../../../components/section-head";
import "../index.scss";
import telegramSvg from "../../../assets/index/telegram.svg";
import { isMobile, Link, Telegram } from "../../../constant";
import { useNavigate } from "react-router-dom";

const TimeLine = () => {
  return (
    <div className="time-line">
      <div className="item green-pix-rear">
        <div className="g-t-text">Opening Ceremony</div>
        <div className="b-f-text">Feb 10</div>
      </div>
      <div className="item gray-rect-1">
        <div className="item-top-heart"></div>
        <div className="w-p-text">Tuesdays - Thursdays</div>
        <div className="item-bottom-box">
          <div className="title">Workshops</div>
          <ul className="desc">
            <li>
              Solidity & frontend deep dives that give best practises to
              students{" "}
            </li>
            <li>
              <span>
                UI/UX, technical writing, audits and growth workshops to help
                projects actually come to life after the hack
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="item gray-rect-2">
        <div className="item-top-box">
          <div className="title">Technical Assistance</div>
          <div className="desc">
            1-on-1 technical mentors assigned to each team to provide
            comprehensive development support
          </div>
        </div>
        <div className="w-p-text">Fridays</div>
        <div className="item-bottom-box">
          <div className="title">Mentoring</div>
          <ul className="desc">
            Teams will receive regular project feedback from VCs & accelerators
            to enhance project quality.
          </ul>
        </div>
      </div>
      <div className="item gray-rect-3">
        <div className="item-top-box">
          <div className="title">Speaking events</div>
          <div className="desc">
            Founders / team members from top DeFi protocols presenting growth
            challenges they need to face
          </div>
        </div>
        <div className="w-p-text">Saturdays</div>
        <div className="item-bottom-box">
          <div className="title">Fireside chats</div>
          <ul className="desc">
            Inviting one of the greatest minds of the space each weekend to talk
            about future of crypto / blockchain
          </ul>
        </div>
      </div>
      <div className="item green-pix-rear">
        <div className="g-t-text">SUBMISSION</div>
        <div className="b-f-text">Mar 14</div>
        <div className="item-bottom-win"></div>
      </div>
      <div className="item red-rect">
        <div className="r-t-text">AWARDS</div>
        <div className="w-f-text">Mar 16</div>
      </div>
    </div>
  );
};

const MTimeLine = () => {
  return (
    <div className="m-time-line">
      <div className="item">
        <div className="b-f-text green-pix-rear">Feb 10</div>
        <div className="g-t-text">Opening Ceremony</div>
        <div className="item-top-heart"></div>
      </div>
      <div className="item">
        <div className="w-p-text gray-rect-1">Tuesdays - Thursdays</div>
        <div className="gray-rect-1-title">Workshops</div>
      </div>

      <div className="item">
        <div className="w-p-text gray-rect-2">Fridays</div>
        <div className="list">
          <div className="title">Mentoring</div>
          <div className="title">Technical Assistance</div>
        </div>
      </div>
      <div className="item ">
        <div className="w-p-text gray-rect-3">Saturdays</div>
        <div className="gray-rect-3-title">Speaking events</div>
      </div>
      <div className="item ">
        <div className="b-f-text green-pix-react">Mar 14</div>
        <div className="g-t-text">SUBMISSION</div>
      </div>
      <div className="item ">
        <div className="w-f-text red-rect">Mar 16</div>
        <div className="r-t-text">AWARDS</div>
        <div className="item-bottom-win"></div>
      </div>
    </div>
  );
};

const Hackathon = () => {
  const navigate = useNavigate();
  return (
    <div className="hackathon" id="hackathon">
      <SectionHead title="HACKATHON" theme="red" />
      <div className="def">
        <div className="title">Defining the Future of Defi</div>
        <div className="desc">
          With the centralized world faltering, it's clear that DeFi needs fresh
          ideas for broader adoption. This hackathon aims to bring together the
          community to define DeFi’s future: resilient, bankless, and wild with
          innovation.
        </div>
      </div>
      <div className="categories-title">
        <span>Categories that you can submit your project in:</span>
      </div>
      <div className="categories-list">
        <div className="item decorator">Real-World Assets (RWA)</div>
        <div className="item decorator">Adoption and Accessibility</div>
        <div className="item">Perpetual Protocols</div>
        <div className="item decorator-2">Yield Farming</div>
        <div className="item decorator-2">Decentralized Exchanges (DEX)</div>
        <div className="item">Account Abstraction</div>
        <div className="item decorator">DeFi Governance Models</div>
        <div className="item decorator">Regulatory & Compliance Solution</div>
        <div className="item">Surprise Us!</div>
      </div>
      <a href={Link} target="_blank">
        <div className="w-g-link">
          <div className="text">learn more</div>
          <div className="bg" />
        </div>
      </a>

      <div className="content-w title-rect-line">
        <span className="text">TIMELINE</span>
      </div>

      <div className="categories-title-red">
        <span>registration is open until March 2nd:</span>
      </div>

      {isMobile() ? <MTimeLine /> : <TimeLine />}

      <a
        onClick={() => {
          navigate("/agenda");
        }}
      >
        <div className="w-g-link" style={{marginBottom: '40px'}}>
          <div className="text">Agenda</div>
          <div className="bg" />
        </div>
      </a>

      <div className="content-w title-rect-line-red">
        <span className="text">Teams</span>
      </div>

      <ul className="content-w teams">
        <li>Form teams of up to 5 members</li>
        <li>
          Teams must be composed of university students. Members can come from
          different universities
        </li>
        <li>
          Out-hack hundreds to become the 1st winners of the university
          hackathon world series!
        </li>
        <li>
          All pitch decks will be circulated among VC networks for best exposure
        </li>
      </ul>

      <div className="content-w title-rect-line">
        <span className="text">Prizes</span>
      </div>

      <div className="content-w prizes">
        <div className="text">
          Compete for your share of the pool and sponsor bounties!
        </div>
        <div className="rear">
          <div className="rear-text">$100,000 prize</div>
          <div className="bg"></div>
        </div>
      </div>

      <a href={Link} target="_blank">
        <div className="w-g-link">
          <div className="text">apply now</div>
          <div className="bg" />
        </div>
      </a>

      <div className="content-w join">
        <div className="inner-box">
          <div className="text">
            Have any questions? Join our Telegram group:
          </div>
          <a className="link" href={Telegram} target="_blank">
            <img src={telegramSvg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
