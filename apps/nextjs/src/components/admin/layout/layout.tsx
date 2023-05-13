import { type FC, PropsWithChildren, useEffect } from 'react';
import { useSession } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { AdminSidebar } from '../sidebar';
import { AdminLayoutLoader } from '../ui/loaders/layout';

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isLoaded, isSignedIn } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn === false) {
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    return <AdminLayoutLoader />;
  }

  return (
    <AdminSidebar>
      <div className="overflow-hidden">{children}</div>
    </AdminSidebar>
  );
};
