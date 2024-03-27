import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { IoIosMoon, IoIosSunny } from "react-icons/io";

export default function Header({ filters, filter, onFilterChange }) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <button onClick={toggleDarkMode} className={styles.toggle}>
                {!darkMode && <IoIosMoon />}
                {darkMode && <IoIosSunny />}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index} >
                        <button 
                            className={`${styles.filter} ${filter === value && styles.selected}`}
                            onClick={() => onFilterChange(value)}>{value}</button>
                    </li>
                ))}
            </ul>
        </header>
    )
}
