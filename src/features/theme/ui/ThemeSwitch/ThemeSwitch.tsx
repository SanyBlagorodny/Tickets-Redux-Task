import { useEffect, useState } from 'react';
import './ThemeSwitch.scss';

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // По умолчанию используем темную тему
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="ThemeSwitch">
      <button
        className={`ThemeSwitch__button ${theme}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <span className="ThemeSwitch__icon sun">☀️</span>
        <span className="ThemeSwitch__icon moon">🌙</span>
      </button>
    </div>
  );
};
