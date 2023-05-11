import {
  type Family,
  type Person,
  type PersonStatus,
  type PersonRole,
  type Invitation,
} from '@acme/db';
import { FC } from 'react';
import { Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AdminDataTable } from '../../ui/data-table';
import { readableRole } from '../../../../utils/readable-role';

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
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    width: 150,
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
    width: 150,
    render: (status: PersonStatus) => {
      let color = 'geekblue';
      if (status === 'PENDING') {
        color = 'gold';
      }
      if (status === 'REJECTED') {
        color = 'volcano';
      }
      if (status === 'CONFIRMED') {
        color = 'green';
      }
      return (
        <Tag color={color} key={status}>
          {status}
        </Tag>
      );
    },
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
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
  return <AdminDataTable dataSource={data} columns={columns} />;
};
