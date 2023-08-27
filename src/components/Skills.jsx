import { useEffect, useState } from "react";
import Properties from "./Bubble";
import styles from "../styles/skills.module.css";
import { randColor } from "../utils/randColor";

function Bubble(Properties) {
  const [starColor, setStarColor] = useState([]);

  useEffect(() => {
    import("bootstrap/js/src/modal");
    const colors = Array.from({ length: Properties.rank }, () => randColor());
    setStarColor(colors);
  }, [Properties.rank]);

  const rank = "★".repeat(Properties.rank);

  const stars = Array.from(rank).map((item, i) => {
    const style = { color: starColor[i] };
    return (
      <span key={i} className="rank" style={{ ...style, fontSize: "1.5rem" }}>
        {item}
      </span>
    );
  });

  return (
    <div className="col-4">
      <div
        className={`${styles.bubble} hvr-pulse select`}
        data-bs-html="true"
        style={{ background: `${Properties.color}` }}
      >
        {Properties.body ? (
          <i
            className={`${Properties.icon}`}
            data-bs-toggle="modal"
            data-bs-target={`#${Properties.id}Modal`}
          ></i>
        ) : (
          <i className={`${Properties.icon}`}></i>
        )}
      </div>
      {Properties.body ? (
        <div
          id={`${Properties.id}Modal`}
          className="modal fade"
          aria-hidden="true"
          data-bs-dismiss="modal"
          backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content overflow-visible">
              <div className={`modal-body fw-normal text-end rounded mx-3`}>
                <div className="modal-header position-relative">
                  <h1
                    id={`${Properties.id}ModalLabel`}
                    className="modal-title text-start badge rounded-pill"
                  >
                    <span className="text-break">{Properties.title}</span>
                    <hr />
                  </h1>
                </div>
                {typeof Properties.body === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: Properties.body }} />
                ) : (
                  Properties.body
                )}
                {/* <div className="modal-footer">
                  <span className="rank">{stars}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function SkillsGrid() {
  const rows = [];

  for (let i = 0; i < Properties.length; i += 3) {
    const row = (
      <div className="row justify-content-center" key={i}>
        {Properties.slice(i, i + 3).map((skill) => (
          <Bubble key={skill.id} {...skill} />
        ))}
      </div>
    );
    rows.push(row);
  }

  return (
    <main className="d-flex m-auto">
      <div
        className={`${styles.skills} flex-grow-1 animate__animated animate__fadeInUpBig animate__slow`}
      >
        <div className={`${styles.icons}`}>{rows}</div>
      </div>
    </main>
  );
}
