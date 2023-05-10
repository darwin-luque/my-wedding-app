import { FC } from 'react';
import { AdminSidebarElement, AdminSidebarElementProps } from '../element';

export type AdminSidebarSectionProps = {
  title: string;
  elements: AdminSidebarElementProps[];
};

export const AdminSidebarSection: FC<AdminSidebarSectionProps> = ({
  title,
  elements,
}) => {
  return (
    <ul className="menu menu-compact flex flex-col p-0 px-4">
      <li />
      <li className="menu-title">
        <span>{title}</span>
      </li>
      {elements.map((element) => (
        <AdminSidebarElement key={element.href} {...element} />
      ))}
    </ul>
  );
};
