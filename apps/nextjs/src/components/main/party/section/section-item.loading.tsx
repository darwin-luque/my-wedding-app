import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

export const MainPartySectionItemLoading: FC = () => (
  <div className="h-52 w-40 text-center">
    <Skeleton borderRadius="50%" width={160} height={160} />
    <Skeleton className="mt-4" height={16} width={120} />
  </div>
);
