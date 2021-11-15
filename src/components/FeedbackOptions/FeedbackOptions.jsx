import React from "react";
import styles from "./FeedbackOptions.css";

function Feedback({ onClick }) {
  return (
    <>
      <div className="button__area">
        <ul className="button__list">
          <li>
            <button
              className="button__btn good"
              id="good_value"
              onClick={onClick}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className="button__btn neutral"
              id="neutral_value"
              onClick={onClick}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className="button__btn bad"
              id="bad_value"
              onClick={onClick}
            >
              Bad
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Feedback;
