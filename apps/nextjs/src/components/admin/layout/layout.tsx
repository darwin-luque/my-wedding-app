import { type FC, PropsWithChildren } from 'react';
import { AdminSidebar } from '../sidebar';

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AdminSidebar>
      <div className="h-full">{children}</div>
    </AdminSidebar>
  );
};
