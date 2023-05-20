// src/pages/_app.tsx
import '@uploadthing/react/styles.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppType } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { MainLayout } from '../components/main/layout';
import { AdminLayout } from '../components/admin/layout';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const { pathname } = useRouter();

  const isPublicPage = useMemo(() => !pathname.includes('admin'), [pathname]);
  const isAuthPage = useMemo(
    () => pathname === 'sign-in' || pathname === 'sign-up',
    [pathname],
  );

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        isAuthPage ? (
          <Component {...pageProps} />
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )
      ) : (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )}
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
