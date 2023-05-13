import { useOrganizationList, useSession } from '@clerk/nextjs';
import { type FC, PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdminSidebar } from '../sidebar';
import { AdminLayoutLoader } from '../ui/loaders/layout';
import { clientEnv } from '../../../env/schema.mjs';

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  // Just to prevent the cms from loading if the user is not signed in
  const [hasAccess, setHasAccess] = useState(false);
  const { isLoaded, isSignedIn } = useSession();
  const { organizationList, isLoaded: organizationIsLoaded } =
    useOrganizationList();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn === false) {
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    if (organizationIsLoaded && organizationList) {
      const hasOrganization = organizationList?.some(
        (org) => org.organization.slug === clientEnv.NEXT_PUBLIC_WEDDING_SLOG,
      );

      setHasAccess(hasOrganization);

      if (!hasOrganization) {
        router.push('/');
      }
    }
  }, [organizationIsLoaded, organizationList, router]);

  if (!isLoaded || !organizationIsLoaded || !organizationList || !hasAccess) {
    return <AdminLayoutLoader />;
  }

  return (
    <AdminSidebar>
      <div className="overflow-hidden">{children}</div>
    </AdminSidebar>
  );
};
