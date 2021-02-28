import { useMemo, useState, useContext } from 'react';
import { ThemeContext, themes } from 'context/ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => setTheme(theme === themes.dark ? themes.light : themes.dark )
    // Just to make sure the ThemeAPI is not re-executed, unless theme changes/toggleTheme changes(executed)
    const themeAPI = useMemo(() => ({ theme, toggleTheme }), [ theme, toggleTheme ])

    return (
        <ThemeContext.Provider value={themeAPI}>
            {children}
        </ThemeContext.Provider>
    )
}

// Helper function to get the context of the provider, to the consume
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider
