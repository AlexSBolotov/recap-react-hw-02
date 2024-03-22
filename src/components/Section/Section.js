import css from "./Section.module.css";
export function Section({ title, children }) {
  return (
    <div className={css.Section_wrapper}>
      <h2 className={css.Section_title}>{title}</h2>
      {children}
    </div>
  );
}
