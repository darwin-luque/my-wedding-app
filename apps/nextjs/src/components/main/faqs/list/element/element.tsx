import type { Faq } from '@acme/db';
import { FC } from 'react';

export type MainFaqsListElementProps = {
  faq: Faq;
};

export const MainFaqsListElement: FC<MainFaqsListElementProps> = ({ faq }) => {
  return (
    <div className="h-fit w-5/6 md:w-5/12 2xl:w-1/4">
      <div
        tabIndex={0}
        className="collapse-plus rounded-box collapse w-full border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">{faq.question}</div>
        <div className="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};
