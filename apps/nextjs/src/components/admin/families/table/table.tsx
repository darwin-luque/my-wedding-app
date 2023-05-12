import type { Family, Invitation } from '@prisma/client';
import { useRouter } from 'next/router';
import { type FC } from 'react';
import { AdminDataTable, type ColumnsType } from '../../ui/data-table';

type FamilyRelated = Family & {
  invitation: Invitation | null;
  _count: {
    people: number;
  };
};

export type AdminFamiliesTableProps = {
  data: FamilyRelated[];
};

const columns: ColumnsType<FamilyRelated> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Invitation',
    dataIndex: 'invitation',
    key: 'invitation',
    width: 200,
    render: (invitation: Invitation) => (
      <div className="flex flex-col">
        <span>{invitation?.code ?? 'No Invitation Yet'}</span>
      </div>
    ),
  },
  {
    title: 'Members count',
    dataIndex: '_count',
    key: '_count',
    width: 150,
    render: (count: FamilyRelated['_count']) => {
      const className = count.people > 5 ? 'badge-primary' : 'badge-secondary';
      return (
        <div className="flex flex-col items-center">
          <div className={`badge-outline badge ${className}`}>
            {count.people}
          </div>
        </div>
      );
    },
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt: Date) => {
      const date = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'CST',
      }).format(new Date(createdAt));
      return (
        <div className="flex flex-col">
          <span>{date}</span>
        </div>
      );
    },
  },
  {
    title: 'Updated at',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (updatedAt: Date) => {
      const date = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'CST',
      }).format(new Date(updatedAt));
      return (
        <div className="flex flex-col">
          <span>{date}</span>
        </div>
      );
    },
  },
];

export const AdminFamiliesTable: FC<AdminFamiliesTableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <AdminDataTable<FamilyRelated>
      data={data}
      columns={columns}
      onCreate={() => router.push('/admin/families/create')}
    />
  );
};
