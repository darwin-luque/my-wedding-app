import type { Family, Invitation } from '@prisma/client';
import { type FC } from 'react';
import { AdminDataTable } from '../../ui/data-table';
import { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';

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
    render: (invitation) => (
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
    render: (count) => {
      const color = count.people > 5 ? 'geekblue' : 'green';
      return <Tag color={color}>{count.people}</Tag>;
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

export const AdminFamiliesTable: FC<AdminFamiliesTableProps> = ({ data }) => {
  return <AdminDataTable dataSource={data} columns={columns} />;
};
