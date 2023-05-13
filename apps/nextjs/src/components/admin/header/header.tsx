import type { FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { UserButton } from '@clerk/nextjs';
import { HeaderBreadcrumbs, IBreadcrumb } from './breadcrumbs';

export type HeaderProps = {
  breadcrumbs?: IBreadcrumb[];
};

export const AdminHeader: FC<HeaderProps> = ({ breadcrumbs = [] }) => {
  return (
    <>
      <div className="navbar bg-base-100 px-10 pt-8">
        <div className="flex-1">
          <span
            className="tooltip tooltip-bottom mr-4 before:text-xs before:content-[attr(data-tip)]"
            data-tip="Menu"
          >
            <label
              htmlFor="drawer"
              className="btn-ghost drawer-button btn-square btn lg:hidden"
            >
              <GiHamburgerMenu size={24} />
            </label>
          </span>
          <HeaderBreadcrumbs items={breadcrumbs} />
        </div>
        <div className="flex-0 flex items-center gap-10">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  height: 40,
                  width: 40,
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
