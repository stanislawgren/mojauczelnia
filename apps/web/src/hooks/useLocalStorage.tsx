import { useState } from "react";

export const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, (value: string) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return value;
      } else {
        window.localStorage.setItem(key, defaultValue);
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (value: string) => {
    try {
      window.localStorage.setItem(key, value);
      setStoredValue(value);
    } catch (err) {
      console.error("Error setting localStorage:", err);
    }
  };

  return [storedValue, setValue];
};
