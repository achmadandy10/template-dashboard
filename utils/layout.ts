import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, router: Router) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
