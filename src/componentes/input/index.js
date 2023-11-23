import styled from "styled-components"

const InputStyled = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 15px 20px;
    border-radius: 10px;
    width: 300px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }
`

export default InputStyled;

