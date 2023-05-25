import 'react-loading-skeleton/dist/skeleton.css';
import '@uploadthing/react/styles.css';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
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
    () => pathname.includes('sign-in') || pathname.includes('sign-up'),
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
        <>
          <SignedIn>
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn afterSignInUrl="/admin" />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
