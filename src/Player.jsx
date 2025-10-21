import React from "react";
import styles from "./styles/Player.module.css"

export function Player({album}){
    if (!album) return null;

    const image = album.images?.[0]?.url;

    return (
        <>
            <div className={styles.coverWrapper} >
                <div 
                    className={styles.cover}
                    style={{"--bg-image": image ? `url(${image})` : 'none'}}
                    >
                </div>
            <div className={styles.data}>
                <h2>{album.name}</h2>
                <h4>{album.release_date}</h4>
            </div>
            </div>


        </>
    );
}