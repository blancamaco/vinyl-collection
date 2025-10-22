import React from "react";
import styles from "./styles/Player.module.css"
<script src="https://kit.fontawesome.com/e8be5c9cb4.js" crossorigin="anonymous"></script>

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
                {/* <h4>{album.release_date}</h4> */}
                <button
                    onClick={() => window.open(album.external_urls?.spotify, "_blank", "noopener,noreferrer")}>
                    <i className="fa-brands fa-spotify" aria-hidden="true"></i>
                    Open album in Spotify
                </button>
                
            </div>
            </div>
        </>
    );
}