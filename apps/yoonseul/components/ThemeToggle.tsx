'use client';

import { Button } from '@dalgu/core-design-system';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <Button label='light' onClick={() => setTheme('light')} />
      <Button label='dark' onClick={() => setTheme('dark')} />
    </div>
  );
}
