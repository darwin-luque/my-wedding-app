import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';
import type { TableProps } from 'antd/es/table';
import { Table, TableColumnType } from 'antd';

export type AdminDataTable<T> = TableProps<T> & {
  onDelete?: (rows: T) => void;
  onUpdate?: (row: T) => void;
  onCreate?: () => void;
};

export const AdminDataTable = <T extends object>(
  props: AdminDataTable<T>,
): JSX.Element => {
  const { onDelete, onUpdate, onCreate, ...rest } = props;

  const actionColumn: TableColumnType<T> = {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div className="flex gap-2">
        <button
          onClick={() => onUpdate?.(record)}
          className="btn-ghost btn-xs btn gap-2"
        >
          <FaPen className="text-blue-500" />
          <span className="text-blue-500">Edit</span>
        </button>
        <button
          onClick={() => onDelete?.(record)}
          className="btn-ghost btn-xs btn gap-2"
        >
          <FaTrash className="text-red-500" />
          <span className="text-red-500">Delete</span>
        </button>
      </div>
    ),
  };

  return (
    <Table
      {...rest}
      columns={[...(rest.columns ?? []), actionColumn]}
      size="large"
      tableLayout="fixed"
      title={() => (
        <div>
          <button onClick={onCreate} className="btn-ghost btn gap-2">
            <FaPlus className="text-green-500" />
            <span className="text-green-500">Create</span>
          </button>
        </div>
      )}
    />
  );
};
