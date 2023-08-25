import { useEffect, useState } from "react";
import Details from "./Bubble";
import styles from "../styles/skills.module.css";
import { randColor } from "../utils/randColor";

function Bubble(Details) {
  const [starColor, setStarColor] = useState([]);

  useEffect(() => {
    import("bootstrap/js/src/modal");
    const colors = Array.from({ length: Details.rank }, () => randColor());
    setStarColor(colors);
  }, [Details.rank]);

  const rank = "★".repeat(Details.rank);

  const stars = Array.from(rank).map((item, i) => {
    const style = { color: starColor[i] };
    return (
      <span key={i} className="rank" style={style}>
        {item}
      </span>
    );
  });

  return (
    <div className="col-4">
      <div
        className={`${styles.circle} hvr-pulse select`}
        data-bs-html="true"
        style={{ background: `${Details.color}` }}
      >
        {Details.body ? (
          <i
            className={`${Details.icon}`}
            data-bs-toggle="modal"
            data-bs-target={`#${Details.id}Modal`}
          ></i>
        ) : (
          <i className={`${Details.icon}`}></i>
        )}
      </div>
      {Details.body ? (
        <div
          id={`${Details.id}Modal`}
          className="modal fade"
          aria-hidden="true"
          data-bs-dismiss="modal"
          backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <h1
                  id={`${Details.id}ModalLabel`}
                  className="modal-title badge rounded-pill"
                >
                  <span>{Details.title}</span>
                </h1>
              </div>
              <div
                className={`modal-body fw-normal rounded mx-3`}
              >
                {typeof Details.body === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: Details.body }} />
                ) : (
                  Details.body
                )}
              </div>
              <div className="modal-footer justify-content-center">
                <span className="rank">{stars}</span>
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

  for (let i = 0; i < Details.length; i += 3) {
    const row = (
      <div className="row justify-content-center" key={i}>
        {Details.slice(i, i + 3).map((skill) => (
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
