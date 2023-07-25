import React, { useState, useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";
import skillProps from "./skillProps";
import styles from "../styles/skills.module.css";

function Bubble(skillProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const rank = "★".repeat(skillProps.level);

  return (
    <div className="col-4">
      <div
        className={`${styles.circle} hvr-pulse select`}
        data-bs-html="true"
        style={{ background: `${skillProps.gradient}` }}
      >
        <i
          className={`${skillProps.icon}`}
          data-bs-toggle="modal"
          data-bs-target={`#${skillProps.id}Modal`}
        ></i>
      </div>
      {skillProps.useModal && (
        <div
          id={`${skillProps.id}Modal`}
          className="modal fade"
          aria-hidden="true"
          data-bs-dismiss="modal"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 id={`${skillProps.id}ModalLabel`} className="modal-title">
                  {skillProps.title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {skillProps.body ? (
                <div
                  className={`modal-body fw-normal ${
                    skillProps.center ? "text-center" : "text-start"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(skillProps.body),
                  }}
                ></div>
              ) : (
                skillProps.children
              )}
              <div className="modal-footer">
                <span className="rank">{rank}</span>
                {skillProps.sage ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `Drafted using <a href="https://poe.com/sage">Sage</a>`,
                    }}
                  ></p>
                ) : (
                  false
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

  for (let i = 0; i < skillProps.length; i += 3) {
    const row = (
        <div className="row justify-content-around" key={i}>
          {skillProps.slice(i, i + 3).map((skill) => (
            <Bubble key={skill.id} {...skill} />
          ))}
        </div>
    );
    rows.push(row);
  }

  return (
    <div className="icons">
      {rows}
    </div>
  )
}
