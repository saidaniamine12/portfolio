import { useState } from "react";
import styles from "./dark-mode-toggle.module.css";
import { useTheme } from "@/components/theme-provider";

const DarkModeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { setTheme } = useTheme();

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        className={styles.switch__input}
        id="Switch"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className={styles.switch__label} htmlFor="Switch">
        <span className={styles.switch__indicator}></span>
        <span className={styles.switch__decoration}></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
