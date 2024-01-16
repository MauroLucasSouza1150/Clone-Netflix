import "./Main.css"

const Main = ({ idioma}) => {
  return (
    <div>
        <div className="main">
            <h1>{idioma === 'pt-br' ? 'Filmes, Séries e muito mais,sem limites.' : 'Movies, Series and much more,without limits'}
            </h1>
            <p>{idioma === 'pt-br' ? 'Assista Onde quiser.Cancele quando quiser' : 
            'Watch anywhere. Cancel anytime.'}</p>
            <p>{idioma === 'pt-br' ? 'Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.' :
            'Ready to watch? Enter your email to create or restart your membership.'}</p>
            <div className="form">
                <input type="email" name="" id="" placeholder="E-mail"/>
                <a href="https://help.netflix.com/pt/node/112419" target="_blank">
                    <button>{idioma === 'pt-br' ? 'Vamos Lá' : 'Get Started'} &gt;</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Main