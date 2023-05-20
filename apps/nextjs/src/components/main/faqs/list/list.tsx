import type { Faq } from '@acme/db';
import { FC } from 'react';
import { MainFaqsListElement } from './element';

export type MainFaqsListProps = {
  faqs: Faq[];
};

export const MainFaqsList: FC<MainFaqsListProps> = ({ faqs }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {faqs.map((faq) => (
        <MainFaqsListElement key={faq.id} faq={faq} />
      ))}
    </div>
  );
};
