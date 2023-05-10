import type { FC, ReactNode } from 'react';
import Link from 'next/link';

export type IBreadcrumb = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type HeaderBreadcrumbsProps = {
  items: IBreadcrumb[];
};

export const HeaderBreadcrumbs: FC<HeaderBreadcrumbsProps> = ({ items }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
