import {
  BsFillGeoFill,
  BsFillGridFill,
  BsFillPeopleFill,
  BsFillEnvelopePaperFill,
  BsFillCalendarEventFill,
  BsFillQuestionCircleFill,
  BsFillFileEarmarkRichtextFill,
} from 'react-icons/bs';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { AdminLogo } from '../logo';
import { SidebarElement, SidebarElementProps } from './element';

const elements: (SidebarElementProps & { id: number })[] = [
  {
    id: 1,
    label: 'Dashboard',
    href: '/admin',
    icon: <BsFillGridFill size={20} />,
  },
  {
    id: 2,
    label: 'Families',
    href: '/admin/families',
    icon: <BsFillPeopleFill size={20} />,
  },
  {
    id: 3,
    label: 'Invitations',
    href: '/admin/invitations',
    icon: <BsFillEnvelopePaperFill size={20} />,
  },
  {
    id: 4,
    label: 'Events',
    href: '/admin/events',
    icon: <BsFillCalendarEventFill size={20} />,
  },
  {
    id: 5,
    label: 'FAQ',
    href: '/admin/faq',
    icon: <BsFillQuestionCircleFill size={20} />,
  },
  {
    id: 6,
    label: 'Assets',
    href: '/admin/assets',
    icon: <BsFillFileEarmarkRichtextFill size={20} />,
  },
  {
    id: 7,
    label: 'Locations',
    href: '/admin/locations',
    icon: <BsFillGeoFill size={20} />,
  },
];

export const AdminSidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drawer-mobile drawer bg-base-100">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div
        className="drawer-content"
        style={{
          scrollBehavior: 'smooth',
          scrollPaddingTop: '5rem',
        }}
      >
        {children}
      </div>
      <div
        className="drawer-side"
        style={{
          scrollBehavior: 'smooth',
          scrollPaddingTop: '5rem',
        }}
      >
        <label htmlFor="drawer" className="drawer-overlay" />
        <aside className="w-80 bg-base-200">
          <div className="sticky top-0 z-20 hidden items-center justify-center gap-2 bg-base-200 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex">
            <Link
              href="/"
              aria-current="page"
              aria-label="Homepage"
              className="flex-0 btn-ghost btn h-fit px-2"
            >
              <AdminLogo />
            </Link>
          </div>
          <div className="h-4" />
          <ul className="menu flex flex-col p-0 px-4">
            {elements.map((element) => (
              <SidebarElement key={element.id} {...element} />
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};
