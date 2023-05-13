import type { Family, Invitation } from '@acme/db';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { AdminDataTable, type ColumnsType } from '../../ui/data-table';

export type InvitationsRelated = Invitation & {
  family: Family;
};

export type AdminInvitationsTableProps = {
  data: InvitationsRelated[];
};

const columns: ColumnsType<InvitationsRelated> = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    width: 200,
  },
  {
    title: 'Family',
    dataIndex: 'family',
    key: 'family',
    width: 200,
    render: (family: Family) => (
      <div className="flex flex-col">
        <span>{family.name}</span>
      </div>
    ),
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

export const AdminInvitationsTable: FC<AdminInvitationsTableProps> = ({
  data,
}) => {
  const router = useRouter();

  return (
    <AdminDataTable<InvitationsRelated>
      data={data}
      columns={columns}
      onCreate={() => router.push('/admin/invitations/create')}
    />
  );
};
