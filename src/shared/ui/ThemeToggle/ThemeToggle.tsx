import './ThemeToggle.scss';
import { useEffect, useState } from 'react';

const THEME_KEY = 'theme';

type Theme = 'light' | 'dark';

const getSystemTheme = (): Theme =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as Theme) || getSystemTheme();
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  };

  const isDark = theme === 'dark';
  return (
    <button
      className={`ThemeToggle ThemeToggle--${theme}`}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      type="button"
    >
      <span className="ThemeToggle__label" aria-hidden>
        {isDark ? 'NIGHTMODE' : 'DAYMODE'}
      </span>
      <span className="ThemeToggle__thumb" aria-hidden>
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
