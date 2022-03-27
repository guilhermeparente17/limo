import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: ${props => `${props.width}px`};
    height: 40px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover{
        background-color: #4D4D4D;
    }
`;