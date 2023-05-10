import { useMemo } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

export type TableToolkitProps<T> = {
  selectedRows: T[];
  onUpdate?: (selectedRow: T) => void;
  onDelete?: (selectedRows: T[]) => void;
  onCreate?: () => void;
};

export const TableToolkit = <T,>({
  selectedRows,
  onUpdate,
  onDelete,
  onCreate,
}: TableToolkitProps<T>): JSX.Element | null => {
  const baseDisabled = useMemo(() => selectedRows.length === 0, [selectedRows]);
  return (
    <div className="flex items-center justify-evenly gap-5 self-start border border-x-0 border-t-0 px-4 py-2">
      <p className="w-28 text-xs">Selected Items: {selectedRows.length}</p>
      <button
        onClick={() => selectedRows[0] && onUpdate?.(selectedRows[0])}
        disabled={baseDisabled || selectedRows.length > 1}
        className="btn-ghost btn gap-1 rounded-lg text-sky-600"
      >
        <FaEdit />
        <span>edit</span>
      </button>
      <button
        disabled={baseDisabled}
        onClick={() => onDelete?.(selectedRows)}
        className="btn-ghost btn gap-1 rounded-lg text-red-600"
      >
        <FaTrash />
        <span>delete</span>
      </button>
      <button
        onClick={() => onCreate?.()}
        className="btn-ghost btn gap-1 rounded-lg text-green-600"
      >
        <FaPlus />
        <span>create</span>
      </button>
    </div>
  );
};
