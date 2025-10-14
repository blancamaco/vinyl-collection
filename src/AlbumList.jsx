import React from "react";
import { albums } from "./data/sampleData";
import AlbumCard from "./AlbumCard";

export function AlbumList(props) {
    let {search} = props;
    search = search.toLowerCase();

    const listOfResults = [];
    for (const album in albums){
        if(albums[album].artist.toLowerCase() === search) {
            let item = <AlbumCard key={`${albums[album].name}-${albums[album].artist}`} name={albums[album].name} artist={albums[album].artist} year={albums[album].year} />
            listOfResults.push(item);
        }
    }

    return (
        <div>
            {listOfResults}
        </div>
    )
}