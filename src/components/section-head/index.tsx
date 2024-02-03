import "./index.scss";
import "./m-index.scss";

interface Props {
  title: string;
  theme: string;
}
const SectionHead = (props: Props) => {
  const { title, theme } = props;
  const headTheme = `section-head head-${theme}`;
  return (
    <div className={headTheme}>
      <div className="title">
        <span className="title-text">{title}</span>
      </div>
    </div>
  );
};

export default SectionHead;
