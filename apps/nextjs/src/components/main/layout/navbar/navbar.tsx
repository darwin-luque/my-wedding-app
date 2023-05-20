import { Parisienne } from 'next/font/google';
import type { FC } from 'react';
import Link from 'next/link';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
});

type NavbarElement = {
  id: number;
  name: string;
  url: string;
  children?: Array<NavbarElement>;
};

const elements: NavbarElement[] = [
  {
    id: 1,
    name: 'Nuestra Boda',
    url: '/',
    children: [
      {
        id: 1,
        name: 'Nuestra Historia',
        url: '/#our-story',
      },
    ],
  },
  {
    id: 2,
    name: 'Agenda',
    url: '/agenda',
  },
  {
    id: 3,
    name: 'Personajes',
    url: '/party',
  },
  {
    id: 4,
    name: 'Preguntas Frecuentes',
    url: '/faq',
  },
  {
    id: 5,
    name: 'Fotos',
    url: '/photos',
  },
];

export const MainNavbar: FC = () => {
  return (
    <nav className="navbar sticky top-0 bg-white bg-opacity-30 py-10 backdrop-blur-sm md:py-0">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {elements.map((element) => (
              <li
                key={element.id}
                tabIndex={!!element.children ? 0 : undefined}
              >
                <Link href={element.url}>
                  {element.name}
                  {element.children && (
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  )}
                </Link>
                {element.children && (
                  <ul className="bg-white p-2">
                    {element.children.map((child) => (
                      <li key={child.id}>
                        <Link href={child.url}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link
          className={`btn-ghost btn my-4 text-5xl normal-case ${parisienne.className}`}
          href="/"
        >
          Bessy & Darwin
        </Link>
      </div>
      <div className="hidden w-full justify-center md:flex">
        <ul className="menu menu-horizontal px-1">
          {elements.map((element) => (
            <li
              key={element.id}
              tabIndex={!!element.children ? 0 : undefined}
              className="px-0 text-black lg:px-4"
            >
              <Link href={element.url} className="uppercase">
                {element.name}
                {element.children && (
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                )}
              </Link>
              {element.children && (
                <ul className="bg-white p-2">
                  {element.children.map((child) => (
                    <li key={child.id}>
                      <Link href={child.url}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
