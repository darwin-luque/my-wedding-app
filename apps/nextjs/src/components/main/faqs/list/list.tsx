import type { Faq } from '@acme/db';
import { FC } from 'react';
import { MainFaqsListElement } from './element';
import { MainFaqsListLoading } from './list.loading';

export type MainFaqsListProps = {
  faqs: Faq[];
  loading?: boolean;
};

export const MainFaqsList: FC<MainFaqsListProps> = ({
  faqs,
  loading = false,
}) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      {(loading || faqs.length === 0) && <MainFaqsListLoading />}
      {!loading &&
        faqs.map((faq) => <MainFaqsListElement key={faq.id} faq={faq} />)}
    </div>
  );
};
