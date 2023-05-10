import { useCallback, useMemo, useState } from 'react';
import DataTable, { TableProps } from 'react-data-table-component';
import { TableToolkit } from './table-toolkit';

export type AdminDataTable<T> = TableProps<T> & {
  onDelete?: (rows: T[]) => void;
  onUpdate?: (row: T) => void;
  onCreate?: () => void;
};

export const AdminDataTable = <T,>(props: AdminDataTable<T>): JSX.Element => {
  const { onDelete, onUpdate, onCreate, ...rest } = props;
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback((state: { selectedRows: T[] }) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm('Are you sure you want to delete the selected rows? ')
      ) {
        setToggleCleared(!toggleCleared);
        onDelete?.(selectedRows);
      }
    };

    return (
      <button key="delete" onClick={handleDelete} className="btn-danger btn">
        Delete
      </button>
    );
  }, [onDelete, selectedRows, toggleCleared]);

  return (
    <>
      <TableToolkit
        selectedRows={selectedRows}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onCreate={onCreate}
      />
      <DataTable
        {...rest}
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        noHeader
      />
    </>
  );
};
