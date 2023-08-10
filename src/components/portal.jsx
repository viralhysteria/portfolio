import Nav from "./Float";
import SkillsGrid from "./Skills";
import Preview from "./Discord";

export default function Portal() {
  return (
    <>
      <div className="d-flex" id="Header">
        <Nav />
      </div>
      <div className="d-flex" id="Content">
        <SkillsGrid />
        <Preview/> 
      </div>
    </>
  );
}
