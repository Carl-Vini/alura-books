
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const OpcoesIconesStyled = styled.li`
    display: flex;
    text-align: center;
    width: 25px;

`

const Icones = styled.ul`
    display: flex;
    flex-direction: row-reverse;
    gap: 0.8em;
    align-items: center;
`

const icones = [perfil, sacola]

function OpcoesIcones() {
    return (
        <Icones>
            {icones.map((icone) => {
                return <OpcoesIconesStyled><img src={icone} alt='imagem dos icones perfil e sacola' /></OpcoesIconesStyled>
            })}
        </Icones>
    )
}

export default OpcoesIcones;