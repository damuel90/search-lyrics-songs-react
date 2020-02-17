import React, { Fragment } from 'react';

const Lyric = ({letter}) => {
    if (letter==='') return null;
    return (
        <Fragment>
            <h2>Letra de la canción</h2>
            <p className="letra">{letter}</p>
        </Fragment>
    );
};

export default Lyric;