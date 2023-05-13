import Link from 'next/link';
import type { FC } from 'react';

export type AdminSidebarElementProps = {
  href: string;
  label: string;
  icon: JSX.Element;
};

export const AdminSidebarElement: FC<AdminSidebarElementProps> = ({
  href,
  label,
  icon,
}) => {
  return (
    <li>
      <Link href={href} className="flex gap-4">
        <span className="flex-none">{icon}</span>
        <span className="flex-1">{label}</span>
      </Link>
    </li>
  );
};
