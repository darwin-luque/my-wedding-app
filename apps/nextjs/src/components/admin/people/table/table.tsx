import {
  type Family,
  type Person,
  type PersonStatus,
  type PersonRole,
  type Invitation,
} from '@acme/db';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { readableRole } from '../../../../utils/readable-role';
import { AdminDataTable, ColumnsType } from '../../ui/data-table';
import Image from 'next/image';

export type PersonRelated = Person & {
  family: Family & {
    invitation: Invitation | null;
  };
};

export type AdminPeopleTableProps = {
  data: PersonRelated[];
};

const columns: ColumnsType<PersonRelated> = [
  {
    title: 'Picture',
    dataIndex: 'picture',
    key: 'picture',
    render: (picture) => (
      <div className="avatar">
        <div className="mask mask-squircle h-12 w-12">
          <Image
            src={picture}
            alt="avatar"
            width={48}
            height={48}
            className="mask mask-squircle h-12 w-12 object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    width: 100,
    render: (role: PersonRole) => <p>{readableRole(role).en}</p>,
  },
  {
    title: 'Family',
    dataIndex: 'family',
    key: 'family',
    width: 150,
    render: (family: Family) => <p>{family.name}</p>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (status: PersonStatus) => {
      let className = '';
      if (status === 'PENDING') {
        className = 'badge-primary';
      }
      if (status === 'REJECTED') {
        className = 'badge-accent';
      }
      if (status === 'CONFIRMED') {
        className = 'badge-secondary';
      }
      return (
        <div className="flex flex-col items-center justify-center">
          <div className={`badge-outline badge ${className}`}>{status}</div>
        </div>
      );
    },
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 200,
    render: (createdAt) => {
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
    width: 200,
    render: (updatedAt) => {
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

export const AdminPeopleTable: FC<AdminPeopleTableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <AdminDataTable<PersonRelated>
      data={data}
      columns={columns}
      onCreate={() => router.push('/admin/people/create')}
    />
  );
};
