import React, { createContext, useContext, useState } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Default is dark theme

    // Toggle the theme between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === 'dark' ? 'dark' : 'light'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// Custom Hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
