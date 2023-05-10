import type { FC } from 'react';
import { Parisienne } from '@next/font/google';
import Link from 'next/link';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
  subsets: ['latin-ext'],
});

export const AdminLogo: FC = () => (
  <div className="my-4 items-center justify-center capitalize">
    <Link href="/admin" className="items-center justify-center ">
      <h1 className={`${parisienne.className} w-full text-center text-3xl`}>
        Wedding
      </h1>
      <h1 className={`${parisienne.className} w-full text-center text-3xl`}>
        Luque Alcerro
      </h1>
    </Link>
  </div>
);
