// src/pages/_app.tsx
import { createTheme } from 'react-data-table-component';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppType } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { AdminLayout } from '../components/admin/layout';
import { trpc } from '../utils/trpc';
import '../styles/globals.css';

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
  'solarized',
  {
    text: {
      primary: '#38BDF8',
      secondary: '#818CF8',
    },
    background: {
      default: 'rgb(15, 23, 42)',
    },
    context: {
      background: '#0CA5E9',
      text: '#FFFFFF',
    },
    divider: {
      default: '#454545',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(15, 23, 42,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark',
);

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
