import Nav from "./Float";
import SkillsGrid from "./Skills";
import Preview from "./Discord";

export default function Portal() {
  return (
    <>
      <div className="pattern"></div>
      <div>
        <div>
          <Nav />
        </div>
        <div className="d-flex justify-content-center">
          <main>
            <div className="skills overflow-hidden animate__animated animate__fadeInUpBig animate__slow">
              <SkillsGrid />
            </div>
          </main>
        </div>
        <Preview />
      </div>
    </>
  );
}
