import "./Header.css";

const Header = ({ idioma, trocarIdioma }) => {
  const traducoes = {
    'pt-br': 'Português',
    'en': 'Inglês',
  };

  const handleSelectChange = (event) => {
    const novoIdioma = event.target.value;
    trocarIdioma(novoIdioma);
  };

  return (
    <div className="header">
        <h1>NETFLIX</h1>
        <select name="options" id="options" value={idioma} onChange={handleSelectChange}>
        {Object.keys(traducoes).map((codigoIdioma) => (
          <option key={codigoIdioma} value={codigoIdioma}>
            {traducoes[codigoIdioma]}
          </option>
        ))}
        </select>
        <a href="https://www.netflix.com/br/login" target="_blank">
          <button>{idioma === 'pt-br' ? 'Entrar' : 'Sign In'}</button>
        </a>
    </div>
  )
}

export default Header;
