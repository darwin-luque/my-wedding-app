import { Parisienne } from 'next/font/google';
import { type FC } from 'react';

const parisienne = Parisienne({
  weight: '400',
  style: 'normal',
});

export type SectionTitleProps = {
  title: string;
};

export const MainSectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mx-auto flex w-[80vw] items-center justify-between">
      <div className="h-3 flex-1 border-y-2 border-black" />
      <h2
        className={`px-10 text-4xl font-black leading-8 tracking-normal ${parisienne.className}`}
      >
        {title}
      </h2>
      <div className="h-3 flex-1 border-y-2 border-black" />
    </div>
  );
};
