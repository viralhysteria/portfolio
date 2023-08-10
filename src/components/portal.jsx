import Nav from "./Float";
import SkillsGrid from "./Skills";
import Preview from "./Discord";

export default function Portal() {
  return (
    <>
      <div id="Header">
        <Nav />
      </div>
      <div className="vh-100 d-flex align-items-center" id="Content">
        <SkillsGrid />
        <Preview />
      </div>
    </>
  );
}
