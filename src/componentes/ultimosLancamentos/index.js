import { livros } from './dadosUltimosLancamentos.js'
import styled from 'styled-components';
import { Titulo } from '../titulo/index.js';
import CardRecomenda from '../cardRecomenda/index.js';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(props) {
    return (
        <UltimosLancamentosContainer>
                <Titulo cor='blue' tamanhoFonte='36px' alinhamento='center'>Ultimos Lançamentos!</Titulo>
                <NovosLivrosContainer>
                {livros.map((livro) => {
                    return <img src={livro.src} key={livro.id} alt='' />
                })}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
            
        </UltimosLancamentosContainer>
        
    )
}

export default UltimosLancamentos;