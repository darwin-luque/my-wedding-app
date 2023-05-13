import {
  BsFillGeoFill,
  BsFillGridFill,
  BsFillPeopleFill,
  BsFillEnvelopePaperFill,
  BsFillCalendarEventFill,
  BsFillQuestionCircleFill,
  BsFillFileEarmarkRichtextFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import type { FC, PropsWithChildren } from 'react';
import { AdminLogo } from '../ui/logo';
import { AdminSidebarElement, AdminSidebarElementProps } from './element';
import {
  AdminSidebarSection,
  AdminSidebarSectionProps,
} from './section/section';

const singleElements: AdminSidebarElementProps[] = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: <BsFillGridFill size={20} />,
  },
  {
    label: 'FAQ',
    href: '/admin/faq',
    icon: <BsFillQuestionCircleFill size={20} />,
  },
  {
    label: 'Assets',
    href: '/admin/assets',
    icon: <BsFillFileEarmarkRichtextFill size={20} />,
  },
];

const sections: AdminSidebarSectionProps[] = [
  {
    title: 'Guests',
    elements: [
      {
        label: 'Families',
        href: '/admin/families',
        icon: <BsFillPeopleFill size={20} />,
      },
      {
        label: 'People',
        href: '/admin/people',
        icon: <BsFillPersonFill size={20} />,
      },
      {
        label: 'Invitations',
        href: '/admin/invitations',
        icon: <BsFillEnvelopePaperFill size={20} />,
      },
    ],
  },
  {
    title: 'Events',
    elements: [
      {
        label: 'Events',
        href: '/admin/events',
        icon: <BsFillCalendarEventFill size={20} />,
      },
      {
        label: 'Locations',
        href: '/admin/locations',
        icon: <BsFillGeoFill size={20} />,
      },
    ],
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
            <div className="flex-0 btn-ghost btn h-fit px-2">
              <AdminLogo />
            </div>
          </div>
          <div className="h-4" />
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            {singleElements.map((element) => (
              <AdminSidebarElement key={element.href} {...element} />
            ))}
          </ul>
          {sections.map((section) => (
            <AdminSidebarSection key={section.title} {...section} />
          ))}
        </aside>
      </div>
    </div>
  );
};
