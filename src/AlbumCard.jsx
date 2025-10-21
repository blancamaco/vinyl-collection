import React, { useState } from "react";
import styles from "./styles/AlbumCard.module.css"

function AlbumCard(props) {
    const {name, image, date, selected, onClick, onSelect} = props;
    // const [selected, setSelected] = useState(false);

    // function handleSelection(){
    //     setSelected(!selected);
    // }

    function handleClick(e) {
        onClick(e);
        onSelect(image);
        console.log("evento: " + image);
    }

    return(
        <div className={styles.cardContainer}>
            <div className= {`${styles.vinyl} ${selected ? styles.noHover : ""}`} 
                onClick={handleClick}
                >
                <div 
                    className={styles.box}  
                    style={{"--bg-image": `url(${image})`}}> 
                </div>
                <div className={`${styles.coverWrapper} ${selected ? styles.selectedBox : ""}`} >
                    <div 
                        className={`${styles.cover} ${selected ? styles.fixedPosition : ""}`}
                        style={{"--bg-image": `url(${image})`}}>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default AlbumCard;