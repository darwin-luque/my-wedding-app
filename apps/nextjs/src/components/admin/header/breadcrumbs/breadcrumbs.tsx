import { GiBigDiamondRing } from 'react-icons/gi';
import type { FC, ReactNode } from 'react';
import Link from 'next/link';

export type IBreadcrumb = {
  label: string;
  href: string | null;
  icon: ReactNode;
};

export type HeaderBreadcrumbsProps = {
  items: IBreadcrumb[];
};

export const HeaderBreadcrumbs: FC<HeaderBreadcrumbsProps> = ({ items }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/admin">
            <GiBigDiamondRing size={24} color="#eecb87" />
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href}>
            {item.href ? (
              <Link href={item.href}>
                {item.icon}
                {item.label}
              </Link>
            ) : (
              <>
                {item.icon}
                {item.label}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
