// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppType } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { trpc } from '../utils/trpc';
import { AdminLayout } from '../components/admin/layout';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

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
