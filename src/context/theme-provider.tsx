'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
export function ThemeProviderCustom({ children }: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {};
  }, []);
  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider enableSystem attribute={'class'}>
      {children}
    </ThemeProvider>
  );
}
