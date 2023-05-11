// src/pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import type { AppType } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { AdminLayout } from '../components/admin/layout';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const { pathname } = useRouter();

  const isPublicPage = useMemo(() => !pathname.includes('admin'), [pathname]);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )}
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
