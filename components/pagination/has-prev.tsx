import css from "./pagination.module.css";
import { ElipsisIcon, LeftIcon } from "../common/icon";

interface PaginationHasPrevProps {
  value: number;
  onSet(): void;
  onDecrement(): void;
}

export const PaginationHasPrev: React.FC<PaginationHasPrevProps> = ({
  value,
  onSet,
  onDecrement,
}) => {
  const more = `${css["pagination-button"]} ${css.more}`;
  return (
    <>
      <div className={css["pagination-button"]} onClick={onDecrement}>
        <LeftIcon />
      </div>
      {value >= 2 && (
        <div className={more}>
          <ElipsisIcon />
        </div>
      )}
      <div className={css["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
    </>
  );
};
