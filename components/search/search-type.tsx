import css from "./search.module.css";

export interface SearchTypeProps {
  checked: boolean;
  onChange(checked: boolean): void;
}

export const SearchType: React.FC<SearchTypeProps> = ({
  checked,
  onChange,
}) => {
  const toggle = () => onChange(!checked);
  return (
    <>
      <input
        id="ft"
        type="checkbox"
        className={css.checkbox}
        checked={checked}
        onChange={toggle}
      />
      <label htmlFor="ft">Full Time</label>
    </>
  );
};
