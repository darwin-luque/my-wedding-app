import type { TableColumn } from 'react-data-table-component';
import { type FC } from 'react';
import { Family, Invitation } from '@prisma/client';
import { Empty } from 'antd';
import { AdminDataTable } from '../../ui/data-table';
import { trpc } from '../../../../utils/trpc';
import { useRouter } from 'next/router';

type FamilyRelated = Family & {
  invitation: Invitation | null;
  _count: {
    people: number;
  };
};

const columns: TableColumn<FamilyRelated>[] = [
  {
    name: 'Name',
    selector: (row) => row.name,
  },
  {
    name: 'Invitation',
    selector: (row) => row.invitation?.code ?? 'No invitation yet',
  },
  {
    name: 'Members count',
    selector: (row) => row._count.people,
  },
];

export const AdminFamiliesTable: FC = () => {
  const router = useRouter();
  const { data } = trpc.families.list.useQuery();

  return (
    <AdminDataTable
      data={data ?? []}
      columns={columns}
      theme="solarized"
      pagination
      highlightOnHover
      selectableRows
      noDataComponent={
        <div className="py-5">
          <Empty
            imageStyle={{ height: 60 }}
            description={<span className="text-white">No Families</span>}
          />
        </div>
      }
      onCreate={() => router.push('/admin/families/create')}
    />
  );
};
