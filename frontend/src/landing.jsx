import './landing.scss';

export default function App() {

  return (
    <div className="App">
      <div className='cabecaralho'>
        <header>
          <img src="./logo.png" alt="logozinha"  />
          <div>
            
          <button>Artigos</button>
          <button>Início</button>
          <button>Sobre</button>
          <button>Contato</button>
          <button>Ajuda</button>

          <button className='Login-button'>Login</button>
          </div>

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

      <section className='tela-3'>
        <h1>Transforme Sua Vida com Nutrição Saudável</h1>

        <p>Agende sua consulta, exames, obtenha seus resultados e seja acompanhado em sua dieta personalizada </p>
        <p>Acompanhe relatórios, com recomendações e sugestões</p>

        <button>Agendar Consulta</button>
      </section>

<section className='tela-4'>
  <h1>UM POUCO SOBRE MIM</h1>

  <p>   Sou nutricionista formada pela Universidade de Harvard e mestre em Nutrição Esportiva pela Universidade de Oxford. Durante meus estudos, aprofundei meu conhecimento em nutrição clínica e esportiva, com foco em dietas personalizadas e desempenho atlético. Continuo me atualizando constantemente para oferecer o melhor suporte a meus clientes na busca por saúde e bem-estar.</p>

  <img src="" alt="" />
</section>

<section className='tela-5'>

  <h1>OBTENHA O LIVRO ESCRITO POR CRISTINA MIRANDA</h1>

  <p>Baseado em Trabalho de Conclusão de Curso, editado e melhorado, Cristina Miranda disserta sobre o problema causado pelas redes sociais em relação as redes sociais, com suas dietas mirabolantes sem entender os conceitos base da nutrição. </p>

  <button>Obter E-book</button>
</section>

<section>DUVIDAS FREQUENTES</section>
    </div>
  );
}

