import { FC } from 'react';
import { UserButton } from '@clerk/nextjs';
import { HeaderBreadcrumbs, IBreadcrumb } from './breadcrumbs';

export type HeaderProps = {
  breadcrumbs?: IBreadcrumb[];
};

export const Header: FC<HeaderProps> = ({ breadcrumbs = [] }) => {
  return (
    <>
      <div className="navbar bg-base-100 px-10 pt-8">
        <div className="flex-1">
          <HeaderBreadcrumbs items={breadcrumbs} />
        </div>
        <div className="flex-0 flex items-center gap-10">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  height: 48,
                  width: 48,
                },
              },
            }}
          />
        </div>
      </div>
      <div className="divider mt-2" />
    </>
  );
};
