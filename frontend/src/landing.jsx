import './landing.scss';

export default function App() {

  return (
    <div className="App">
      <div className='cabecaralho'>
        <header>
          <img src="./logo.png" alt="logozinha" />

          <button>Artigos</button>
          <button>Início</button>
          <button>Sobre</button>
          <button>Contato</button>
          <button>Ajuda</button>

          <button className='Login-button'>Login</button>

        </header>
      </div>
      
      <section className='tela-1'>
        <h1>Bem-Vindo!</h1>
        <h3>A NUTRILIFE está pronta para atender você!</h3>
      </section>

      <section className='tela-2'>

        <h1>A NUTRI LIFE</h1>

        <div className='cards'>
          <div>
            <h2>Ajudará você a tornar seu estilo de vida mais saudável</h2>
          </div>

          <div>
            <h2>Você terá acesso a artigos para entender melhor sobre principais assuntos sobre nutrição </h2>
          </div>

          <div>
            <h2>Aumento de energia e vitalidade tornando sua vida mais longa</h2>
          </div>

          <div>
            <h2>Consultas e exames pensados em seu bem-estar, por um preço acessível</h2>
          </div>
        </div>
      </section>


    </div>
  );
}

