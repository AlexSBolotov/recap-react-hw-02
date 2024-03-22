import shortid from "shortid";
import PropTypes from "prop-types";
import css from "./Statistic.module.css";

export function Statistic({ stat }) {
  const optionKeys = Object.keys(stat);
  const total = optionKeys.reduce((acc, el) => acc + stat[el], 0);
  const positivePercentage = Math.floor((stat.good / total) * 100);
  const optionColor = () => {
    if (isNaN(positivePercentage)) {
      return "#f0f0f0";
    } else if (positivePercentage >= 50) {
      return "green";
    } else if (positivePercentage >= 30) {
      return "yellow";
    } else {
      return "red";
    }
  };
  return (
    <div className={css.Statistic_wrapper}>
      <p className={css.Statistic_header}>Current Statistic: </p>
      {optionKeys.map((key) => (
        <p className={css.Statistic_item} key={shortid.generate()}>
          {key}: {stat[key]}
        </p>
      ))}
      <p
        style={{ backgroundColor: optionColor() }}
        className={css.Statistic_header}
      >
        {total === 0 ? "No feedback given" : `Total: ${total}`}
      </p>
      <p>
        Positive feedback: {isNaN(positivePercentage) ? 0 : positivePercentage}%
      </p>
    </div>
  );
}

Statistic.propTypes = {
  stat: PropTypes.objectOf(PropTypes.number.isRequired),
};
