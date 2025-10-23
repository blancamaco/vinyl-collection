import React from "react";
import styles from "./SearchForm.module.css";

export function SearchForm({userInput, setUserInput, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
          <input className={styles.input} placeholder='Search an artist' type='text' id='search' value={userInput} onChange={(e) => {setUserInput(e.target.value)}}></input>
          <div> {/* for the active press effect*/}
            <button type='submit'>Search</button>
          </div>
        </form>
    );
}