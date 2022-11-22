import { useState,} from "react"

export function useDarkMode() {
    const [theme , settheme] = useState('light');

    const toggleButton =() => {
         theme === 'light'? settheme('dark'):settheme('light');
    }
  return [theme, toggleButton]
}
