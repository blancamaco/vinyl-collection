import React from "react";
import AlbumCard from "./AlbumCard";
import style from "./styles/AlbumList.module.css";

export function AlbumList({albums}) {
    console.log("AlbumList props:", albums);
    const albumsArray = albums || [];

    //search = search.toLowerCase();

    if(!albumsArray) {
        console.log("Album nombre:" + albumsArray?.[0]?.name);
        return <div>No albums available</div>
    }

    //Object.keys(albums.items).length;
    const listOfAlbums = albumsArray.map((album) => {
        return <AlbumCard key={album.id} name={album.name} image={album.images[0].url} date={album.release_date} />
    })


    // for (let i = 0; i < numberOfAlbums-1; i++){
    //     let item = <AlbumCard name={albums.items[i].name} artist="Coldplay" date={albums.items[i].release_date} />
    //     listOfAlbums={}.push(item);
    //     // if(albums[album].artist.toLowerCase() === search) {
    //     //     let item = <AlbumCard key={`${albums[album].name}-${albums[album].artist}`} name={albums[album].name} artist={albums[album].artist} year={albums[album].year} />
    //     //     listOfResults.push(item);
    //     // }
    //      console.log(item);
    // }
    


    return (
        <div className={style.list}>
            {listOfAlbums}
        </div>
    )
}