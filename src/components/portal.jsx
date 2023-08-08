import Nav from "./Float";
import SkillsGrid from "./Skills";
import Preview from "./Discord";

export default function Portal() {
  return (
    <>
      <div className="pattern"></div>
      <div>
        <div className="position-absolute pt-4 ps-4" id="Header">
          <Nav />
        </div>
        <div
          className="vh-100 d-flex justify-content-center align-items-center"
          id="Content"
        >
          <SkillsGrid />
          <Preview />
        </div>
      </div>
    </>
  );
}
