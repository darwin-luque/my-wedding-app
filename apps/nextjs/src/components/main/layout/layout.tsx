import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { Parisienne, EB_Garamond } from 'next/font/google';
import { MainCountdown } from './countdown';
import { MainFooter } from './footer';
import { MainNavbar } from './navbar';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
});

const ebGaramond = EB_Garamond({
  weight: '400',
  style: 'normal',
});

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="flex h-screen w-screen flex-col overflow-auto"
      style={ebGaramond.style}
    >
      <div className="relative hidden w-full items-center justify-center md:flex">
        <Link
          className="mt-6 mb-2 text-5xl normal-case tracking-normal hover:cursor-pointer"
          style={parisienne.style}
          href="/"
        >
          Bessy & Darwin
        </Link>
        <div className="absolute top-3 right-5">
          <MainCountdown />
        </div>
      </div>
      <MainNavbar />
      <div className="flex-1">{children}</div>
      <MainFooter />
    </div>
  );
};
