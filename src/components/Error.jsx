import React from 'react';

const Erro = ({ mensaje }) => {
    return (
        <p className='my-3 p-3 text-center text-white alert alert-primary'>{mensaje}</p>
    );
}

export default Erro;