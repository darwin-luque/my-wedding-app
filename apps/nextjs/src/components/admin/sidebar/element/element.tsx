import Link from 'next/link';
import { FC } from 'react';

export type SidebarElementProps = {
  href: string;
  label: string;
  icon: JSX.Element;
};

export const SidebarElement: FC<SidebarElementProps> = ({
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
