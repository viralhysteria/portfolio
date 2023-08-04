import React, { useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";
import Properties from "./Bubble";
import styles from "../styles/skills.module.css";

function Bubble(Properties) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const rank = "★".repeat(Properties.rank);

  return (
    <div className="col-4">
      <div
        className={`${styles.circle} hvr-pulse select`}
        data-bs-html="true"
        style={{ background: `${Properties.color}` }}
      >
        <i
          className={`${Properties.icon}`}
          data-bs-toggle="modal"
          data-bs-target={`#${Properties.id}Modal`}
        ></i>
      </div>
      {Properties.body && Properties.body.length > 0 && (
        <div
          id={`${Properties.id}Modal`}
          className="modal fade"
          aria-hidden="true"
          data-bs-dismiss="modal"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 id={`${Properties.id}ModalLabel`} className="modal-title">
                  {Properties.title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className={`modal-body fw-normal ${
                  Properties.center ? "text-center" : "text-start"
                }`}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(Properties.body),
                }}
              ></div>
              <div className="modal-footer">
                <span className="rank">{rank}</span>
                {Properties.sage && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `Drafted using <a href="https://poe.com/sage">Sage</a>`,
                    }}
                  ></p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Grid() {
  const rows = [];

  for (let i = 0; i < Properties.length; i += 3) {
    const row = (
      <div className="row justify-content-around" key={i}>
        {Properties.slice(i, i + 3).map((skill) => (
          <Bubble key={skill.id} {...skill} />
        ))}
      </div>
    );
    rows.push(row);
  }

  return <div className="icons">{rows}</div>;
}
