import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Axios from 'axios';
import Lyric from './components/Lyric';
import Information from './components/Information';

function App() {
  // estados
  const [artist, setArtist] = useState('');
  const [letter, setLetter] = useState('');
  const [info, setInfo] = useState({});

  const apiLetter = async (data) => {
    //const { artist, letter } = data;
    const url = `https://api.lyrics.ovh/v1/${data.artist}/${data.letter}`;
    // consultar api
    let result = await Axios(url)
    // almacenar artista que se busco
    setArtist(data.artist)
    // guardar en el state
    setLetter(result.data.lyrics);
   
  }

  const apiArtist = async () => {
    if(artist) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      // consultar api
      let result = await Axios(url)
      // guardar en el state
      setInfo(result.data.artists[0]);
    }
  }

  useEffect(
    () => {
      apiArtist();
    }, [artist]
  )

  return (
   <Fragment>
      <Form apiLetter={apiLetter} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Information info={info} />
          </div>
          <div className="col-md-6">
            <Lyric letter={letter} />
          </div>
        </div>
      </div>     
   </Fragment>
  );
}

export default App;
