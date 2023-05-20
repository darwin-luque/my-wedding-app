import { Parisienne, EB_Garamond } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';
import { MainNavbar } from './navbar';
import Link from 'next/link';
import { MainCountdown } from './countdown';

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
      {children}
    </div>
  );
};
