import css from './search.module.css';

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
        className={css.checkbox}
        type="checkbox"
        onChange={toggle}
      />
      <label htmlFor="ft" className="ml-1">
        Full Time
      </label>
    </>
  );
};
