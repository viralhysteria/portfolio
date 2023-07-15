import React, { useState } from 'react';
import props from "./skillsProps";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Bubble(props) {
  const rank = "★".repeat(props.level);

  function modal() {
    if (!props.useModal) {
      return null;
    }
    return (
      <div id={`${props.id}Modal`} className="modal fade" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 id={`${props.id}ModalLabel`} className="modal-title">
                {props.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-normal text-start">
              <p className="fw-normal animate__animated animate__fadeIn">
                {props.body}
              </p>
            </div>
            <div className="modal-footer">
              <span className="rank">{rank}</span>
              {props.sage &&
                `<p>Drafted using <a href="https://poe.com/sage">Sage</a></p>`}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-4">
      <div
        className="circle hvr-pulse select"
        data-bs-html="true"
        style={{ background: `${props.gradient}` }}
      >
        <i
          className={`${props.icon}`}
          data-bs-toggle="modal"
          data-bs-target={`#${props.id}Modal`}
        ></i>
      </div>
      {modal()}
    </div>
  );
}

export default function Grid() {
  const rows = [];

  for (let i = 0; i < props.length; i += 3) {
    const row = (
      <div className="row justify-content-around" key={i}>
        {props.slice(i, i + 3).map((skill) => (
          <Bubble key={skill.id} {...skill} />
        ))}
      </div>
    );
    rows.push(row);
  }

  return <>{rows}</>;
}