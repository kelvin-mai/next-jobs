import css from "./pagination.module.css";
import { ElipsisIcon, RightIcon } from "../common/icon";

interface PaginationHasNextProps {
  value: number;
  onSet(): void;
  onIncrement(): void;
}

export const PaginationHasNext: React.FC<PaginationHasNextProps> = ({
  value,
  onSet,
  onIncrement,
}) => {
  const more = `${css["pagination-button"]} ${css.more}`;
  return (
    <>
      <div className={css["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
      <div className={more}>
        <ElipsisIcon />
      </div>
      <div className={css["pagination-button"]} onClick={onIncrement}>
        <RightIcon />
      </div>
    </>
  );
};
