import { PaginationHasNext } from './has-next';
import { PaginationHasPrev } from './has-prev';

import css from './pagination.module.css';

export interface PaginationProps {
  current: number;
  disabled: boolean;
  onChange(page: number): void;
  hasNext: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  disabled,
  onChange,
  hasNext,
}) => {
  const increment = disabled ? () => {} : () => onChange(current + 1);
  const decrement = disabled ? () => {} : () => onChange(current - 1);
  const setPage = disabled
    ? () => () => {}
    : (num: number) => () => onChange(num);
  const active = `${css['pagination-button']} ${css.active}`;
  return (
    <div className={css.pagination}>
      <div className="flex">
        {current > 1 && (
          <PaginationHasPrev
            value={current - 1}
            onSet={setPage(current - 1)}
            onDecrement={decrement}
          />
        )}
        <div className={active}>
          <span>{current}</span>
        </div>
        {hasNext && (
          <PaginationHasNext
            value={current + 1}
            onSet={setPage(current + 1)}
            onIncrement={increment}
          />
        )}
      </div>
    </div>
  );
};
