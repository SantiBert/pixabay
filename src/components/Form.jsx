import React, { useState } from 'react';
import Error from './Error';

const Form = () => {

    const [inputvalue, setInputvalue] = useState('');
    const [error, setError] = useState(false);

    const searcImages = e => {
        e.preventDefault();

        //validar
        if (inputvalue.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
    }

    return (
        <form
            onSubmit={searcImages}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen"
                        onChange={e => setInputvalue(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            { error ? <Error mensaje="Agrega un termino para realizar la búsqueda" /> : null}
        </form>
    );
}

export default Form;