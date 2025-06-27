
import { Moon, Sun, Palette, Crown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeSwitcher = () => {
  const { theme, themeVariant, toggleTheme, toggleVariant } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* Theme Variant Switcher */}
      <button
        onClick={toggleVariant}
        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 group relative"
        aria-label="Toggle theme variant"
        title={themeVariant === 'default' ? 'Switch to Premium Theme' : 'Switch to Default Theme'}
      >
        {themeVariant === 'default' ? (
          <Crown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Palette className="w-5 h-5 text-primary transition-colors" />
        )}
      </button>

      {/* Light/Dark Switcher */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300"
        aria-label="Toggle light/dark mode"
        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
        ) : (
          <Moon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
