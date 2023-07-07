'use client';
import { ThemeProvider } from 'next-themes';

import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider></ThemeProvider>;
};

export default Providers;
