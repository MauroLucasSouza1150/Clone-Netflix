import './App.css'
import Header from './components/Header'
import Main from './components/Main'

import React, { useState } from 'react';

function App() {
  const [idioma, setIdioma] = useState('pt-br');

  const traducoes = {
    'pt-br': {
      saudacao: 'Bem-vindo ao meu aplicativo!',
    },
    'en': {
      saudacao: 'Welcome to my app!',
    },
  };

  const trocarIdioma = (novoIdioma) => {
    setIdioma(novoIdioma);
  };

  return (
    <div className='container-all'>
      <div className='app'>
        <Header idioma={idioma} trocarIdioma={trocarIdioma}/>
        <Main idioma={idioma} trocarIdioma={trocarIdioma}/>
      </div>
    </div>
  )
}

export default App
