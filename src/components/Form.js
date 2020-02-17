import React, { useState } from 'react';

const Form = ({apiLetter}) => {
    const [dataForm, setDataForm] = useState({
        artist:'',
        letter:''
    });

    const handleChange = e => setDataForm({
        ...dataForm, 
        [e.target.name]: e.target.value
    });

    const handleSubmit = e => {
        e.preventDefault();
        apiLetter(dataForm);
    }

    return (
    <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit={handleSubmit}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Nombre Artista" 
                                        required
                                        value={dataForm.artist}
                                        onChange={handleChange}
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="letter" 
                                        placeholder="Nombre Canción" 
                                        required
                                        value={dataForm.letter}
                                        onChange={handleChange}
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
};

export default Form;