import type { FC } from 'react';

export const AdminLayoutLoader: FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <progress className="progress w-56"></progress>
  </div>
);
