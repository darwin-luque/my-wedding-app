import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

export const MainFaqsListLoading: FC = () => (
  <>
    <div className="h-14 w-5/6 md:w-5/12 2xl:w-1/4">
      <Skeleton height="100%" />
    </div>
    <div className="h-14 w-5/6 md:w-5/12 2xl:w-1/4">
      <Skeleton height="100%" />
    </div>
    <div className="h-14 w-5/6 md:w-5/12 2xl:w-1/4">
      <Skeleton height="100%" />
    </div>
    <div className="h-14 w-5/6 md:w-5/12 2xl:w-1/4">
      <Skeleton height="100%" />
    </div>
  </>
);
