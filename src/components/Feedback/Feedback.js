import { options } from "common/constants";
import shortid from "shortid";
import css from "./Feedback.module.css";

export function Feedback({ onBtnClick }) {
  return (
    <div className={css.Feedback_wrapper}>
      {options.map((option) => (
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          className={css.Feedback_button}
          onClick={onBtnClick}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
