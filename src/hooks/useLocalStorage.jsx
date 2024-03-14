import { useEffect, useState } from "react";

export default function useLocalStorage (key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
      console.log(currentValue);
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log('value-2 >>>>', value);
  },[value]);
  console.log('value-3 >>>>', value);
  return [value, setValue];
}