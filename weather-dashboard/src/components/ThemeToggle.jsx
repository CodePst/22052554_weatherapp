import React from 'react';

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
