import { Moon, Sun } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../redux/features/themeSlice';
import { useAppSelector } from '../utils/hooks';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useAppSelector((state) => state.theme.theme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
                <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
        </button>
    );
};

export default ThemeToggle;
