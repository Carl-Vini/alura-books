import OpcoesHeader from "../opcoesHeader";
import OpcoesIcones from "../opcoesIcones";
import Logo from '../logo'

import styled from 'styled-components'

const HeaderContainer = styled.header`
    
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <OpcoesIcones />
        </HeaderContainer>
    )
}


export default Header;