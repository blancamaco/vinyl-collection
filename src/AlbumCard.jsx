import React, { useState } from "react";
import styles from "./styles/AlbumCard.module.css"

function AlbumCard(props) {
    const {name, image, date} = props;
    const [selected, setSelected] = useState(false);

    function handleSelection(){
        setSelected(!selected);
    }

    return(
        <div className={styles.cardContainer}>
            <div className=
                {`${styles.vinyl} ${selected ? styles.noHover : ""}`} 
                onClick={handleSelection}>
                <div 
                    className={styles.box}  
                    style={{"--bg-image": `url(${image})`}}> 
                </div>
                <div className={`${styles.coverWrapper} ${selected ? styles.selectedBox : ""}`}>
                    <div 
                        className={`${styles.cover} ${selected ? styles.fixedPosition : ""}`}
                        style={{"--bg-image": `url(${image})`}}>
                    </div>
                </div>

            </div>

            
            <h2>{name}</h2>
            <h4>{date}</h4>
        </div>
    )
}

export default AlbumCard;