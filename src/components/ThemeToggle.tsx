'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme;
    applyTheme(saved || 'system');

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystem = () => {
      if ((localStorage.getItem('theme') || 'system') === 'system') {
        document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', updateSystem);

    return () => mq.removeEventListener('change', updateSystem);
  }, []);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    localStorage.setItem('theme', t);
    if (t === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }
  };

  return (
    <div className="flex justify-end p-4">
      <select
        value={theme}
        onChange={(e) => applyTheme(e.target.value as Theme)}
        className="border px-2 py-1 rounded text-sm bg-transparent"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
