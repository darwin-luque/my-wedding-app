import { BsFillInboxFill } from 'react-icons/bs';
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';

export type ColumnType<T> = {
  title: string;
  dataIndex?: keyof T;
  key: string;
  width?: number;
  render?: (value: any, record: T, index: number) => JSX.Element;
};

export type ColumnsType<T> = ColumnType<T>[];

export type AdminDataTable<T> = {
  data: T[];
  columns: ColumnsType<T>;
  onDelete?: (rows: T) => void;
  onUpdate?: (row: T) => void;
  onCreate?: () => void;
};

export const AdminDataTable = <T,>(props: AdminDataTable<T>): JSX.Element => {
  const { onDelete, onUpdate, onCreate, ...rest } = props;

  const actionColumn: ColumnType<T> = {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div className="flex justify-center gap-2">
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

  const allColumns = [...rest.columns, actionColumn];

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full">
        <button
          onClick={onCreate}
          className="btn-ghost btn-sm btn ml-4 mb-1 items-center gap-1 text-sm"
        >
          <FaPlus className="text-green-500" size={12} />
          <span className="text-green-500">Create</span>
        </button>
      </div>
      <table className="table w-full text-sm">
        <thead>
          <tr>
            {allColumns.map((column) => (
              <th
                className="text-center"
                key={column.key}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rest.data.length === 0 && (
            <tr>
              <td colSpan={allColumns.length} className="p-0">
                <div className="flex w-full flex-col items-center pt-5">
                  <BsFillInboxFill size={42} />
                  <p>No data</p>
                </div>
              </td>
            </tr>
          )}
          {rest.data.map((row, index) => (
            <tr key={index}>
              {allColumns.map((column) => (
                <td
                  className="text-center"
                  key={column.key}
                  style={{ width: column.width }}
                >
                  {column.render?.(
                    column.dataIndex ? row[column.dataIndex] : undefined,
                    row,
                    index,
                  ) ?? String(column.dataIndex ? row[column.dataIndex] : '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
