import './index.scss';
import { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";

const App = () => {
    useEffect(() => {
        console.log('ta indo né');
    }, []);

    return (
        <div className='app-container'>
            <Header />
            <WelcomeSection />
            <ServicesSection />
            <ConsultationSection />
            <AboutSection />
            <BookSection />
            <FAQSection />
        </div>
    );
};

const Header = () => (
    <header className='header'>
        <img src="your-logo-url.png" alt="Logo da Nutri Life" />
        <nav>
            <a href="#artigos">Artigos</a>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
        </nav>
        <button>Login</button>
    </header>
);

const WelcomeSection = () => (
    <div className='welcome'>
        <h1>Bem-Vindo!</h1>
        <h2>A Nutri Life está pronta para atender você!</h2>
    </div>
);

const ServicesSection = () => (
    <section className='services'>
        <h1>A NUTRI LIFE</h1>
        <div className='cards'>
            {[
                "Ajudará você a tornar seu estilo de vida mais saudável",
                "Você terá acesso a artigos sobre nutrição",
                "Aumento de energia e vitalidade para uma vida mais longa",
                "Consultas e exames pensados no seu bem-estar a preços acessíveis"
            ].map((text, index) => (
                <div key={index}>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    </section>
);

const ConsultationSection = () => (
    <section className='consultation'>
        <h1>Transforme Sua Vida com uma Nutrição Saudável</h1>
        <p>Agende sua consulta, exames, obtenha resultados e seja acompanhado em sua dieta personalizada.</p>
        <p>Acompanhe relatórios, com recomendações e sugestões.</p>
        <a href="#agendar-consulta">Agendar Consulta</a>
    </section>
);

const AboutSection = () => (
    <section className='about'>
        <img src="your-image-url.png" alt="Imagem da nutricionista" />
        <div className='about-text'>
            <h1>Um pouco sobre mim</h1>
            <p>
            Sou nutricionista formada pela Universidade de Harvard e mestre em Nutrição Esportiva pela Universidade de Oxford. Durante meus estudos, aprofundei meu conhecimento em nutrição clínica e esportiva, com foco em dietas personalizadas e desempenho atlético. Continuo me atualizando constantemente para oferecer o melhor suporte a meus clientes na busca por saúde e bem-estar.
            </p>
        </div>
    </section>
);

const BookSection = () => (
    <section className='book'>
        <img src="your-book-image-url.png" alt="Capa do livro da Cristina Miranda" />
        <div className='book-text'>
            <h1>Obtenha o livro escrito por Cristina Miranda</h1>
            <p>
                Cristina Miranda disserta sobre o problema causado pelas dietas das redes sociais, com uma abordagem fundamentada na nutrição.
            </p>
            <a href="#obter-ebook">Obter Ebook</a>
        </div>
    </section>
);

const FAQSection = () => (
    <section className='faq'>
        <h1>Dúvidas Frequentes</h1>
        <div className='faq-box'>
            {Array(3).fill().map((_, index) => (
                <div key={index}>
                    <h3>Exemplo de Pergunta?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            ))}
        </div>
    </section>
);

export default App;
