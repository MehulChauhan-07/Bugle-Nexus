import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext({ theme: "system", setTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    )?.matches;
    const resolved =
      theme === "system" ? (prefersDark ? "dark" : "light") : theme;

    root.dataset.theme = resolved;
    root.classList.toggle("dark", resolved === "dark");
    localStorage.setItem("theme", theme);

    const handler = (e) => {
      if (theme === "system") {
        root.classList.toggle("dark", e.matches);
      }
    };
    window
      .matchMedia?.("(prefers-color-scheme: dark)")
      ?.addEventListener("change", handler);
    return () =>
      window
        .matchMedia?.("(prefers-color-scheme: dark)")
        ?.removeEventListener("change", handler);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Example toggle button
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const cycle = () => {
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    );
  };
  return (
    <button
      className="button secondary"
      aria-label="Toggle theme"
      onClick={cycle}
    >
      Theme: {theme}
    </button>
  );
}
