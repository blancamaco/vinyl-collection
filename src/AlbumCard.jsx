import React from "react";

function AlbumCard(props) {
    const {name, artist, year} = props;

    return(
        <div className="cardContainer">
            <h2>{name}</h2>
            <h3>{artist}</h3>
            <h4>{year}</h4>
        </div>
    )
}

export default AlbumCard;