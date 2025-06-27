
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeVariant = 'default' | 'premium';

type ThemeContextType = {
  theme: Theme;
  themeVariant: ThemeVariant;
  setTheme: (theme: Theme) => void;
  setThemeVariant: (variant: ThemeVariant) => void;
  toggleTheme: () => void;
  toggleVariant: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedVariant = localStorage.getItem('themeVariant') as ThemeVariant;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    if (savedVariant) {
      setThemeVariant(savedVariant);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('dark', 'premium', 'light');
    
    // Apply theme variant first
    if (themeVariant === 'premium') {
      root.classList.add('premium');
      if (theme === 'light') {
        root.classList.add('light');
      }
    } else {
      if (theme === 'dark') {
        root.classList.add('dark');
      }
    }
    
    localStorage.setItem('theme', theme);
    localStorage.setItem('themeVariant', themeVariant);
  }, [theme, themeVariant]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleVariant = () => {
    setThemeVariant(themeVariant === 'default' ? 'premium' : 'default');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      themeVariant,
      setTheme,
      setThemeVariant,
      toggleTheme,
      toggleVariant
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
