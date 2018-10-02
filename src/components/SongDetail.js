import React from 'react';

function SongDetail({artist, name, image}){
    return(
        <React.Fragment>
        <h3>{artist}</h3>
        <p>{name}</p>
        <img src={image} alt=""/>
      </React.Fragment>
    )
}

export default SongDetail;