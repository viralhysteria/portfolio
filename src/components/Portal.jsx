import SkillsGrid from "./Skills";
import Preview from "./Discord";

export default function Portal() {
  return (
    <>
      <div className="d-flex" id="Content">
        <SkillsGrid />
        <Preview />
      </div>
    </>
  );
}
